import { mkdir, readFile, writeFile } from "node:fs/promises";

const owner = "Tanuj-02";
const output = new URL("../public/project-timeline.json", import.meta.url);
const token = process.env.GITHUB_TOKEN;

if (!token) throw new Error("GITHUB_TOKEN is required to sync the timeline");

async function getAllPages(path) {
  const items = [];
  let url = `https://api.github.com${path}`;

  while (url) {
    const response = await fetch(url, {
      headers: {
        Accept: "application/vnd.github+json",
        Authorization: `Bearer ${token}`,
        "User-Agent": "portfolio-timeline-sync",
      },
    });

    if (!response.ok) {
      throw new Error(`GitHub returned ${response.status} for ${url}: ${await response.text()}`);
    }

    items.push(...await response.json());
    url = response.headers.get("link")?.match(/<([^>]+)>; rel="next"/)?.[1] ?? null;
  }

  return items;
}

const repos = await getAllPages(`/users/${owner}/repos?type=owner&per_page=100&sort=updated`);
const eligible = repos.filter((repo) => repo.has_issues && !repo.archived);
const checked = await Promise.all(eligible.map(async (repo) => {
  const milestones = await getAllPages(`/repos/${repo.full_name}/milestones?state=open&per_page=100`);
  return {
    repo: {
      full_name: repo.full_name,
      name: repo.name,
      description: repo.description ?? "",
      html_url: repo.html_url,
    },
    milestones: milestones.map((milestone) => ({
      id: milestone.id,
      title: milestone.title,
      description: milestone.description ?? "",
      due_on: milestone.due_on,
      html_url: milestone.html_url,
      open_issues: milestone.open_issues,
      closed_issues: milestone.closed_issues,
    })),
  };
}));
const projects = checked.filter((project) => project.milestones.length > 0);

let previous;
try {
  previous = JSON.parse(await readFile(output, "utf8"));
} catch {
  previous = null;
}

const unchanged = JSON.stringify(previous?.projects) === JSON.stringify(projects);
const age = Date.now() - Date.parse(previous?.updatedAt ?? "");
if (unchanged && age < 30 * 24 * 60 * 60 * 1000) {
  console.log("Timeline has not changed.");
  process.exit(0);
}

await mkdir(new URL("../public/", import.meta.url), { recursive: true });
await writeFile(output, `${JSON.stringify({ updatedAt: new Date().toISOString(), projects }, null, 2)}\n`);
console.log(`Saved ${projects.length} active project(s).`);
