"use client";

import { useState } from "react";
import emailjs from "@emailjs/browser";
import { personalInfo } from "@/data/portfolio";

const EMAILJS_SERVICE_ID = "service_5bequ3z";
const EMAILJS_TEMPLATE_ID = "template_268uu9k";
const EMAILJS_PUBLIC_KEY = "9Bi166b0R6FtldL80";

const socialLinks = [
  {
    label: "GitHub",
    href: personalInfo.github,
    icon: (
      <svg viewBox="0 0 24 24" fill="currentColor" className="w-5 h-5">
        <path d="M12 2C6.477 2 2 6.484 2 12.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.531 1.032 1.531 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0112 6.844c.85.004 1.705.115 2.504.337 1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.202 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.943.359.309.678.92.678 1.855 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.019 10.019 0 0022 12.017C22 6.484 17.522 2 12 2z" />
      </svg>
    ),
  },
  {
    label: "LinkedIn",
    href: "https://linkedin.com",
    icon: (
      <svg viewBox="0 0 24 24" fill="currentColor" className="w-5 h-5">
        <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433a2.062 2.062 0 01-2.063-2.065 2.064 2.064 0 112.063 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z" />
      </svg>
    ),
  },
  {
    label: "Telegram",
    href: "https://t.me",
    icon: (
      <svg viewBox="0 0 24 24" fill="currentColor" className="w-5 h-5">
        <path d="M11.944 0A12 12 0 0 0 0 12a12 12 0 0 0 12 12 12 12 0 0 0 12-12A12 12 0 0 0 12 0a12 12 0 0 0-.056 0zm4.962 7.224c.1-.002.321.023.465.14a.506.506 0 0 1 .171.325c.016.093.036.306.02.472-.18 1.898-.962 6.502-1.36 8.627-.168.9-.499 1.201-.82 1.23-.696.065-1.225-.46-1.9-.902-1.056-.693-1.653-1.124-2.678-1.8-1.185-.78-.417-1.21.258-1.91.177-.184 3.247-2.977 3.307-3.23.007-.032.014-.15-.056-.212s-.174-.041-.249-.024c-.106.024-1.793 1.14-5.061 3.345-.48.33-.913.49-1.302.48-.428-.008-1.252-.241-1.865-.44-.752-.245-1.349-.374-1.297-.789.027-.216.325-.437.893-.663 3.498-1.524 5.83-2.529 6.998-3.014 3.332-1.386 4.025-1.627 4.476-1.635z" />
      </svg>
    ),
  },
  {
    label: "Email",
    href: `mailto:${personalInfo.email}`,
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={1.8} className="w-5 h-5">
        <rect x="2" y="4" width="20" height="16" rx="2" />
        <path d="M2 7l10 7 10-7" />
      </svg>
    ),
  },
];

