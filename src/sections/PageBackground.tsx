export function PageBackground() {
  return (
    <div aria-hidden="true" className="pointer-events-none fixed inset-0 z-0">
      <div className="absolute left-1/2 top-[-12rem] h-[44rem] w-[44rem] -translate-x-1/2 rounded-full bg-purple-600/25 blur-[140px]" />
      <div className="absolute bottom-0 right-[-12rem] h-[36rem] w-[36rem] rounded-full bg-fuchsia-500/18 blur-[130px]" />
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,rgba(255,255,255,.055)_1px,transparent_1px)] bg-[size:28px_28px] opacity-35 [mask-image:linear-gradient(to_bottom,black,transparent_85%)]" />
    </div>
  );
}
