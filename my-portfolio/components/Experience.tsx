import { experience, education } from "@/data/portfolio";

function BriefcaseIcon() {
  return (
    <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.8} d="M21 13.255A23.931 23.931 0 0112 15c-3.183 0-6.22-.62-9-1.745M16 6V4a2 2 0 00-2-2h-4a2 2 0 00-2 2v2m4 6h.01M5 20h14a2 2 0 002-2V8a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
    </svg>
  );
}

function GraduationIcon() {
  return (
    <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.8} d="M12 14l9-5-9-5-9 5 9 5zm0 0l6.16-3.422a12.083 12.083 0 01.665 6.479A11.952 11.952 0 0012 20.055a11.952 11.952 0 00-6.824-2.998 12.078 12.078 0 01.665-6.479L12 14z" />
    </svg>
  );
}

const expDotIcons: Record<number, React.ReactNode> = {
  0: (
    <svg className="w-2.5 h-2.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9.75 17L9 20l-1 1h8l-1-1-.75-3M3 13h18M5 17H3a2 2 0 01-2-2V5a2 2 0 012-2h14a2 2 0 012 2v10a2 2 0 01-2 2h-2" />
    </svg>
  ),
  1: (
    <svg className="w-2.5 h-2.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 10l4.553-2.069A1 1 0 0121 8.87v6.26a1 1 0 01-1.447.894L15 14M3 8h12a2 2 0 012 2v4a2 2 0 01-2 2H3a2 2 0 01-2-2v-4a2 2 0 012-2z" />
    </svg>
  ),
  2: (
    <svg className="w-2.5 h-2.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
    </svg>
  ),
};

export default function Experience() {
  return (
    <section id="experience" className="py-24 relative">
      <div className="absolute inset-0 bg-linear-to-b from-transparent via-blue-950/5 to-transparent pointer-events-none" />

      <div className="max-w-6xl mx-auto px-5 sm:px-10">
        {/* Header */}
        <div className="text-center mb-16">
          <p className="text-blue-400 dark:text-zinc-400 text-sm font-mono uppercase tracking-widest mb-2">
            // my journey
          </p>
          <h2 className="text-3xl sm:text-4xl font-bold text-blue-600 dark:text-blue-400 section-line inline-block">
            Experience & Education
          </h2>
        </div>

        <div className="space-y-12">
          {/* Work Experience */}
          <div>
            <h3 className="text-slate-900 dark:text-white font-semibold text-lg mb-6 flex items-center gap-2">
              <span className="w-8 h-8 rounded-lg bg-blue-600/20 dark:bg-white/10 flex items-center justify-center text-blue-400 dark:text-zinc-300">
                <BriefcaseIcon />
              </span>
              Work Experience
            </h3>

            <div className="relative">
              {/* Timeline line */}
              <div className="absolute left-4 top-0 bottom-0 w-0.5 bg-linear-to-b from-blue-600 via-blue-600 to-transparent dark:from-white/40 dark:via-white/20 dark:to-transparent" />

              <div className="space-y-6">
                {experience.map((exp, i) => (
                  <div key={i} className="relative pl-12 group">
                    {/* Timeline dot */}
                    <div
                      className="absolute left-2 top-3 w-5 h-5 rounded-full border-2 border-white dark:border-[#0a0a0a] flex items-center justify-center text-white dark:text-black transition-transform group-hover:scale-110"
                      style={{ background: exp.color }}
                    >
                      {expDotIcons[i]}
                    </div>

                    <div className="p-5 rounded-xl bg-slate-50 dark:bg-[#111111] border border-slate-200 dark:border-white/10 hover:border-blue-500/30 dark:hover:border-white/25 transition-all card-transition group-hover:-translate-y-0.5">
                      <div className="flex flex-wrap items-start justify-between gap-2 mb-2">
                        <div>
                          <h4 className="text-slate-900 dark:text-white font-semibold text-sm">{exp.role}</h4>
                          <div
                            className="text-sm font-medium mt-0.5"
                            style={{ color: exp.color }}
                          >
                            {exp.company}
                          </div>
                        </div>
                        <span className="text-xs text-slate-500 bg-slate-200 dark:bg-slate-800/60 px-2.5 py-1 rounded-full whitespace-nowrap">
                          {exp.period}
                        </span>
                      </div>
                      <p className="text-slate-600 dark:text-slate-400 text-xs leading-relaxed">
                        {exp.description}
                      </p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* Education */}
          <div>
            <h3 className="text-slate-900 dark:text-white font-semibold text-lg mb-6 flex items-center gap-2">
              <span className="w-8 h-8 rounded-lg bg-blue-600/20 dark:bg-white/10 flex items-center justify-center text-blue-400 dark:text-zinc-300">
                <GraduationIcon />
              </span>
              Education
            </h3>

            <div className="relative">
              <div className="absolute left-4 top-0 bottom-0 w-0.5 bg-linear-to-b from-blue-600 to-transparent dark:from-white/40 dark:to-transparent" />
              {education.map((edu, i) => (
                <div key={i} className="relative pl-12 group">
                  <div
                    className="absolute left-2 top-3 w-5 h-5 rounded-full border-2 border-white dark:border-[#0a0a0a] flex items-center justify-center text-white dark:text-black"
                    style={{ background: edu.color }}
                  >
                    <svg className="w-2.5 h-2.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 14l9-5-9-5-9 5 9 5z" />
                    </svg>
                  </div>
                  <div className="p-5 rounded-xl bg-slate-50 dark:bg-[#111111] border border-slate-200 dark:border-white/10 hover:border-blue-500/30 dark:hover:border-white/25 transition-all">
                    <div className="flex flex-wrap items-start justify-between gap-2 mb-1">
                      <h4 className="text-slate-900 dark:text-white font-semibold text-sm">{edu.degree}</h4>
                      <span className="text-xs text-slate-500 bg-slate-200 dark:bg-slate-800/60 px-2.5 py-1 rounded-full">
                        {edu.period}
                      </span>
                    </div>
                    <div className="text-blue-400 dark:text-zinc-400 text-sm">{edu.school}</div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
