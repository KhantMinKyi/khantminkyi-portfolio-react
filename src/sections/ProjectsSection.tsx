import { Layers3 } from "lucide-react";
import { SectionHeading } from "../components/SectionHeading";
import { projects } from "../data/portfolio";

export function ProjectsSection() {
  return (
    <section id="projects" className="reveal relative z-10 mx-auto max-w-7xl px-5 py-16 sm:px-8">
      <SectionHeading
        eyebrow="Projects"
        title="A portfolio of real systems: secure, data-heavy, and built for daily use."
      />
      <div className="mt-10 grid gap-5 md:grid-cols-2">
        {projects.map((project, index) => (
          <article
            key={project.name}
            data-reveal={index % 2 === 0 ? "left" : "right"}
            className="reveal group relative overflow-hidden rounded-3xl border border-purple-200/10 bg-[#11071d] p-6 transition hover:-translate-y-1 hover:border-fuchsia-300/35 hover:shadow-2xl hover:shadow-fuchsia-950/25"
          >
            <div className="absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-fuchsia-300/70 to-transparent" />
            <div className="absolute -right-16 -top-16 size-36 rounded-full bg-fuchsia-400/10 blur-3xl transition group-hover:scale-125" />
            <div className="mb-6 flex items-start justify-between gap-4">
              <div>
                <p className="text-sm font-semibold uppercase tracking-[.18em] text-fuchsia-200">
                  {project.type}
                </p>
                <h3 className="mt-3 text-2xl font-black">{project.name}</h3>
              </div>
              <div className="grid size-12 shrink-0 place-items-center rounded-2xl bg-fuchsia-300/10 text-fuchsia-100">
                <Layers3 size={23} />
              </div>
            </div>
            <p className="leading-7 text-purple-100/72">{project.summary}</p>
            <p className="mt-5 text-sm text-purple-100/42">{project.stack}</p>
            <div className="mt-5 flex flex-wrap gap-2">
              {project.highlights.map((highlight) => (
                <span
                  key={highlight}
                  className="rounded-full border border-purple-200/10 bg-white/[.045] px-3 py-1 text-sm text-purple-100/75"
                >
                  {highlight}
                </span>
              ))}
            </div>
          </article>
        ))}
      </div>
    </section>
  );
}
