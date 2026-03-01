"use client";

import { useState } from "react";
import Image from "next/image";
import { certificates } from "@/data/portfolio";
import AboutDemo from "@/components/ui/demo";
import AboutFeatures from "@/components/ui/about";

export default function About() {
  const [preview, setPreview] = useState<string | null>(null);

  return (
    <section id="about" className="py-24 relative">
      {/* Subtle background */}
      <div className="absolute inset-0 bg-linear-to-b from-transparent via-blue-950/5 to-transparent pointer-events-none" />

      <div className="max-w-6xl mx-auto px-5 sm:px-10">
        {/* Section Header */}
        <div className="text-center mb-16">
          <p className="text-blue-400 dark:text-zinc-400 text-sm font-mono uppercase tracking-widest mb-2">
            // who I am
          </p>
          <h2 className="text-3xl sm:text-4xl font-bold text-blue-600 dark:text-blue-400 section-line inline-block">
            About Me
          </h2>
        </div>

        {/* Who I am — text bio */}
        <div className="mb-16">
          <AboutDemo />
        </div>

        {/* Features grid */}
        <div className="mb-16">
          <AboutFeatures />
        </div>

        {/* Certificates */}
        <div className="mb-6">
          <h3 className="text-slate-900 dark:text-white font-semibold text-lg mb-6 flex items-center gap-2">
            <span className="w-8 h-8 rounded-lg bg-blue-600/20 dark:bg-white/10 flex items-center justify-center text-blue-400 dark:text-zinc-300">
              <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.8} d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
              </svg>
            </span>
            Certificates
          </h3>

          <div className="relative">
            {/* Timeline line */}
            <div className="absolute left-4 top-0 bottom-0 w-0.5 bg-linear-to-b from-blue-600 via-blue-400 to-transparent dark:from-white/40 dark:via-white/20 dark:to-transparent" />

            <div className="space-y-6">
              {certificates.map((cert, i) => (
                <div key={i} className="relative pl-12 group">
                  {/* Timeline dot */}
                  <div className="absolute left-2 top-3 w-5 h-5 rounded-full border-2 border-white dark:border-[#0a0a0a] bg-blue-600 dark:bg-white flex items-center justify-center transition-transform group-hover:scale-110" />

                  <div className="p-4 rounded-xl bg-slate-50 dark:bg-[#111111] border border-slate-200 dark:border-white/10 hover:border-blue-500/30 dark:hover:border-white/25 transition-all group-hover:-translate-y-0.5 flex items-center gap-4">
                    {/* Certificate thumbnail */}
                    <button
                      type="button"
                      onClick={() => setPreview(cert.image)}
                      className="shrink-0 w-28 h-18 rounded-lg overflow-hidden border border-blue-500/20 dark:border-white/15 hover:border-blue-400/60 dark:hover:border-white/40 transition-all hover:scale-105 focus:outline-none"
                      title="View certificate"
                    >
                      <Image
                        src={cert.image}
                        alt={cert.name}
                        width={112}
                        height={72}
                        className="w-full h-full object-cover"
                      />
                    </button>

                    {/* Info */}
                    <div className="flex-1 min-w-0">
                      <div className="text-slate-900 dark:text-white text-sm font-semibold leading-tight">{cert.name}</div>
                      <div className="text-blue-400 dark:text-zinc-400 text-xs mt-1">{cert.issuer}</div>
                      {cert.date && (
                        <div className="text-slate-500 text-xs mt-1">{cert.date}</div>
                      )}
                    </div>

                    {/* View button */}
                    <button
                      type="button"
                      onClick={() => setPreview(cert.image)}
                      className="shrink-0 px-3 py-1.5 rounded-lg bg-blue-600/20 dark:bg-white/10 text-blue-400 dark:text-zinc-300 text-xs font-medium hover:bg-blue-600/40 dark:hover:bg-white/20 transition-colors"
                    >
                      View
                    </button>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>

      {/* Lightbox modal */}
      {preview && (
        <div
          className="fixed inset-0 z-50 bg-black/80 flex items-center justify-center p-4"
          onClick={() => setPreview(null)}
        >
          <div
            className="relative max-w-4xl w-full rounded-2xl overflow-hidden shadow-2xl"
            onClick={(e) => e.stopPropagation()}
          >
            <Image
              src={preview}
              alt="Certificate"
              width={1280}
              height={900}
              className="w-full h-auto"
            />
            <button
              type="button"
              onClick={() => setPreview(null)}
              className="absolute top-3 right-3 w-9 h-9 rounded-full bg-black/60 text-white flex items-center justify-center hover:bg-black/90 transition-colors text-lg font-bold"
            >
              ×
            </button>
          </div>
        </div>
      )}
    </section>
  );
}
