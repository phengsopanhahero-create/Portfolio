import Image from "next/image";
import Link from "next/link";
import { notFound } from "next/navigation";
import { projects } from "@/data/portfolio";

interface Props {
  params: Promise<{ id: string }>;
}

export async function generateStaticParams() {
  return projects.map((p) => ({ id: String(p.id) }));
}

export default async function ProjectDetailPage({ params }: Props) {
  const { id } = await params;
  const project = projects.find((p) => p.id === Number(id));

  if (!project) notFound();

  return (
    <main className="min-h-screen bg-white dark:bg-[#0a0a0f] text-gray-900 dark:text-white">
      {/* Back button */}
      <div className="max-w-4xl mx-auto px-5 sm:px-10 pt-10">
        <Link
          href="/#projects"
          className="inline-flex items-center gap-2 text-slate-500 dark:text-slate-400 hover:text-gray-900 dark:hover:text-white text-sm transition-colors mb-10"
        >
          <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
          </svg>
          Back to Projects
        </Link>

        {/* Hero image */}
        <div className="w-full rounded-2xl overflow-hidden mb-8 bg-slate-200 dark:bg-slate-800">
          <Image
            src={project.image}
            alt={project.title}
            width={1200}
            height={900}
            className="w-full h-auto object-contain"
            priority
          />
        </div>

        {/* Project info card */}
        <div
          className="rounded-2xl bg-gray-100 dark:bg-[#0d0d1a] overflow-hidden mb-8"
          style={{ border: `1px solid ${project.color}40` }}
        >

          <div className="p-8">
            {/* Category + period */}
            <div className="flex flex-wrap items-center gap-3 mb-4">
              <span
                className="text-xs px-3 py-1 rounded-full font-medium"
                style={{ background: `${project.color}20`, color: project.color }}
              >
                {project.category}
              </span>
              <span className="text-slate-400 dark:text-slate-500 text-xs">{project.period}</span>
            </div>

            {/* Title */}
            <h1 className="text-2xl sm:text-3xl font-bold text-gray-900 dark:text-white mb-4">
              {project.title}
            </h1>

            {/* Description */}
            <p className="text-slate-600 dark:text-slate-300 text-base leading-relaxed mb-8">
              {project.description}
            </p>

            {/* Highlights */}
            <div className="mb-8">
              <h2 className="text-slate-500 dark:text-slate-400 font-semibold text-sm uppercase tracking-widest mb-4">
                Highlights
              </h2>
              <ul className="space-y-3">
                {project.highlights.map((h, i) => (
                  <li key={i} className="flex items-start gap-3">
                    <span
                      className="w-2 h-2 rounded-full mt-2 flex-shrink-0 bg-blue-500"
                    />
                    <span className="text-blue-600 dark:text-blue-300 text-sm">{h}</span>
                  </li>
                ))}
              </ul>
            </div>

            {/* Tech stack */}
            <div>
              <h2 className="text-slate-500 dark:text-slate-400 font-semibold text-sm uppercase tracking-widest mb-4">
                Tech Stack
              </h2>
              <div className="flex flex-wrap gap-2">
                {project.techs.map((tech) => (
                  <span
                    key={tech}
                    className="px-3 py-1.5 rounded-full text-sm font-mono text-slate-600 dark:text-slate-300 bg-slate-200/80 dark:bg-slate-800/60 border border-slate-300/50 dark:border-slate-700/50"
                  >
                    {tech}
                  </span>
                ))}
              </div>
            </div>
          </div>
        </div>

        {/* Navigation between projects */}
        <div className="flex justify-between pb-16">
          {projects.find((p) => p.id === project.id - 1) ? (
            <Link
              href={`/projects/${project.id - 1}`}
              className="flex items-center gap-2 text-slate-500 dark:text-slate-400 hover:text-gray-900 dark:hover:text-white text-sm transition-colors"
            >
              <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
              </svg>
              Previous Project
            </Link>
          ) : (
            <div />
          )}
          {projects.find((p) => p.id === project.id + 1) ? (
            <Link
              href={`/projects/${project.id + 1}`}
              className="flex items-center gap-2 text-slate-500 dark:text-slate-400 hover:text-gray-900 dark:hover:text-white text-sm transition-colors"
            >
              Next Project
              <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
              </svg>
            </Link>
          ) : (
            <div />
          )}
        </div>
      </div>
    </main>
  );
}
