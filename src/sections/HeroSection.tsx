import { ArrowUpRight, Mail, Sparkles } from "lucide-react";
import { currentFocus, roleWords, stats } from "../data/portfolio";

export function HeroSection() {
  return (
    <section className="relative z-10 mx-auto grid min-h-svh max-w-7xl items-center gap-10 px-5 pb-12 pt-32 sm:px-8 lg:grid-cols-[.92fr_1.08fr] lg:pb-16 lg:pt-36">
      <aside className="relative order-2 animate-float lg:order-1">
        <div className="hero-showcase mx-auto max-w-[30rem]">
          <div className="absolute inset-4 rounded-[3rem] bg-gradient-to-tr from-fuchsia-500 via-violet-500 to-indigo-400 opacity-60 blur-3xl" />
          <div className="relative overflow-hidden rounded-[2.4rem] border border-white/10 bg-white/[.055] p-3 shadow-2xl shadow-fuchsia-950/40 backdrop-blur-2xl">
            <div className="relative min-h-[31rem] overflow-hidden rounded-[1.85rem] bg-[#12071e] md:min-h-[34rem]">
              <div className="absolute inset-0 bg-[radial-gradient(circle_at_30%_15%,rgba(217,70,239,.24),transparent_34%),radial-gradient(circle_at_80%_80%,rgba(139,92,246,.22),transparent_36%)]" />
              <img
                src="/images/khant-min-kyi.webp"
                alt="Khant Min Kyi"
                className="absolute inset-0 h-full w-full scale-125 object-cover object-[48%_4%] saturate-110"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-[#07020f]/86 via-[#07020f]/18 to-transparent" />
              <div className="absolute left-5 top-5 rounded-full border border-white/15 bg-black/30 px-4 py-2 text-sm font-bold text-white shadow-[0_0_24px_rgba(217,70,239,.2)] backdrop-blur-xl">
                Khant Min Kyi
              </div>
              <div className="absolute inset-0 bg-[linear-gradient(120deg,rgba(255,255,255,.12),transparent_28%,transparent_60%,rgba(255,255,255,.08))]" />
            </div>
          </div>
        </div>
      </aside>

      <div className="order-1 animate-rise lg:order-2">
        <div className="mb-6 inline-flex items-center gap-2 rounded-full border border-fuchsia-300/20 bg-fuchsia-300/10 px-4 py-2 text-sm text-fuchsia-100">
          <Sparkles size={16} />
          Portfolio / Software Developer
        </div>

        <div className="mb-5 flex items-center gap-4 md:hidden">
          <div className="relative size-24 overflow-hidden rounded-3xl border border-fuchsia-300/25 shadow-[0_0_34px_rgba(217,70,239,.28)]">
            <img
              src="/images/khant-min-kyi.webp"
              alt="Khant Min Kyi"
              className="h-full w-full scale-125 object-cover  object-[48%_4%] "
            />
            <div className="absolute inset-x-2 bottom-2 rounded-full bg-black/45 px-2 py-1 text-center text-[10px] font-bold text-white backdrop-blur-md">
              Khant Min Kyi
            </div>
          </div>
          <div>
            <p className="text-sm text-purple-100/60">Senior Software Developer</p>
            <p className="mt-1 text-lg font-black text-white">Laravel / React / API</p>
          </div>
        </div>

        <p className="text-lg font-semibold text-purple-100/75">Hi, I am</p>
        <h1 className="mt-2 text-balance text-5xl font-black leading-[.88] tracking-normal sm:text-7xl lg:text-7xl 2xl:text-8xl">
          <span className="block text-white">Khant Min</span>
          <span className="animated-gradient-text block">Kyi</span>
        </h1>

        <div className="mt-5 flex min-h-12 flex-wrap items-center overflow-hidden text-2xl font-black text-purple-100 sm:text-3xl">
          <span className="mr-3 text-purple-300">I build</span>
          <span className="role-rotator">
            <span className="role-track">
              {roleWords.map((word) => (
                <span key={word}>{word}</span>
              ))}
            </span>
          </span>
        </div>

        <p className="kinetic-copy mt-7 max-w-2xl text-lg leading-8 text-purple-100/72 sm:text-xl">
          Five years turning complex requirements into fast Laravel, Node.js, React,
          and MySQL products. I like clean APIs, beautiful dashboards, secure roles,
          and systems that feel simple even when the logic underneath is serious.
        </p>

        <div className="mt-8 flex flex-col gap-3 sm:flex-row">
          <a
            href="#projects"
            className="group inline-flex items-center justify-center gap-2 rounded-full bg-gradient-to-r from-fuchsia-300 to-violet-300 px-6 py-3 font-bold text-slate-950 shadow-[0_0_34px_rgba(217,70,239,.25)] transition hover:-translate-y-0.5"
          >
            Explore Work
            <ArrowUpRight className="transition group-hover:translate-x-0.5 group-hover:-translate-y-0.5" size={18} />
          </a>
          <a
            href="mailto:khantminkyi@gmail.com"
            className="inline-flex items-center justify-center gap-2 rounded-full border border-purple-200/15 bg-white/5 px-6 py-3 font-bold text-white transition hover:-translate-y-0.5 hover:bg-fuchsia-300/10"
          >
            <Mail size={18} />
            Start a Project
          </a>
        </div>

        <div className="mt-8 grid grid-cols-2 gap-3 sm:max-w-xl sm:grid-cols-4">
          {stats.map(([value, label]) => (
            <div key={label} className="rounded-3xl border border-white/10 bg-white/[.055] p-4 backdrop-blur-xl">
              <p className="text-2xl font-black text-white">{value}</p>
              <p className="mt-1 text-xs text-purple-100/55">{label}</p>
            </div>
          ))}
        </div>

        <div className="mt-8 flex flex-wrap gap-2">
          {currentFocus.map((item) => (
            <span
              key={item}
              className="rounded-full border border-purple-200/10 bg-purple-300/[.07] px-3 py-1 text-xs text-purple-100/75"
            >
              {item}
            </span>
          ))}
        </div>
      </div>
    </section>
  );
}
