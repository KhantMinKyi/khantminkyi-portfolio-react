import { currentFocus } from "../data/portfolio";

export function FocusMarquee() {
  return (
    <section className="relative z-10 border-y border-purple-200/10 bg-white/[.035] py-4">
      <div className="marquee-track flex gap-4 text-sm font-bold uppercase tracking-[.18em] text-purple-100/70">
        {[...currentFocus, ...currentFocus, ...currentFocus].map((item, index) => (
          <span key={`${item}-${index}`} className="flex items-center gap-4">
            <span>{item}</span>
            <span className="size-1.5 rounded-full bg-fuchsia-300" />
          </span>
        ))}
      </div>
    </section>
  );
}
