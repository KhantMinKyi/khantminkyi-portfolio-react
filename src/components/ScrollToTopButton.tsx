import { ArrowUp } from "lucide-react";

type ScrollToTopButtonProps = {
  visible: boolean;
};

export function ScrollToTopButton({ visible }: ScrollToTopButtonProps) {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <button
      type="button"
      onClick={scrollToTop}
      aria-label="Scroll to top"
      className={`fixed bottom-5 right-5 z-50 grid size-12 place-items-center rounded-full border border-fuchsia-200/25 bg-fuchsia-200/14 text-fuchsia-50 shadow-[0_18px_48px_rgba(88,28,135,.38)] backdrop-blur-xl transition duration-300 hover:-translate-y-1 hover:bg-fuchsia-200/22 focus:outline-none focus:ring-2 focus:ring-fuchsia-200/60 sm:bottom-6 sm:right-6 ${
        visible
          ? "pointer-events-auto translate-y-0 opacity-100"
          : "pointer-events-none translate-y-4 opacity-0"
      }`}
    >
      <ArrowUp size={21} />
    </button>
  );
}
