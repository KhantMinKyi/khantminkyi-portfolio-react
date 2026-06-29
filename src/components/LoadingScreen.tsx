import { useEffect } from "react";

const INTRO_DURATION_MS = 2400;
const headlineWords = ["Hello", "It's", "Khant", "Min", "Kyi", "Software Developer"];
const loadingTags = ["Backend", "Software", "Structure"];

type LoadingScreenProps = {
  onComplete: () => void;
};

export function LoadingScreen({ onComplete }: LoadingScreenProps) {
  useEffect(() => {
    const previousOverflow = document.body.style.overflow;
    document.body.style.overflow = "hidden";

    const timer = window.setTimeout(() => {
      document.body.style.overflow = previousOverflow;
      onComplete();
    }, INTRO_DURATION_MS);

    return () => {
      window.clearTimeout(timer);
      document.body.style.overflow = previousOverflow;
    };
  }, [onComplete]);

  return (
    <div className="loading-screen" role="status" aria-live="polite" aria-label="Loading portfolio">
      <div className="loading-grid" />
      <div className="loading-orbit" aria-hidden="true">
        <span />
        <span />
        <span />
      </div>

      <div className="loading-panel">
        <div className="loading-mark">
          <span>KM</span>
        </div>
        <p className="loading-eyebrow">Launching portfolio</p>
        <h1 className="loading-title" aria-label="Designing secure systems that move fast.">
          {headlineWords.map((word, index) => (
            <span key={word} style={{ animationDelay: `${index * 110}ms` }}>
              {word}
            </span>
          ))}
        </h1>
        <div className="loading-copy">
          {loadingTags.map((tag) => (
            <span key={tag}>{tag}</span>
          ))}
        </div>
        <div className="loading-progress" aria-hidden="true">
          <span />
        </div>
      </div>
    </div>
  );
}
