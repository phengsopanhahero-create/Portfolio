"use client";

import React, { useEffect, useRef, useState } from "react";
import { skills } from "@/data/portfolio";
import {
  SiReact, SiNextdotjs, SiNodedotjs, SiPython,
  SiTensorflow, SiDjango, SiDocker, SiGithub,
  SiMysql, SiPostgresql,
} from "react-icons/si";
import { TbApi } from "react-icons/tb";
import { VscCode } from "react-icons/vsc";

const categoryIcons: Record<string, React.ReactNode> = {
  languages: (
    <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.8} d="M10 20l4-16m4 4l4 4-4 4M6 16l-4-4 4-4" />
    </svg>
  ),
  frameworks: (
    <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.8} d="M20 7l-8-4-8 4m16 0l-8 4m8-4v10l-8 4m0-10L4 7m8 4v10" />
    </svg>
  ),
  aiml: (
    <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.8} d="M9.75 17L9 20l-1 1h8l-1-1-.75-3M3 13h18M5 17H3a2 2 0 01-2-2V5a2 2 0 012-2h14a2 2 0 012 2v10a2 2 0 01-2 2h-2" />
    </svg>
  ),
  tools: (
    <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.8} d="M10.325 4.317c.426-1.756 2.924-1.756 3.35 0a1.724 1.724 0 002.573 1.066c1.543-.94 3.31.826 2.37 2.37a1.724 1.724 0 001.065 2.572c1.756.426 1.756 2.924 0 3.35a1.724 1.724 0 00-1.066 2.573c.94 1.543-.826 3.31-2.37 2.37a1.724 1.724 0 00-2.572 1.065c-.426 1.756-2.924 1.756-3.35 0a1.724 1.724 0 00-2.573-1.066c-1.543.94-3.31-.826-2.37-2.37a1.724 1.724 0 00-1.065-2.572c-1.756-.426-1.756-2.924 0-3.35a1.724 1.724 0 001.066-2.573c-.94-1.543.826-3.31 2.37-2.37.996.608 2.296.07 2.572-1.065z" /><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.8} d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
    </svg>
  ),
};

const categories = [
  { key: "languages", label: "Languages", color: "#3b82f6" },
  { key: "frameworks", label: "Frameworks & Libs", color: "#3b82f6" },
  { key: "aiml", label: "AI / ML", color: "#06b6d4" },
  { key: "tools", label: "Tools", color: "#10b981" },
] as const;

function SkillBar({ name, level, color }: { name: string; level: number; color: string }) {
  const [width, setWidth] = useState(0);
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setWidth(level);
          observer.disconnect();
        }
      },
      { threshold: 0.3 }
    );
    if (ref.current) observer.observe(ref.current);
    return () => observer.disconnect();
  }, [level]);

  return (
    <div ref={ref} className="group">
      <div className="flex justify-between items-center mb-1.5">
        <span className="text-slate-700 dark:text-slate-300 text-sm font-medium group-hover:text-slate-900 dark:group-hover:text-white transition-colors">
          {name}
        </span>
        <span className="text-blue-500 dark:text-zinc-400 text-xs font-mono">{level}%</span>
      </div>
      <div className="h-2 rounded-full bg-slate-200 dark:bg-slate-800/80 overflow-hidden">
        <div
          className="h-full rounded-full skill-bar-fill"
          style={{
            width: `${width}%`,
            background: `linear-gradient(90deg, ${color}, ${color}99)`,
            boxShadow: `0 0 8px ${color}40`,
          }}
        />
      </div>
    </div>
  );
}

