import { useEffect } from "react";

const ENTER_TOP_RATIO = 0.86;
const ENTER_BOTTOM_RATIO = 0.14;
const RESET_TOP_RATIO = 0.96;
const RESET_BOTTOM_RATIO = 0.04;

export function useRevealOnScroll() {
  useEffect(() => {
    const elements = Array.from(
      document.querySelectorAll<HTMLElement>(".reveal, .scroll-reveal"),
    );

    let frame = 0;

    const updateVisibility = () => {
      frame = 0;
      const viewportHeight = window.innerHeight || document.documentElement.clientHeight;
      const enterTop = viewportHeight * ENTER_TOP_RATIO;
      const enterBottom = viewportHeight * ENTER_BOTTOM_RATIO;
      const resetTop = viewportHeight * RESET_TOP_RATIO;
      const resetBottom = viewportHeight * RESET_BOTTOM_RATIO;

      elements.forEach((element) => {
        const rect = element.getBoundingClientRect();
        const shouldShow = rect.top < enterTop && rect.bottom > enterBottom;
        const shouldReset = rect.top > resetTop || rect.bottom < resetBottom;

        if (shouldShow) {
          element.classList.add("is-visible");
          return;
        }

        if (shouldReset) {
          element.classList.remove("is-visible");
        }
      });
    };

    const requestUpdate = () => {
      if (frame) return;
      frame = window.requestAnimationFrame(updateVisibility);
    };

    updateVisibility();
    window.addEventListener("scroll", requestUpdate, { passive: true });
    window.addEventListener("resize", requestUpdate);

    return () => {
      if (frame) {
        window.cancelAnimationFrame(frame);
      }
      window.removeEventListener("scroll", requestUpdate);
      window.removeEventListener("resize", requestUpdate);
    };
  }, []);
}
