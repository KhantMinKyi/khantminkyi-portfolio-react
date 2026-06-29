import { Code2, Database } from "lucide-react";

type TechIconProps = {
  name: string;
};

export function TechIcon({ name }: TechIconProps) {
  const normalized = name.toLowerCase();

  if (normalized.includes("react")) {
    return (
      <span className="tech-icon text-sky-200">
        <svg viewBox="0 0 32 32" aria-hidden="true">
          <circle cx="16" cy="16" r="2.6" fill="currentColor" />
          <ellipse cx="16" cy="16" rx="13" ry="5" fill="none" stroke="currentColor" strokeWidth="1.8" />
          <ellipse cx="16" cy="16" rx="13" ry="5" fill="none" stroke="currentColor" strokeWidth="1.8" transform="rotate(60 16 16)" />
          <ellipse cx="16" cy="16" rx="13" ry="5" fill="none" stroke="currentColor" strokeWidth="1.8" transform="rotate(120 16 16)" />
        </svg>
      </span>
    );
  }

  if (normalized.includes("laravel")) {
    return (
      <span className="tech-icon text-rose-200">
        <svg viewBox="0 0 32 32" aria-hidden="true">
          <path d="M6 9.5 16 4l10 5.5v12.8L16 28 6 22.3Z" fill="none" stroke="currentColor" strokeWidth="2" />
          <path d="M11 10v9l10 5M21 10v9l-10 5M11 19l10-5" fill="none" stroke="currentColor" strokeWidth="2" strokeLinejoin="round" />
        </svg>
      </span>
    );
  }

  if (normalized.includes("node")) {
    return (
      <span className="tech-icon text-emerald-200">
        <svg viewBox="0 0 32 32" aria-hidden="true">
          <path d="M16 3.5 27 9.8v12.4l-11 6.3-11-6.3V9.8Z" fill="none" stroke="currentColor" strokeWidth="2" />
          <path d="M11 20V12l10 8v-8" fill="none" stroke="currentColor" strokeWidth="2.3" strokeLinecap="round" strokeLinejoin="round" />
        </svg>
      </span>
    );
  }

  if (normalized.includes("mysql") || normalized.includes("postgres") || normalized.includes("mongo") || normalized.includes("database")) {
    return (
      <span className="tech-icon text-violet-200">
        <Database size={18} />
      </span>
    );
  }

  if (normalized.includes("tailwind")) {
    return (
      <span className="tech-icon text-violet-200">
        <svg viewBox="0 0 32 32" aria-hidden="true">
          <path d="M6 18c2.2-5.4 5.8-8 10.7-7.6 3 .2 4.8 1.7 5.6 4.3 1.2-1.8 2.8-2.7 4.7-2.7-2.2 5.3-5.8 7.8-10.7 7.4-3-.2-4.8-1.6-5.6-4.2C9.5 17.1 7.9 18 6 18Z" fill="currentColor" />
        </svg>
      </span>
    );
  }

  if (normalized.includes("docker")) {
    return (
      <span className="tech-icon text-blue-200">
        <svg viewBox="0 0 32 32" aria-hidden="true">
          <path d="M6 17h20c-.5 5.5-4 8-10.4 8C10 25 7 22.4 6 17Z" fill="none" stroke="currentColor" strokeWidth="2" />
          <path d="M9 12h4v4H9Zm5 0h4v4h-4Zm5 0h4v4h-4ZM14 7h4v4h-4Z" fill="currentColor" />
        </svg>
      </span>
    );
  }

  if (normalized.includes("git")) {
    return (
      <span className="tech-icon text-orange-200">
        <svg viewBox="0 0 32 32" aria-hidden="true">
          <path d="M16 4 28 16 16 28 4 16Z" fill="none" stroke="currentColor" strokeWidth="2" />
          <path d="M12 12h5l4 4M17 12v9" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" />
        </svg>
      </span>
    );
  }

  return (
    <span className="tech-icon text-fuchsia-100">
      <Code2 size={18} />
    </span>
  );
}
