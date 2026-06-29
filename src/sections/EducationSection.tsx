import { Award, GraduationCap } from "lucide-react";
import { courses } from "../data/portfolio";

export function EducationSection() {
  return (
    <section className="reveal relative z-10 mx-auto grid max-w-7xl gap-5 px-5 py-16 sm:px-8 lg:grid-cols-2">
      <article
        data-reveal="left"
        className="reveal rounded-3xl border border-white/10 bg-white/[.04] p-6 transition hover:-translate-y-1 hover:border-fuchsia-300/30 md:p-8"
      >
        <div className="mb-6 grid size-12 place-items-center rounded-2xl bg-fuchsia-300/10 text-fuchsia-100">
          <GraduationCap size={24} />
        </div>
        <p className="text-sm font-semibold uppercase tracking-[.18em] text-fuchsia-200">Education</p>
        <h2 className="mt-3 text-3xl font-black">Bachelor of Engineering in Information Technology</h2>
        <p className="mt-4 text-purple-100/72">Thanlyin Technological University, 2015 - 2024</p>
        <div className="mt-6 rounded-3xl border border-purple-200/10 bg-black/25 p-5">
          <p className="text-lg font-bold text-white">BE-IT graduate focused on practical software engineering.</p>
          <p className="mt-2 text-sm leading-6 text-purple-100/62">
            Strong foundation in system design, networking, backend development, and production web applications.
          </p>
        </div>
      </article>

      <article
        data-reveal="right"
        className="reveal rounded-3xl border border-white/10 bg-white/[.04] p-6 transition hover:-translate-y-1 hover:border-fuchsia-300/30 md:p-8"
      >
        <div className="mb-6 grid size-12 place-items-center rounded-2xl bg-fuchsia-300/10 text-fuchsia-200">
          <Award size={24} />
        </div>
        <p className="text-sm font-semibold uppercase tracking-[.18em] text-fuchsia-200">Courses</p>
        <h2 className="mt-3 text-3xl font-black">Always learning, always shipping.</h2>
        <div className="mt-6 grid gap-3 text-purple-100/72">
          {courses.map((course) => (
            <div key={course} className="flex gap-3">
              <span className="mt-2 size-2 shrink-0 rounded-full bg-fuchsia-300" />
              <span>{course}</span>
            </div>
          ))}
        </div>
      </article>
    </section>
  );
}