export default function Skills() {
  const [active, setActive] = useState<(typeof categories)[number]["key"]>("languages");
  const activeCategory = categories.find((c) => c.key === active)!;
  const activeSkills = skills[active];

  return (
    <section id="skills" className="py-24 relative">
      <div className="absolute inset-0 bg-linear-to-b from-transparent via-blue-950/5 to-transparent pointer-events-none" />

      <div className="max-w-6xl mx-auto px-5 sm:px-10">
        {/* Header */}
        <div className="text-center mb-16">
          <p className="text-blue-400 dark:text-zinc-400 text-sm font-mono uppercase tracking-widest mb-2">
            // what I know
          </p>
          <h2 className="text-3xl sm:text-4xl font-bold text-blue-600 dark:text-blue-400 section-line inline-block">
            Skills & Expertise
          </h2>
        </div>

        <div className="grid lg:grid-cols-3 gap-8">
          {/* Category Tabs */}
          <div className="space-y-3">
            {categories.map((cat) => (
              <button
                key={cat.key}
                onClick={() => setActive(cat.key)}
                className={`w-full flex items-center gap-4 p-4 rounded-xl text-left transition-all card-transition ${
                  active === cat.key
                    ? "bg-blue-600/20 dark:bg-white/10 border border-blue-500/40 dark:border-white/25 shadow-lg shadow-blue-500/10 dark:shadow-white/5"
                    : "bg-slate-100 dark:bg-[#111111] border border-slate-200 dark:border-white/8 hover:border-blue-500/30 dark:hover:border-white/20 hover:bg-blue-50 dark:hover:bg-white/5"
                }`}
              >
                <div
                  className="w-10 h-10 rounded-lg flex items-center justify-center shrink-0 text-slate-700 dark:text-white"
                  style={{ background: `${cat.color}20` }}
                >
                  {categoryIcons[cat.key]}
                </div>
                <div>
                  <div className={`font-medium text-sm ${active === cat.key ? "text-slate-900 dark:text-white" : "text-slate-600 dark:text-slate-400"}`}>
                    {cat.label}
                  </div>
                  <div className="text-slate-400 dark:text-slate-600 text-xs mt-0.5">
                    {skills[cat.key].length} skills
                  </div>
                </div>
                {active === cat.key && (
                  <div className="ml-auto w-1.5 h-6 rounded-full bg-blue-500 dark:bg-white" />
                )}
              </button>
            ))}

            {/* Languages spoken */}
            <div className="mt-4 p-4 rounded-xl bg-slate-100 dark:bg-[#111111] border border-slate-200 dark:border-white/8">
              <div className="text-slate-500 dark:text-slate-400 text-xs uppercase tracking-wider mb-3">Languages Spoken</div>
              <div className="space-y-2">
                {[
                  { lang: "Khmer", level: "Native", pct: 100 },
                  { lang: "English", level: "Intermediate", pct: 60 },
                ].map((l) => (
                  <div key={l.lang}>
                    <div className="flex justify-between text-xs mb-1">
                      <span className="text-slate-700 dark:text-slate-300">{l.lang}</span>
                      <span className="text-slate-500">{l.level}</span>
                    </div>
                    <div className="h-1.5 rounded-full bg-slate-200 dark:bg-slate-800">
                      <div
                        className="h-full rounded-full bg-linear-to-r from-blue-500 to-blue-500 dark:from-white dark:to-zinc-400"
                        style={{ width: `${l.pct}%` }}
                      />
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* Skill Bars */}
          <div className="lg:col-span-2">
            <div className="gradient-border rounded-2xl p-6 bg-slate-50 dark:bg-[#111111] h-full">
              <div className="flex items-center gap-3 mb-6">
                <div
                  className="w-10 h-10 rounded-xl flex items-center justify-center text-slate-700 dark:text-white"
                  style={{ background: `${activeCategory.color}20` }}
                >
                  {categoryIcons[activeCategory.key]}
                </div>
                <div>
                  <h3 className="text-slate-900 dark:text-white font-semibold">{activeCategory.label}</h3>
                  <p className="text-slate-500 text-xs">{activeSkills.length} skills</p>
                </div>
              </div>

              <div className="space-y-4">
                {activeSkills.map((skill) => (
                  <SkillBar
                    key={skill.name}
                    name={skill.name}
                    level={skill.level}
                    color={activeCategory.color}
                  />
                ))}
              </div>
            </div>
          </div>
        </div>

        {/* Bottom: all tech cards */}
        <div className="mt-12">
          <p className="text-slate-500 text-xs uppercase tracking-widest mb-6 text-center">All Technologies</p>
          <p className="text-slate-400 text-sm text-center mb-8">My technical toolkit and expertise</p>
          <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-4">
            {[
              { name: "React",      category: "Frontend",              icon: <SiReact      className="w-10 h-10 text-blue-500" /> },
              { name: "Next.js",    category: "Frontend",              icon: <SiNextdotjs  className="w-10 h-10 text-blue-500" /> },
              { name: "REST API",   category: "Backend",               icon: <TbApi        className="w-10 h-10 text-blue-500" /> },
              { name: "Node.js",    category: "Backend",               icon: <SiNodedotjs  className="w-10 h-10 text-blue-500" /> },
              { name: "Python",     category: "Backend & Data Science", icon: <SiPython     className="w-10 h-10 text-blue-500" /> },
              { name: "TensorFlow", category: "AI/ML",                 icon: <SiTensorflow className="w-10 h-10 text-blue-500" /> },
              { name: "Django",     category: "Backend",               icon: <SiDjango     className="w-10 h-10 text-blue-500" /> },
              { name: "Windsurf",   category: "IDE",                   icon: <VscCode      className="w-10 h-10 text-blue-500" /> },
              { name: "Docker",     category: "DevOps",                icon: <SiDocker     className="w-10 h-10 text-blue-500" /> },
              { name: "GitHub",     category: "Version Control",       icon: <SiGithub     className="w-10 h-10 text-blue-500" /> },
              { name: "MySQL",      category: "Database",              icon: <SiMysql      className="w-10 h-10 text-blue-500" /> },
              { name: "PostgreSQL", category: "Database",              icon: <SiPostgresql className="w-10 h-10 text-blue-500" /> },
            ].map((tech) => (
              <div
                key={tech.name}
                className="flex flex-col items-center gap-3 p-5 rounded-xl bg-white dark:bg-[#0d0d0d] border border-slate-200 dark:border-white/8 hover:border-blue-400/40 dark:hover:border-blue-500/30 hover:shadow-md hover:shadow-blue-500/10 transition-all cursor-default"
              >
                {tech.icon}
                <div className="text-center">
                  <div className="text-sm font-semibold text-slate-800 dark:text-slate-200">{tech.name}</div>
                  <div className="text-xs text-slate-400 dark:text-slate-500 mt-0.5">{tech.category}</div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
