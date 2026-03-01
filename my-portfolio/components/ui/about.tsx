"use client";

import { Cpu, Globe, BarChart2, BookOpen, Users, Lightbulb } from "lucide-react";

export default function AboutFeatures() {
  return (
    <>
      <div className="relative max-w-5xl mx-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-20 px-8 md:px-0 pt-10">
        <div className="size-[520px] -top-80 left-1/2 -translate-x-1/2 rounded-full absolute blur-[300px] -z-10 bg-blue-500/10 dark:bg-blue-500/5"></div>
        <div>
          <div className="size-10 p-2 bg-blue-50 dark:bg-blue-950/40 border border-blue-200 dark:border-blue-800 rounded">
            <Cpu className="w-full h-full text-blue-500" />
          </div>
          <div className="mt-5 space-y-2">
            <h3 className="text-base font-medium text-slate-700 dark:text-slate-300">AI-First Engineering</h3>
            <p className="text-sm text-slate-500">Specializing in LLMs, RAG, Computer Vision and deep learning systems built for production.</p>
          </div>
        </div>
        <div>
          <div className="size-10 p-2 bg-blue-50 dark:bg-blue-950/40 border border-blue-200 dark:border-blue-800 rounded">
            <Globe className="w-full h-full text-blue-500" />
          </div>
          <div className="mt-5 space-y-2">
            <h3 className="text-base font-medium text-slate-700 dark:text-slate-300">Full-Stack Web Development</h3>
            <p className="text-sm text-slate-500">Building modern, responsive web apps with Next.js, React, FastAPI and Django.</p>
          </div>
        </div>
        <div>
          <div className="size-10 p-2 bg-blue-50 dark:bg-blue-950/40 border border-blue-200 dark:border-blue-800 rounded">
            <BarChart2 className="w-full h-full text-blue-500" />
          </div>
          <div className="mt-5 space-y-2">
            <h3 className="text-base font-medium text-slate-700 dark:text-slate-300">Data Science & Analytics</h3>
            <p className="text-sm text-slate-500">Turning raw data into insights with EDA, ML pipelines, Power BI and visualization tools.</p>
          </div>
        </div>
        <div>
          <div className="size-10 p-2 bg-blue-50 dark:bg-blue-950/40 border border-blue-200 dark:border-blue-800 rounded">
            <BookOpen className="w-full h-full text-blue-500" />
          </div>
          <div className="mt-5 space-y-2">
            <h3 className="text-base font-medium text-slate-700 dark:text-slate-300">Continuous Learning</h3>
            <p className="text-sm text-slate-500">Always exploring new research, tools and frameworks in the fast-moving AI landscape.</p>
          </div>
        </div>
        <div>
          <div className="size-10 p-2 bg-blue-50 dark:bg-blue-950/40 border border-blue-200 dark:border-blue-800 rounded">
            <Users className="w-full h-full text-blue-500" />
          </div>
          <div className="mt-5 space-y-2">
            <h3 className="text-base font-medium text-slate-700 dark:text-slate-300">Open to Collaboration</h3>
            <p className="text-sm text-slate-500">Eager to contribute to impactful projects and grow alongside talented teams.</p>
          </div>
        </div>
        <div>
          <div className="size-10 p-2 bg-blue-50 dark:bg-blue-950/40 border border-blue-200 dark:border-blue-800 rounded">
            <Lightbulb className="w-full h-full text-blue-500" />
          </div>
          <div className="mt-5 space-y-2">
            <h3 className="text-base font-medium text-slate-700 dark:text-slate-300">Problem-Solving Mindset</h3>
            <p className="text-sm text-slate-500">Tackling real-world challenges with clean, scalable and maintainable code solutions.</p>
          </div>
        </div>
      </div>
    </>
  );
}
