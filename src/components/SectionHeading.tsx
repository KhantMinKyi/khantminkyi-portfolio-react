type SectionHeadingProps = {
  eyebrow: string;
  title: string;
};

export function SectionHeading({ eyebrow, title }: SectionHeadingProps) {
  return (
    <div className="max-w-3xl">
      <p className="text-sm font-bold uppercase tracking-[.2em] text-fuchsia-200">{eyebrow}</p>
      <h2 className="mt-3 text-3xl font-black leading-tight text-white sm:text-5xl">{title}</h2>
    </div>
  );
}
