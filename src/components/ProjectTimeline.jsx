import { useCallback, useEffect, useRef, useState } from "react";
import { createPortal } from "react-dom";
import { useTheme } from "../ThemeContext";
import { getProgress, getTimelineProjects } from "../utils/githubTimeline";

const CACHE_KEY = "portfolio-timeline-v2";
const CACHE_AGE_MS = 15 * 60 * 1000;

function formatDate(date) {
  return new Intl.DateTimeFormat("en", { month: "short", day: "numeric", year: "numeric" }).format(new Date(date));
}

function TimelineProject({ project, isDark, onSelect }) {
  const { repo, milestones } = project;
  const progress = getProgress(milestones);

  return (
    <article className={`w-full min-w-0 max-w-sm self-start overflow-hidden rounded-2xl border transition-colors hover:border-purple-400 md:w-[calc(50%-0.5rem)] xl:w-[calc(33.333%-0.667rem)] ${
      isDark
        ? "border-white/10 bg-zinc-900/80 text-white"
        : "border-slate-200 bg-white/90 text-slate-900"
    }`}>
      <div className="flex justify-end px-4 pt-3 sm:px-5">
        <a href={repo.html_url} target="_blank" rel="noopener noreferrer" className="text-xs font-semibold text-purple-500 hover:underline focus-visible:outline-2 focus-visible:outline-purple-500">View repository ↗</a>
      </div>
      <button type="button" onClick={(event) => onSelect(project, event.currentTarget)} className="block w-full text-left focus-visible:outline-2 focus-visible:outline-offset-[-3px] focus-visible:outline-purple-500">
      <span className="block px-4 pb-4 pt-1 sm:px-5 sm:pb-5">
        <span className="flex min-w-0 items-start gap-3">
          <span className={`mt-1 flex h-8 w-8 shrink-0 items-center justify-center rounded-lg text-sm font-bold ${isDark ? "bg-purple-500/15 text-purple-300" : "bg-purple-100 text-purple-700"}`} aria-hidden="true">
            ↗
          </span>
          <span className="min-w-0 flex-1">
            <span className={`text-[10px] font-bold uppercase tracking-[0.18em] ${isDark ? "text-purple-300" : "text-purple-700"}`}>In progress</span>
            <span className="block break-words text-base font-bold leading-snug sm:text-lg">{repo.name}</span>
          </span>
          <span className="shrink-0 text-xl font-bold tabular-nums text-purple-500 sm:text-2xl">{progress.percent}%</span>
        </span>
        <span className={`mt-4 block h-2 overflow-hidden rounded-full ${isDark ? "bg-slate-700" : "bg-slate-200"}`} role="progressbar" aria-label={`${repo.name} overall progress`} aria-valuenow={progress.percent} aria-valuemin={0} aria-valuemax={100}>
          <span className="block h-full rounded-full bg-gradient-to-r from-purple-600 to-fuchsia-400" style={{ width: `${progress.percent}%` }} />
        </span>
        <span className={`mt-3 flex flex-wrap items-center justify-between gap-2 text-xs ${isDark ? "text-slate-400" : "text-slate-600"}`}>
          <span>{progress.total ? `${progress.completed} of ${progress.total} issues closed` : "No issues yet"} · {milestones.length} {milestones.length === 1 ? "milestone" : "milestones"}</span>
          <span className="font-semibold text-purple-500">View timeline ↗</span>
        </span>
      </span>
      </button>
    </article>
  );
}

