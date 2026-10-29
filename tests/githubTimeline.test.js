import test from "node:test";
import assert from "node:assert/strict";
import { getProgress, getTimelineProjects } from "../src/utils/githubTimeline.js";

function okJson(data) {
  return { ok: true, json: async () => data, headers: { get: () => null } };
}

test("loads milestones only for public repositories with the timeline topic", async () => {
  const calls = [];
  const fetcher = async (url) => {
    calls.push(url);
    if (url.includes("/users/Tanuj-02/repos?")) {
      return okJson([
        { full_name: "Tanuj-02/peerskillexchange", name: "peerskillexchange", html_url: "https://github.com/Tanuj-02/peerskillexchange", description: "Skill exchange", topics: ["portfolio-timeline"], private: false, archived: false, has_issues: true },
        { full_name: "Tanuj-02/old", topics: [], private: false, archived: false, has_issues: true },
        { full_name: "Tanuj-02/private", topics: ["portfolio-timeline"], private: true, archived: false, has_issues: true },
      ]);
    }
    return okJson([{ id: 1, title: "Launch", open_issues: 5, closed_issues: 8 }]);
  };

  const projects = await getTimelineProjects({ fetcher });

  assert.equal(projects.length, 1);
  assert.equal(projects[0].repo.full_name, "Tanuj-02/peerskillexchange");
  assert.equal(projects[0].milestones[0].title, "Launch");
  assert.equal(calls.length, 2);
});

test("omits tagged repositories without an open milestone", async () => {
  const fetcher = async (url) => url.includes("/users/")
    ? okJson([{ full_name: "Tanuj-02/empty", topics: ["portfolio-timeline"], private: false, archived: false, has_issues: true }])
    : okJson([]);

  assert.deepEqual(await getTimelineProjects({ fetcher }), []);
});

test("finds a tagged repository on a later GitHub page", async () => {
  const fetcher = async (url) => {
    if (url.includes("page=2")) {
      return okJson([{ full_name: "Tanuj-02/second", topics: ["portfolio-timeline"], private: false, archived: false, has_issues: true }]);
    }
    if (url.includes("/users/")) {
      return {
        ...okJson([]),
        headers: { get: () => '<https://api.github.com/users/Tanuj-02/repos?page=2>; rel="next"' },
      };
    }
    return okJson([{ id: 2, title: "Next", open_issues: 1, closed_issues: 0 }]);
  };

  const projects = await getTimelineProjects({ fetcher });
  assert.equal(projects[0].repo.full_name, "Tanuj-02/second");
});

test("reports GitHub failures instead of claiming there are no projects", async () => {
  const fetcher = async () => ({ ok: false, status: 403 });
  await assert.rejects(() => getTimelineProjects({ fetcher }), /403/);
});

test("progress matches GitHub's whole-number percentage", () => {
  assert.deepEqual(getProgress([{ closed_issues: 8, open_issues: 5 }]), {
    completed: 8,
    total: 13,
    percent: 61,
  });
  assert.deepEqual(getProgress([]), { completed: 0, total: 0, percent: 0 });
});
