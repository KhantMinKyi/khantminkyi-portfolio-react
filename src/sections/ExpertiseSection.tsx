import { SectionHeading } from "../components/SectionHeading";
import { TechIcon } from "../components/TechIcon";
import { skillGroups } from "../data/portfolio";

export function ExpertiseSection() {
  return (
    <section id="expertise" className="reveal relative z-10 mx-auto max-w-7xl px-5 py-16 sm:px-8">
      <SectionHeading eyebrow="Expertise" title="Tech stack with the tools I actually ship." />
      <div className="mt-8 grid gap-4 md:grid-cols-2 xl:grid-cols-4">
        {skillGroups.map(({ title, icon: Icon, skills }, index) => (
          <article
            key={title}
            data-reveal={["left", "scale", "right", "tilt"][index % 4]}
            className="reveal group relative overflow-hidden rounded-3xl border border-purple-200/10 bg-white/[.045] p-6 transition hover:-translate-y-1 hover:border-fuchsia-300/35 hover:bg-fuchsia-300/[.07]"
          >
            <div className="absolute -right-10 -top-10 size-28 rounded-full bg-fuchsia-400/10 blur-2xl transition group-hover:bg-fuchsia-400/20" />
            <div className="mb-5 grid size-12 place-items-center rounded-2xl bg-fuchsia-300/10 text-fuchsia-100 transition group-hover:bg-fuchsia-300/15">
              <Icon size={24} />
            </div>
            <h3 className="text-xl font-bold">{title}</h3>
            <div className="mt-5 grid gap-2">
              {skills.map((skill) => (
                <span
                  key={skill}
                  className="group/chip flex items-center gap-3 rounded-2xl border border-white/10 bg-black/25 px-3 py-2 text-sm text-purple-100/78 transition hover:border-fuchsia-300/25 hover:bg-fuchsia-300/10"
                >
                  <TechIcon name={skill} />
                  {skill}
                </span>
              ))}
            </div>
          </article>
        ))}
      </div>
    </section>
  );
}