export default function Contact() {
  const [form, setForm] = useState({ name: "", email: "", message: "" });
  const [status, setStatus] = useState<"idle" | "sending" | "sent">("idle");

  function handleChange(e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) {
    setForm((prev) => ({ ...prev, [e.target.name]: e.target.value }));
  }

  async function handleSubmit(e: React.FormEvent) {
    e.preventDefault();
    setStatus("sending");
    try {
      await emailjs.send(
        EMAILJS_SERVICE_ID,
        EMAILJS_TEMPLATE_ID,
        { from_name: form.name, reply_to: form.email, message: form.message },
        EMAILJS_PUBLIC_KEY
      );
      setStatus("sent");
      setForm({ name: "", email: "", message: "" });
      setTimeout(() => setStatus("idle"), 3000);
    } catch {
      setStatus("idle");
      alert("Failed to send message. Please try again.");
    }
  }

  return (
    <section id="contact" className="py-24 relative">
      <div className="absolute inset-0 bg-linear-to-b from-transparent via-blue-950/10 to-transparent pointer-events-none" />
      <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-96 h-96 rounded-full bg-blue-600/5 blur-3xl pointer-events-none" />

      <div className="max-w-3xl mx-auto px-5 sm:px-10">
        {/* Header */}
        <div className="text-center mb-12">
          <h2 className="text-4xl sm:text-5xl font-bold text-blue-600 dark:text-blue-400 mb-4">Get in Touch</h2>
          <p className="text-slate-500 dark:text-slate-400 text-sm sm:text-base max-w-md mx-auto">
            I&apos;m always open to new opportunities and collaborations. Feel free to reach out!
          </p>
        </div>

        {/* Social icons */}
        <div className="flex justify-center gap-5 mb-12">
          {socialLinks.map((s) => (
            <a
              key={s.label}
              href={s.href}
              target={s.href.startsWith("mailto") ? undefined : "_blank"}
              rel="noopener noreferrer"
              aria-label={s.label}
              className="w-11 h-11 rounded-full border border-slate-300 dark:border-white/15 flex items-center justify-center text-slate-500 dark:text-zinc-400 hover:text-white hover:border-blue-500 hover:bg-blue-500 dark:hover:bg-white/10 dark:hover:border-white/40 dark:hover:text-white transition-all duration-200"
            >
              {s.icon}
            </a>
          ))}
        </div>

        {/* Contact form */}
        <form onSubmit={handleSubmit} className="space-y-5">
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
            <div className="flex flex-col gap-2">
              <label htmlFor="name" className="text-slate-800 dark:text-white text-sm font-medium">
                Name
              </label>
              <input
                id="name"
                name="name"
                type="text"
                value={form.name}
                onChange={handleChange}
                required
                placeholder=""
                className="w-full px-4 py-3 rounded-lg bg-slate-100 dark:bg-[#111111] border border-slate-300 dark:border-white/10 text-slate-900 dark:text-white placeholder-slate-400 dark:placeholder-zinc-600 focus:outline-none focus:border-blue-500 dark:focus:border-white/40 transition-colors text-sm"
              />
            </div>
            <div className="flex flex-col gap-2">
              <label htmlFor="email" className="text-slate-800 dark:text-white text-sm font-medium">
                Email
              </label>
              <input
                id="email"
                name="email"
                type="email"
                value={form.email}
                onChange={handleChange}
                required
                placeholder=""
                className="w-full px-4 py-3 rounded-lg bg-slate-100 dark:bg-[#111111] border border-slate-300 dark:border-white/10 text-slate-900 dark:text-white placeholder-slate-400 dark:placeholder-zinc-600 focus:outline-none focus:border-blue-500 dark:focus:border-white/40 transition-colors text-sm"
              />
            </div>
          </div>

          <div className="flex flex-col gap-2">
            <label htmlFor="message" className="text-slate-800 dark:text-white text-sm font-medium">
              Message
            </label>
            <textarea
              id="message"
              name="message"
              value={form.message}
              onChange={handleChange}
              required
              rows={7}
              className="w-full px-4 py-3 rounded-lg bg-slate-100 dark:bg-[#111111] border border-slate-300 dark:border-white/10 text-slate-900 dark:text-white placeholder-slate-400 dark:placeholder-zinc-600 focus:outline-none focus:border-blue-500 dark:focus:border-white/40 transition-colors text-sm resize-none"
            />
          </div>

          <div className="flex justify-center pt-2">
            <button
              type="submit"
              disabled={status === "sending"}
              className="px-10 py-3 rounded-xl bg-blue-600 dark:bg-blue-600 hover:bg-blue-500 dark:hover:bg-blue-500 text-white dark:text-white font-semibold text-sm transition-colors disabled:opacity-60 shadow-lg shadow-blue-500/30 dark:shadow-blue-500/30"
            >
              {status === "sent" ? "Message Sent!" : status === "sending" ? "Sending..." : "Send Message"}
            </button>
          </div>
        </form>
      </div>
    </section>
  );
}
