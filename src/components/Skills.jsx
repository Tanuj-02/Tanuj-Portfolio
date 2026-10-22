import { SkillsInfo } from "../assests/data";
import { useTheme } from "../ThemeContext";

const categoryDescriptions = {
  Frontend: "Interfaces that feel fast and intuitive",
  Backend: "Reliable services and secure APIs",
  Languages: "The foundations behind my work",
  Tools: "How I build, test, and ship",
};

export default function Skills() {
  const { isDark } = useTheme();

  return (
    <section id="skills" className="mt-20 w-[90%] scroll-mt-24 lg:w-[80%]" aria-labelledby="skills-heading">
      <div className="mx-auto max-w-2xl text-center">
        <span className="text-xs font-bold uppercase tracking-[0.3em] text-purple-500">What I work with</span>
        <h2 id="skills-heading" className={`mt-2 text-4xl font-bold ${isDark ? "text-white" : "text-slate-900"}`}>
          SKILLS
        </h2>
        <div className="mx-auto mt-1 h-1 w-24 rounded-full bg-purple-500" />
        <p className={`mt-4 text-base lg:text-xl ${isDark ? "text-slate-300" : "text-slate-600"}`}>
          The technologies I use to take an idea from a sketch to a working product.
        </p>
      </div>

      <div className="mx-auto mt-10 grid max-w-6xl grid-cols-1 gap-5 md:grid-cols-2 lg:gap-7">
        {SkillsInfo.map((category, index) => (
          <article
            key={category.title}
            className={`relative min-w-0 overflow-hidden rounded-3xl border p-5 shadow-lg transition-transform duration-300 hover:-translate-y-1 sm:p-7 ${
              isDark
                ? "border-white/10 bg-zinc-900/85 shadow-black/20"
                : "border-slate-200 bg-white/90 shadow-slate-200/70"
            }`}
          >
            <div className="absolute inset-x-0 top-0 h-1 bg-gradient-to-r from-purple-600 via-fuchsia-500 to-cyan-400" aria-hidden="true" />
            <div className="mb-6 flex items-start gap-4">
              <span className={`flex h-11 w-11 shrink-0 items-center justify-center rounded-2xl text-sm font-bold ${
                isDark ? "bg-purple-500/15 text-purple-300" : "bg-purple-100 text-purple-700"
              }`} aria-hidden="true">
                {String(index + 1).padStart(2, "0")}
              </span>
              <div className="min-w-0">
                <h3 className={`text-xl font-bold sm:text-2xl ${isDark ? "text-white" : "text-slate-900"}`}>
                  {category.title}
                </h3>
                <p className={`mt-1 text-sm ${isDark ? "text-slate-400" : "text-slate-500"}`}>
                  {categoryDescriptions[category.title]}
                </p>
              </div>
            </div>

            <ul className="grid grid-cols-2 gap-2.5 sm:gap-3">
              {category.skills.map((skill) => (
                <li
                  key={skill.name}
                  className={`flex min-w-0 items-center gap-2.5 rounded-xl border px-3 py-2.5 transition-colors sm:gap-3 ${
                    isDark
                      ? "border-white/8 bg-white/5 hover:border-purple-400/40 hover:bg-purple-500/10"
                      : "border-slate-200 bg-slate-50 hover:border-purple-300 hover:bg-purple-50"
                  }`}
                >
                  <span className={`flex h-9 w-9 shrink-0 items-center justify-center rounded-lg ${isDark ? "bg-white" : "bg-white shadow-sm"}`}>
                    <img src={skill.logo} alt="" className="h-6 w-6 object-contain" loading="lazy" />
                  </span>
                  <span className={`min-w-0 text-xs font-semibold leading-tight sm:text-sm ${isDark ? "text-slate-200" : "text-slate-700"}`}>
                    {skill.name}
                  </span>
                </li>
              ))}
            </ul>
          </article>
        ))}
      </div>
    </section>
  );
}
