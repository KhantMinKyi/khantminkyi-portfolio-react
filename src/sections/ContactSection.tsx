import { BriefcaseBusiness } from "lucide-react";
import { ContactLink } from "../components/ContactLink";
import { contactLinks } from "../data/portfolio";

export function ContactSection() {
  return (
    <section id="contact" className="reveal relative z-10 mx-auto max-w-7xl px-5 py-16 sm:px-8">
      <div
        data-reveal="scale"
        className="reveal relative overflow-hidden rounded-[2rem] border border-white/10 bg-white/[.05] p-6 md:p-10"
      >
        <div className="absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-fuchsia-300 to-transparent" />
        <div className="grid gap-8 lg:grid-cols-[1fr_.8fr] lg:items-center">
          <div>
            <div className="mb-5 inline-flex items-center gap-2 rounded-full border border-purple-200/10 bg-black/25 px-4 py-2 text-sm text-purple-100/72">
              <BriefcaseBusiness size={16} />
              Available for modern web systems
            </div>
            <h2 className="text-4xl font-black leading-tight sm:text-5xl">
              Let us build fast, secure, maintainable software.
            </h2>
            <p className="mt-5 max-w-2xl text-lg leading-8 text-purple-100/72">
              Best fit: dashboards, school platforms, admin portals, APIs, backend
              architecture, role permissions, reporting, and database optimization.
            </p>
          </div>

          <div className="grid gap-3">
            {contactLinks.map((link) => (
              <ContactLink key={link.label} {...link} />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
