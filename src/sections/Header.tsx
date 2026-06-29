import { Mail, Menu, X } from "lucide-react";
import { navItems } from "../data/portfolio";

type HeaderProps = {
  isScrolled: boolean;
  menuOpen: boolean;
  onToggleMenu: () => void;
  onCloseMenu: () => void;
};

export function Header({ isScrolled, menuOpen, onToggleMenu, onCloseMenu }: HeaderProps) {
  return (
    <header className="fixed inset-x-0 top-3 z-50 px-4 transition-all duration-500 sm:px-6">
      <nav
        className={`liquid-nav mx-auto flex max-w-7xl items-center justify-between rounded-[1.6rem] border px-4 shadow-2xl transition-all duration-500 sm:px-6 ${
          isScrolled
            ? "border-white/24 py-2.5 shadow-fuchsia-950/35"
            : "border-white/18 py-3.5 shadow-purple-950/20"
        }`}
      >
        <a href="#" className="group flex items-center gap-3">
          <span className="grid size-10 place-items-center rounded-2xl border border-fuchsia-300/30 bg-fuchsia-300/10 text-sm font-black text-fuchsia-100 shadow-[0_0_34px_rgba(217,70,239,.28)]">
            KM
          </span>
          <span className="leading-tight">
            <span className="block text-sm font-semibold tracking-wide text-white">Khant Min Kyi</span>
            <span className="block text-xs text-purple-200/70">Senior Software Developer</span>
          </span>
        </a>

        <div className="hidden items-center gap-1 rounded-full border border-purple-200/10 bg-white/[.04] p-1 shadow-2xl shadow-purple-950/30 md:flex">
          {navItems.map((item) => (
            <a
              key={item}
              href={`#${item.toLowerCase()}`}
              className="rounded-full px-4 py-2 text-sm text-purple-100/75 transition hover:bg-fuchsia-400/15 hover:text-white"
            >
              {item}
            </a>
          ))}
        </div>

        <a
          href="mailto:khantminkyi@gmail.com"
          className="hidden items-center gap-2 rounded-full bg-gradient-to-r from-fuchsia-300 to-violet-300 px-4 py-2 text-sm font-semibold text-slate-950 shadow-[0_0_30px_rgba(217,70,239,.25)] transition hover:-translate-y-0.5 md:flex"
        >
          <Mail size={16} />
          Hire Me
        </a>

        <button
          type="button"
          className="grid size-10 place-items-center rounded-full border border-purple-200/10 bg-white/5 md:hidden"
          onClick={onToggleMenu}
          aria-label="Toggle navigation"
        >
          {menuOpen ? <X size={18} /> : <Menu size={18} />}
        </button>
      </nav>

      {menuOpen && (
        <div className="border-t border-purple-200/10 bg-[#0d0518] px-5 py-4 md:hidden">
          <div className="grid gap-2">
            {navItems.map((item) => (
              <a
                key={item}
                href={`#${item.toLowerCase()}`}
                onClick={onCloseMenu}
                className="rounded-2xl px-4 py-3 text-sm text-purple-100 hover:bg-fuchsia-300/10"
              >
                {item}
              </a>
            ))}
          </div>
        </div>
      )}
    </header>
  );
}
