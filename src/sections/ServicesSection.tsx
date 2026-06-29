import { ArrowUpRight, CheckCircle2 } from "lucide-react";
import { SectionHeading } from "../components/SectionHeading";
import { services } from "../data/portfolio";

export function ServicesSection() {
  const featuredService = services[0];
  const supportingServices = services.slice(1);
  const FeaturedIcon = featuredService.icon;

  return (
    <section id="services" className="relative z-10 overflow-hidden py-20 sm:py-24 lg:min-h-screen lg:py-28">
      <div className="absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-fuchsia-300/50 to-transparent" />
      <div className="absolute inset-0 -z-10 bg-[linear-gradient(180deg,rgba(255,255,255,.035),transparent_24%,rgba(255,255,255,.028)_72%,transparent)]" />
      <div className="absolute inset-0 -z-10 bg-[linear-gradient(90deg,rgba(255,255,255,.045)_1px,transparent_1px),linear-gradient(180deg,rgba(255,255,255,.035)_1px,transparent_1px)] bg-[size:96px_96px] opacity-20 [mask-image:linear-gradient(to_bottom,transparent,black_18%,black_82%,transparent)]" />

      <div className="mx-auto grid min-h-[calc(100vh-8rem)] max-w-7xl gap-8 px-5 sm:px-8 lg:grid-cols-[.78fr_1.22fr] lg:items-stretch">
        <div className="animate-rise flex min-h-full flex-col rounded-[2rem] border border-white/10 bg-black/25 p-6 backdrop-blur-xl md:p-8">
          <div>
            <SectionHeading
              eyebrow="Services"
              title="Modern systems, built from backend to launch."
            />
            <p className="mt-5 max-w-xl text-lg leading-8 text-purple-100/68">
              I help teams replace slow manual work with secure software that looks
              polished, runs fast, and keeps growing with the business.
            </p>
            <a
              href="#contact"
              className="mt-7 inline-flex items-center gap-2 rounded-full border border-fuchsia-300/25 bg-fuchsia-300/10 px-5 py-3 text-sm font-bold text-fuchsia-100 transition hover:-translate-y-0.5 hover:bg-fuchsia-300/15"
            >
              Discuss a system
              <ArrowUpRight size={17} />
            </a>
          </div>

          <div className="mt-8 grid gap-4">
            <div className="grid grid-cols-3 gap-3">
              {[
                ["01", "Plan"],
                ["02", "Build"],
                ["03", "Launch"],
              ].map(([value, label]) => (
                <div key={label} className="process-tile rounded-2xl border border-purple-200/10 bg-white/[.045] p-4">
                  <p className="text-2xl font-black text-white">{value}</p>
                  <p className="mt-1 text-xs font-bold uppercase tracking-[.16em] text-purple-100/45">{label}</p>
                </div>
              ))}
            </div>

            <div className="rounded-3xl border border-fuchsia-200/10 bg-fuchsia-300/[.07] p-5">
              <p className="text-sm font-bold uppercase tracking-[.18em] text-fuchsia-200">Best for</p>
              <div className="mt-4 grid gap-3 text-sm text-purple-100/76">
                {["Admin portals", "School and ERP systems", "Secure API products"].map((item) => (
                  <div key={item} className="flex items-center gap-3">
                    <CheckCircle2 size={17} className="shrink-0 text-fuchsia-200" />
                    <span>{item}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>

        <div className="grid gap-4 lg:grid-rows-[1fr_.9fr]">
          <article
            className="scroll-reveal service-card service-card-feature group relative overflow-hidden rounded-[2rem] border border-fuchsia-200/15 bg-white/[.055] p-6 transition hover:border-fuchsia-300/45 hover:bg-white/[.075] md:p-8"
            data-direction={featuredService.direction}
          >
            <div className="absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-fuchsia-300/80 to-transparent" />
            <div className="absolute inset-0 bg-[radial-gradient(circle_at_18%_12%,rgba(217,70,239,.22),transparent_28%),radial-gradient(circle_at_88%_82%,rgba(129,140,248,.16),transparent_34%)]" />
            <div className="relative grid h-full gap-8 lg:grid-cols-[.8fr_1.2fr] lg:items-end">
              <div className="flex h-full flex-col justify-between">
                <div>
                  <div className="mb-7 grid size-16 place-items-center rounded-3xl border border-fuchsia-200/20 bg-fuchsia-300/10 text-fuchsia-100 shadow-[0_0_38px_rgba(217,70,239,.2)]">
                    <FeaturedIcon size={30} />
                  </div>
                  <p className="text-sm font-bold uppercase tracking-[.18em] text-fuchsia-200">
                    {featuredService.subtitle}
                  </p>
                  <h3 className="mt-4 text-3xl font-black leading-tight text-white sm:text-4xl">
                    {featuredService.title}
                  </h3>
                </div>
                <p className="mt-8 text-sm font-bold uppercase tracking-[.18em] text-purple-100/38">
                  Core service
                </p>
              </div>

              <div>
                <p className="text-lg leading-8 text-purple-100/76">
                  {featuredService.description}
                </p>
                <div className="mt-7 grid gap-3 sm:grid-cols-3 lg:grid-cols-1 xl:grid-cols-3">
                  {featuredService.outcomes.map((outcome) => (
                    <div key={outcome} className="rounded-2xl border border-white/10 bg-black/24 p-4 text-sm font-semibold text-purple-100/80">
                      {outcome}
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </article>

          <div className="grid gap-4 md:grid-cols-3">
            {supportingServices.map((service, index) => {
              const Icon = service.icon;

              return (
            <article
              key={service.title}
              className="scroll-reveal service-card service-card-compact group relative min-h-[20rem] overflow-hidden rounded-[1.6rem] border border-white/10 bg-white/[.045] p-5 transition hover:border-fuchsia-300/35 hover:bg-white/[.065] md:p-6"
              data-direction={service.direction}
              style={{ transitionDelay: `${(index + 1) * 90}ms` }}
            >
              <div className="absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-fuchsia-300/75 to-transparent" />
              <div className="absolute -right-14 -top-14 size-36 rounded-full bg-fuchsia-400/10 opacity-70 blur-2xl transition-opacity group-hover:opacity-100" />
              <div className="relative flex h-full flex-col">
                <div className="mb-5 flex items-start justify-between gap-4">
                  <div className="grid size-12 place-items-center rounded-2xl border border-fuchsia-200/15 bg-fuchsia-300/10 text-fuchsia-100 shadow-[0_0_28px_rgba(217,70,239,.14)]">
                    <Icon size={23} />
                  </div>
                  <span className="rounded-full border border-purple-200/10 bg-black/25 px-3 py-1 text-xs font-bold text-purple-100/55">
                    0{index + 2}
                  </span>
                </div>

                <p className="text-xs font-bold uppercase tracking-[.16em] text-fuchsia-200">
                  {service.subtitle}
                </p>
                <h3 className="mt-3 text-xl font-black leading-tight text-white">
                  {service.title}
                </h3>
                <p className="mt-4 text-sm leading-6 text-purple-100/68">
                  {service.description}
                </p>

                <div className="mt-auto pt-6">
                  <div className="grid gap-2">
                    {service.outcomes.slice(0, 2).map((outcome) => (
                      <div key={outcome} className="flex items-center gap-3 text-sm text-purple-100/76">
                        <span className="size-1.5 shrink-0 rounded-full bg-fuchsia-300" />
                        <span>{outcome}</span>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </article>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
}
