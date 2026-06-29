import { SectionHeading } from "../components/SectionHeading";
import { experiences } from "../data/portfolio";

export function ExperienceSection() {
  return (
    <section id="experience" className="reveal relative z-10 mx-auto max-w-7xl px-5 py-16 sm:px-8">
      <SectionHeading
        eyebrow="Experience"
        title="Five years shaping internal systems that teams depend on every day."
      />
      <div className="mt-10 grid gap-5">
        {experiences.map((item, index) => (
          <article
            key={item.company}
            data-reveal={index % 2 === 0 ? "left" : "right"}
            className="reveal group relative overflow-hidden rounded-3xl border border-white/10 bg-white/[.04] p-6 transition hover:-translate-y-1 hover:border-fuchsia-300/30 hover:bg-white/[.06] md:p-8"
          >
            <div className="absolute inset-y-0 left-0 w-1 bg-gradient-to-b from-fuchsia-300 via-violet-400 to-transparent opacity-70" />
            <div className="absolute -right-20 bottom-0 size-40 rounded-full bg-violet-500/10 blur-3xl transition group-hover:bg-fuchsia-400/15" />
            <div className="absolute right-6 top-6 hidden text-8xl font-black text-white/[.03] md:block">
              0{index + 1}
            </div>
            <div className="relative grid gap-5 lg:grid-cols-[.35fr_1fr]">
              <div>
                <p className="text-sm font-semibold uppercase tracking-[.2em] text-fuchsia-200">
                  {item.period}
                </p>
                <h3 className="mt-3 text-2xl font-black">{item.role}</h3>
                <p className="mt-2 text-purple-100/55">{item.company}</p>
              </div>
              <ul className="grid gap-3 text-purple-100/72">
                {item.points.map((point) => (
                  <li key={point} className="flex gap-3 leading-7">
                    <span className="mt-2 size-2 shrink-0 rounded-full bg-fuchsia-300" />
                    <span>{point}</span>
                  </li>
                ))}
              </ul>
            </div>
          </article>
        ))}
      </div>
    </section>
  );
}
