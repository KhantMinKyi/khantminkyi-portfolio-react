import { ArrowUpRight } from "lucide-react";
import type { ContactItem } from "../types";

export function ContactLink({ icon: Icon, label, href }: ContactItem) {
  const isExternal = href.startsWith("http");

  return (
    <a
      href={href}
      target={isExternal ? "_blank" : undefined}
      rel={isExternal ? "noreferrer" : undefined}
      className="group flex items-center justify-between gap-4 rounded-2xl border border-purple-200/10 bg-black/25 px-4 py-4 text-purple-100/82 transition hover:border-fuchsia-300/35 hover:bg-fuchsia-300/10"
    >
      <span className="flex min-w-0 items-center gap-3">
        <span className="grid size-10 shrink-0 place-items-center rounded-xl bg-fuchsia-300/10 text-fuchsia-100">
          <Icon size={18} />
        </span>
        <span className="truncate">{label}</span>
      </span>
      <ArrowUpRight
        size={18}
        className="shrink-0 opacity-60 transition group-hover:translate-x-0.5 group-hover:-translate-y-0.5 group-hover:opacity-100"
      />
    </a>
  );
}