function TimelineDialog({ project, isDark, onClose, returnFocusRef }) {
  const { repo, milestones } = project;
  const progress = getProgress(milestones);
  const dialogRef = useRef(null);
  const closeRef = useRef(null);

  useEffect(() => {
    const previousOverflow = document.body.style.overflow;
    const returnFocusTo = returnFocusRef.current;
    document.body.style.overflow = "hidden";
    closeRef.current?.focus();

    function handleKeyDown(event) {
      if (event.key === "Escape") {
        onClose();
      } else if (event.key === "Tab") {
        const focusable = dialogRef.current?.querySelectorAll('button, a[href]');
        if (!focusable?.length) return;
        const first = focusable[0];
        const last = focusable[focusable.length - 1];
        if (event.shiftKey && document.activeElement === first) {
          event.preventDefault();
          last.focus();
        } else if (!event.shiftKey && document.activeElement === last) {
          event.preventDefault();
          first.focus();
        }
      }
    }

    document.addEventListener("keydown", handleKeyDown);
    return () => {
      document.body.style.overflow = previousOverflow;
      document.removeEventListener("keydown", handleKeyDown);
      returnFocusTo?.focus();
    };
  }, [onClose, returnFocusRef]);

  return createPortal(
    <div className="fixed inset-0 z-[100] flex items-center justify-center bg-black/70 p-3 sm:p-6" onMouseDown={(event) => { if (event.target === event.currentTarget) onClose(); }}>
      <div ref={dialogRef} role="dialog" aria-modal="true" aria-labelledby="timeline-dialog-title" className={`flex max-h-[90dvh] w-full max-w-2xl flex-col overflow-hidden rounded-2xl border shadow-2xl ${isDark ? "border-white/10 bg-zinc-900 text-white" : "border-slate-200 bg-white text-slate-900"}`}>
        <div className={`flex shrink-0 items-start justify-between gap-4 border-b p-5 sm:p-6 ${isDark ? "border-white/10" : "border-slate-200"}`}>
          <div className="min-w-0">
            <span className="text-xs font-bold uppercase tracking-[0.18em] text-purple-500">Project timeline</span>
            <h3 id="timeline-dialog-title" className="mt-1 break-words text-xl font-bold sm:text-2xl">{repo.name}</h3>
            <a href={repo.html_url} target="_blank" rel="noopener noreferrer" className="mt-2 inline-block text-sm font-semibold text-purple-500 hover:underline focus-visible:outline-2 focus-visible:outline-purple-500">View repository ↗</a>
          </div>
          <button ref={closeRef} type="button" onClick={onClose} aria-label="Close project timeline" className={`flex h-9 w-9 shrink-0 items-center justify-center rounded-full text-xl focus-visible:outline-2 focus-visible:outline-purple-500 ${isDark ? "bg-white/10 hover:bg-white/20" : "bg-slate-100 hover:bg-slate-200"}`}>×</button>
        </div>

        <div className="min-h-0 overflow-y-auto p-5 sm:p-6">
          {repo.description && <p className={`mb-5 break-words text-sm leading-relaxed ${isDark ? "text-slate-300" : "text-slate-600"}`}>{repo.description}</p>}
          <div className={`mb-7 rounded-xl p-4 ${isDark ? "bg-purple-500/10" : "bg-purple-50"}`}>
            <div className="flex items-baseline justify-between gap-4">
              <span className="text-sm font-semibold">Overall progress</span>
              <span className="text-2xl font-bold text-purple-500">{progress.percent}%</span>
            </div>
            <p className={`mt-1 text-xs ${isDark ? "text-slate-400" : "text-slate-600"}`}>{progress.total ? `${progress.completed} of ${progress.total} issues closed` : "No issues yet"}</p>
          </div>
          <h4 className="mb-4 text-sm font-bold uppercase tracking-wider text-purple-500">Milestones</h4>
          <ol className={`space-y-5 border-l-2 pl-5 ${isDark ? "border-purple-500/40" : "border-purple-200"}`}>
          {milestones.map((milestone) => {
            const phase = getProgress([milestone]);
            return (
              <li key={milestone.id} className="relative min-w-0">
                <span className={`absolute -left-[27px] top-1 h-3 w-3 rounded-full border-2 border-purple-500 ${isDark ? "bg-zinc-900" : "bg-white"}`} aria-hidden="true" />
                <div className="flex flex-wrap items-baseline justify-between gap-x-3 gap-y-1">
                  <a
                    href={milestone.html_url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="min-w-0 break-words font-semibold leading-snug hover:text-purple-500 hover:underline"
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
      </div>
    </div>,
    document.body,
  );
}

export default function ProjectTimeline() {
  const { isDark } = useTheme();
  const [projects, setProjects] = useState([]);
  const [status, setStatus] = useState("loading");
  const [refreshKey, setRefreshKey] = useState(0);
  const [selectedProject, setSelectedProject] = useState(null);
  const returnFocusRef = useRef(null);
  const closeDialog = useCallback(() => setSelectedProject(null), []);

  function selectProject(project, trigger) {
    returnFocusRef.current = trigger;
    setSelectedProject(project);
  }

  useEffect(() => {
    const controller = new AbortController();

    async function loadTimeline() {
      let cached;
      try {
        cached = JSON.parse(localStorage.getItem(CACHE_KEY));
      } catch {
        cached = null;
      }

      if (refreshKey === 0 && Array.isArray(cached?.projects) && Date.now() - cached.savedAt < CACHE_AGE_MS) {
        setProjects(cached.projects);
        setStatus("ready");
        return;
      }

      try {
        const timelineProjects = await getTimelineProjects({ signal: controller.signal });

        if (!controller.signal.aborted) {
          setProjects(timelineProjects);
          setStatus("ready");
          try {
            localStorage.setItem(CACHE_KEY, JSON.stringify({ savedAt: Date.now(), projects: timelineProjects }));
          } catch {
            // The timeline still works when browser storage is unavailable.
          }
        }
      } catch (error) {
        if (!controller.signal.aborted) {
          console.error("Could not load GitHub milestones", error);
          if (Array.isArray(cached?.projects)) {
            setProjects(cached.projects);
            setStatus("stale");
          } else {
            setStatus("error");
          }
        }
      }
    }

    loadTimeline();
    return () => controller.abort();
  }, [refreshKey]);

  return (
    <section id="timeline" className="mt-16 w-[90%] scroll-mt-24 lg:w-[80%]" aria-labelledby="timeline-heading">
      <div className="mx-auto max-w-2xl text-center">
        <span className="text-xs font-bold uppercase tracking-[0.3em] text-purple-500">In progress</span>
        <h2 id="timeline-heading" className={`mt-2 text-3xl font-bold sm:text-4xl ${isDark ? "text-white" : "text-slate-900"}`}>
          WHAT I&apos;M BUILDING
        </h2>
        <div className="mx-auto mt-1 h-1 w-38 rounded-full bg-purple-500" />
        <p className={`mt-4 text-base lg:text-xl ${isDark ? "text-slate-300" : "text-slate-600"}`}>
          Follow the progress of my current projects, updated from GitHub. Select a project to see its milestones.
        </p>
      </div>

      <div className="mt-4 text-center">
        <button type="button" onClick={() => { setStatus("loading"); setRefreshKey((key) => key + 1); }} className="text-sm font-semibold text-purple-500 hover:underline">
          Refresh progress
        </button>
      </div>

      {status === "loading" && <p className="mt-8 text-center text-slate-500" role="status">Loading project progress…</p>}
      {status === "error" && <p className="mt-8 text-center text-slate-500" role="status">GitHub progress is temporarily unavailable. Please try Refresh progress.</p>}
      {status === "stale" && <p className="mt-4 text-center text-sm text-amber-600" role="status">Showing saved progress. GitHub could not be reached.</p>}
      {status === "ready" && projects.length === 0 && <p className="mt-8 text-center text-slate-500">No active project milestones right now.</p>}

      {(status === "ready" || status === "stale") && projects.length > 0 && (
        <div className="mx-auto mt-8 flex max-w-6xl flex-wrap items-start justify-center gap-4">
            {projects.map((project) => (
              <TimelineProject key={project.repo.full_name} project={project} isDark={isDark} onSelect={selectProject} />
            ))}
        </div>
      )}
      {selectedProject && <TimelineDialog project={selectedProject} isDark={isDark} onClose={closeDialog} returnFocusRef={returnFocusRef} />}
    </section>
  );
}
