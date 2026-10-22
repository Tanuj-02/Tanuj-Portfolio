import { useEffect, useState } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { EffectCards } from "swiper/modules";
import "swiper/css";
import "swiper/css/effect-cards";
import { useTheme } from "../ThemeContext";

const GITHUB_USER = "Tanuj-02";
const TIMELINE_URL = `https://raw.githubusercontent.com/${GITHUB_USER}/Tanuj-Portfolio/master/public/project-timeline.json`;

async function getTimeline(signal) {
  for (const url of [TIMELINE_URL, "/project-timeline.json"]) {
    try {
      const response = await fetch(url, { signal });
      if (!response.ok) continue;
      const data = await response.json();
      if (Array.isArray(data.projects)) return data.projects;
    } catch (error) {
      if (signal.aborted) throw error;
    }
  }
  throw new Error("Timeline snapshot is unavailable");
}

function formatDate(date) {
  return new Intl.DateTimeFormat("en", { month: "short", day: "numeric", year: "numeric" }).format(new Date(date));
}

function getProgress(milestones) {
  const completed = milestones.reduce((sum, milestone) => sum + milestone.closed_issues, 0);
  const total = milestones.reduce((sum, milestone) => sum + milestone.closed_issues + milestone.open_issues, 0);
  return { completed, total, percent: total ? Math.floor((completed / total) * 100) : 0 };
}

