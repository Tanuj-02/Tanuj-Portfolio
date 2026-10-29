const API_ROOT = "https://api.github.com";
const OWNER = "Tanuj-02";
const TOPIC = "portfolio-timeline";

async function getAllPages(path, fetcher, signal) {
  const items = [];
  let url = `${API_ROOT}${path}`;

  while (url) {
    const response = await fetcher(url, {
      headers: { Accept: "application/vnd.github+json" },
      signal,
    });

    if (!response.ok) throw new Error(`GitHub request failed (${response.status})`);

    const page = await response.json();
    if (!Array.isArray(page)) throw new Error("GitHub returned an unexpected response");
    items.push(...page);
    url = response.headers?.get?.("link")?.match(/<([^>]+)>; rel="next"/)?.[1] ?? null;
  }

  return items;
}

export async function getTimelineProjects({ fetcher = fetch, signal } = {}) {
  const repos = await getAllPages(
    `/users/${OWNER}/repos?type=owner&per_page=100&sort=updated`,
    fetcher,
    signal,
  );
  const selected = repos.filter((repo) =>
    !repo.private && !repo.archived && repo.has_issues && repo.topics?.includes(TOPIC),
  );

  const projects = await Promise.all(selected.map(async (repo) => ({
    repo: {
      full_name: repo.full_name,
      name: repo.name,
      description: repo.description ?? "",
      html_url: repo.html_url,
    },
    milestones: (await getAllPages(
      `/repos/${repo.full_name}/milestones?state=open&per_page=100`,
      fetcher,
      signal,
    )).map((milestone) => ({
      id: milestone.id,
      title: milestone.title,
      description: milestone.description ?? "",
      due_on: milestone.due_on,
      html_url: milestone.html_url,
      open_issues: milestone.open_issues,
      closed_issues: milestone.closed_issues,
    })),
  })));

  return projects.filter((project) => project.milestones.length > 0);
}

export function getProgress(milestones) {
  const completed = (milestones ?? []).reduce((sum, milestone) => sum + milestone.closed_issues, 0);
  const total = (milestones ?? []).reduce((sum, milestone) => sum + milestone.closed_issues + milestone.open_issues, 0);
  return { completed, total, percent: total ? Math.floor((completed / total) * 100) : 0 };
}
