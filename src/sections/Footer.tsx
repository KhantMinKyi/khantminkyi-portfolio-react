import { Globe2 } from "lucide-react";

export function Footer() {
  return (
    <footer className="relative z-10 mx-auto flex max-w-7xl flex-col gap-3 px-5 py-8 text-sm text-purple-100/42 sm:px-8 md:flex-row md:items-center md:justify-between">
      <p>© 2026 Khant Min Kyi. Crafted with React, TypeScript, and Tailwind CSS.</p>
      <div className="flex items-center gap-2">
        <Globe2 size={16} />
        <span>Burmese native / English fluent / Japanese basic</span>
      </div>
    </footer>
  );
}
