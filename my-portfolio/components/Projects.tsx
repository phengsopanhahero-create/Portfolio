"use client";

import { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { projects } from "@/data/portfolio";

const categories = ["All", "AI/ML", "Data Science", "Web Development"];

export default function Projects() {
  const [activeFilter, setActiveFilter] = useState("All");

  const filtered =
    activeFilter === "All"
      ? projects
      : projects.filter((p) =>
          Array.isArray(p.category)
            ? p.category.includes(activeFilter)
            : p.category === activeFilter
        );

  return (
    <section id="projects" className="py-24 relative">
      <div className="absolute inset-0 bg-linear-to-b from-transparent via-blue-950/5 to-transparent pointer-events-none" />

      <div className="max-w-6xl mx-auto px-5 sm:px-10">
        {/* Header */}
        <div className="text-center mb-16">
          <p className="text-blue-400 dark:text-zinc-400 text-sm font-mono uppercase tracking-widest mb-2">
            // what I&apos;ve built
          </p>
          <h2 className="text-3xl sm:text-4xl font-bold text-blue-600 dark:text-blue-400 section-line inline-block">
            Technical Projects
          </h2>
          <p className="text-slate-500 dark:text-slate-400 mt-4 max-w-lg mx-auto text-sm">
            A selection of projects ranging from AI/ML systems to full-stack web applications.
          </p>
        </div>

        {/* Filter tabs */}
        <div className="flex flex-wrap justify-center gap-2 mb-10">
          {categories.map((cat) => (
            <button
              key={cat}
              onClick={() => setActiveFilter(cat)}
              className={`px-4 py-2 rounded-full text-sm font-medium transition-all ${
                activeFilter === cat
                  ? "bg-blue-600 dark:bg-white text-white dark:text-black shadow-lg shadow-blue-500/30 dark:shadow-white/10"
                  : "bg-slate-100 dark:bg-[#111111] border border-slate-200 dark:border-white/10 text-slate-600 dark:text-zinc-400 hover:text-slate-900 dark:hover:text-white hover:border-blue-500/40 dark:hover:border-white/25"
              }`}
            >
              {cat}
            </button>
          ))}
        </div>

        {/* Projects grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-2 gap-6">
          {filtered.map((project) => (
            <div
              key={project.id}
              className="group relative rounded-2xl bg-slate-50 dark:bg-[#111111] border border-slate-200 dark:border-white/10 overflow-hidden card-transition glow-card"
            >
              {/* Project image */}
              <div className="relative w-full h-44 bg-slate-200 dark:bg-slate-800 overflow-hidden">
                <Image
                  src={project.image}
                  alt={project.title}
                  fill
                  className="object-cover transition-transform duration-500 group-hover:scale-105"
                  onError={(e) => { (e.currentTarget as HTMLImageElement).style.display = "none"; }}
                />
              </div>

              <div className="p-6">
                {/* Title */}
                <h3 className="text-slate-900 dark:text-white font-bold text-base mb-2 group-hover:text-blue-500 dark:group-hover:text-zinc-300 transition-colors">
                  {project.title}
                </h3>

                {/* Description */}
                <p className="text-slate-600 dark:text-slate-400 text-sm leading-relaxed mb-4">
                  {project.description}
                </p>

                {/* Tech tags */}
                <div className="flex flex-wrap gap-2 mb-5">
                  {project.techs.slice(0, 3).map((tech) => (
                    <span
                      key={tech}
                      className="px-3 py-1 rounded-full text-xs font-medium text-slate-600 dark:text-zinc-300 bg-slate-200 dark:bg-white/5 border border-slate-300 dark:border-white/10"
                    >
                      {tech}
                    </span>
                  ))}
                </div>

                {/* View Details link */}
                <Link
                  href={`/projects/${project.id}`}
                  className="inline-flex items-center gap-1 text-blue-500 hover:text-blue-600 text-sm font-medium transition-colors"
                >
                  <span className="text-blue-500">View Details →</span>
                </Link>
              </div>

            </div>
          ))}
        </div>

        {/* Count */}
        <p className="text-center text-slate-400 dark:text-slate-600 text-sm mt-8">
          Showing {filtered.length} of {projects.length} projects
        </p>
      </div>
    </section>
  );
}
