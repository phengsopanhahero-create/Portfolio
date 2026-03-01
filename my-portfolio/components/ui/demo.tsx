"use client";

import Image from "next/image";
import { personalInfo } from "@/data/portfolio";

export default function AboutDemo() {
  return (
    <section className="flex flex-col md:flex-row items-center gap-14 max-md:px-4">
      {/* Photo */}
      <div className="shrink-0">
        <div className="relative w-72 h-72 md:w-96 md:h-96 rounded-2xl overflow-hidden shadow-2xl shadow-blue-600/30 border border-blue-500/20 dark:border-white/10">
          <Image
            src="/certs/panha.png"
            alt="Pheng Sopanha"
            fill
            className="object-cover"
          />
        </div>
      </div>

      {/* Text bio */}
      <div className="text-base text-slate-500 max-w-2xl">
        <h2 className="text-2xl uppercase font-semibold text-slate-700 dark:text-slate-300">
          Who I am?
        </h2>
        <div className="w-28 h-[3px] rounded-full bg-gradient-to-r from-blue-600 to-blue-300 dark:from-blue-500 dark:to-blue-300 mt-1"></div>
        <p className="mt-6 leading-relaxed text-base">{personalInfo.bio}</p>
        <p className="mt-4 leading-relaxed text-base">
          Based in <span className="text-blue-500 dark:text-blue-400 font-medium">{personalInfo.location}</span>,
          I am currently pursuing a Bachelor of Data Science and Engineering at RUPP while actively contributing
          to real-world AI and software projects.
        </p>
        <p className="mt-4 leading-relaxed text-base">
          My work spans across LLM fine-tuning, computer vision, data analytics, and full-stack web development —
          always focused on delivering practical, impactful solutions.
        </p>
      </div>
    </section>
  );
}