function TimelineCard({ project, isDark }) {
  const { repo, milestones } = project;
  const progress = getProgress(milestones);

  return (
    <article className={`flex h-full min-w-0 flex-col rounded-3xl border p-5 shadow-xl sm:p-7 ${
      isDark
        ? "border-white/10 bg-zinc-900 text-white shadow-black/25"
        : "border-slate-200 bg-white text-slate-900 shadow-slate-200/70"
    }`}>
      <div className="flex flex-wrap items-start justify-between gap-3">
        <div className="min-w-0 flex-1">
          <span className="text-[11px] font-bold uppercase tracking-[0.2em] text-purple-500">Active project</span>
          <h3 className="mt-1 break-words text-xl font-bold sm:text-2xl">{repo.name}</h3>
        </div>
        <a
          href={repo.html_url}
          target="_blank"
          rel="noopener noreferrer"
          className={`shrink-0 rounded-full border px-3 py-1.5 text-xs font-semibold transition-colors ${
            isDark
              ? "border-purple-400/30 text-purple-300 hover:bg-purple-500/10"
              : "border-purple-200 text-purple-700 hover:bg-purple-50"
          }`}
        >
          GitHub ↗
        </a>
      </div>

      {repo.description && (
        <p className={`mt-3 text-sm leading-relaxed ${isDark ? "text-slate-400" : "text-slate-600"}`}>
          {repo.description}
        </p>
      )}

      <div className={`mt-6 rounded-2xl border p-4 ${
        isDark ? "border-purple-400/15 bg-purple-500/10" : "border-purple-100 bg-purple-50/80"
      }`}>
        <div className="flex items-end justify-between gap-3">
          <div>
            <p className={`text-xs font-semibold uppercase tracking-wider ${isDark ? "text-slate-400" : "text-slate-500"}`}>
              Overall progress
            </p>
            <p className={`mt-1 text-xs ${isDark ? "text-slate-300" : "text-slate-600"}`}>
              {progress.total ? `${progress.completed} of ${progress.total} issues and PRs closed` : "No issues or PRs yet"}
            </p>
          </div>
          <span className="text-3xl font-bold leading-none text-purple-500">{progress.percent}%</span>
        </div>
        <div
          className={`mt-4 h-2.5 overflow-hidden rounded-full ${isDark ? "bg-slate-700" : "bg-purple-200/70"}`}
          role="progressbar"
          aria-label={`${repo.name} overall progress`}
          aria-valuenow={progress.percent}
          aria-valuemin={0}
          aria-valuemax={100}
        >
          <div className="h-full rounded-full bg-gradient-to-r from-purple-600 to-fuchsia-400" style={{ width: `${progress.percent}%` }} />
        </div>
      </div>

      <div className="mt-6">
        <p className={`text-xs font-bold uppercase tracking-[0.18em] ${isDark ? "text-slate-400" : "text-slate-500"}`}>
          Milestones
        </p>
        <ol className={`mt-4 space-y-5 border-l-2 pl-5 ${isDark ? "border-purple-500/40" : "border-purple-200"}`}>
          {milestones.map((milestone) => {
            const phase = getProgress([milestone]);
            return (
              <li key={milestone.id} className="relative min-w-0">
                <span className="absolute -left-[27px] top-1 h-3 w-3 rounded-full border-2 border-purple-500 bg-white" aria-hidden="true" />
                <div className="flex flex-wrap items-baseline justify-between gap-x-3 gap-y-1">
                  <a
                    href={milestone.html_url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="min-w-0 font-semibold leading-snug hover:text-purple-500 hover:underline"
                  >
                    {milestone.title} ↗
                  </a>
                  {milestone.due_on && (
                    <time className={`shrink-0 text-xs ${isDark ? "text-slate-400" : "text-slate-500"}`} dateTime={milestone.due_on}>
                      Due {formatDate(milestone.due_on)}
                    </time>
                  )}
                </div>
                {milestone.description && (
                  <p className={`mt-1 text-xs leading-relaxed sm:text-sm ${isDark ? "text-slate-400" : "text-slate-600"}`}>
                    {milestone.description}
                  </p>
                )}
                <div className="mt-2 flex items-center gap-3">
                  <div className={`h-1.5 flex-1 overflow-hidden rounded-full ${isDark ? "bg-slate-700" : "bg-slate-200"}`}>
                    <div className="h-full rounded-full bg-purple-500" style={{ width: `${phase.percent}%` }} />
                  </div>
                  <span className={`text-xs ${isDark ? "text-slate-400" : "text-slate-500"}`}>
                    {phase.total ? `${phase.percent}%` : "0 items"}
                  </span>
                </div>
              </li>
            );
          })}
        </ol>
      </div>
    </article>
  );
}

export default function ProjectTimeline() {
  const { isDark } = useTheme();
  const [projects, setProjects] = useState([]);
  const [status, setStatus] = useState("loading");

  useEffect(() => {
    const controller = new AbortController();

    async function loadTimeline() {
      try {
        const timelineProjects = await getTimeline(controller.signal);

        if (!controller.signal.aborted) {
          setProjects(timelineProjects);
          setStatus("ready");
        }
      } catch (error) {
        if (!controller.signal.aborted) {
          console.error("Could not load GitHub milestones", error);
          setStatus("error");
        }
      }
    }

    loadTimeline();
    return () => controller.abort();
  }, []);

  return (
    <section id="timeline" className="mt-16 w-[90%] scroll-mt-24 lg:w-[80%]" aria-labelledby="timeline-heading">
      <div className="mx-auto max-w-2xl text-center">
        <span className="text-xs font-bold uppercase tracking-[0.3em] text-purple-500">In progress</span>
        <h2 id="timeline-heading" className={`mt-2 text-3xl font-bold sm:text-4xl ${isDark ? "text-white" : "text-slate-900"}`}>
          WHAT I&apos;M BUILDING
        </h2>
        <div className="mx-auto mt-1 h-1 w-38 rounded-full bg-purple-500" />
        <p className={`mt-4 text-base lg:text-xl ${isDark ? "text-slate-300" : "text-slate-600"}`}>
          Follow the progress of my current projects, updated from GitHub.
        </p>
      </div>

      {status === "loading" && <p className="mt-8 text-center text-slate-500" role="status">Loading project progress…</p>}
      {status === "error" && <p className="mt-8 text-center text-slate-500" role="status">Project progress is temporarily unavailable.</p>}
      {status === "ready" && projects.length === 0 && <p className="mt-8 text-center text-slate-500">No active project milestones right now.</p>}

      {status === "ready" && projects.length > 0 && (
        <>
          <div className="mt-9 lg:hidden">
            {projects.length === 1 ? (
              <div className="mx-auto max-w-xl"><TimelineCard project={projects[0]} isDark={isDark} /></div>
            ) : (
              <>
                <Swiper effect="cards" grabCursor autoHeight modules={[EffectCards]} className="mx-auto w-[90%] max-w-xl">
                  {projects.map((project) => (
                    <SwiperSlide key={project.repo.full_name} className="!h-auto">
                      <TimelineCard project={project} isDark={isDark} />
                    </SwiperSlide>
                  ))}
                </Swiper>
                <p className={`mt-5 text-center text-xs ${isDark ? "text-slate-400" : "text-slate-500"}`}>
                  Swipe to explore {projects.length} projects
                </p>
              </>
            )}
          </div>

          <div className={`mx-auto mt-9 hidden max-w-6xl gap-6 lg:grid lg:justify-items-center ${
            projects.length === 1 ? "grid-cols-1" : "grid-cols-2"
          }`}>
            {projects.map((project) => (
              <div key={project.repo.full_name} className={`w-full ${projects.length === 1 ? "max-w-2xl" : ""}`}>
                <TimelineCard project={project} isDark={isDark} />
              </div>
            ))}
          </div>
        </>
      )}
    </section>
  );
}
