import { useEffect, useState } from "react";
import { LoadingScreen } from "./components/LoadingScreen";
import { ScrollToTopButton } from "./components/ScrollToTopButton";
import { ContactSection } from "./sections/ContactSection";
import { EducationSection } from "./sections/EducationSection";
import { ExperienceSection } from "./sections/ExperienceSection";
import { ExpertiseSection } from "./sections/ExpertiseSection";
import { FocusMarquee } from "./sections/FocusMarquee";
import { Footer } from "./sections/Footer";
import { Header } from "./sections/Header";
import { HeroSection } from "./sections/HeroSection";
import { PageBackground } from "./sections/PageBackground";
import { ProjectsSection } from "./sections/ProjectsSection";
import { ServicesSection } from "./sections/ServicesSection";
import { useRevealOnScroll } from "./hooks/useRevealOnScroll";

const LOADING_STORAGE_KEY = "khant-min-kyi-loading-seen-at";
const LOADING_COOLDOWN_MS = 60 * 60 * 1000;

function shouldShowLoadingScreen() {
  if (typeof window === "undefined") return false;

  try {
    const lastSeenAt = Number(window.localStorage.getItem(LOADING_STORAGE_KEY));
    return !lastSeenAt || Date.now() - lastSeenAt > LOADING_COOLDOWN_MS;
  } catch {
    return true;
  }
}

function saveLoadingSeenAt() {
  try {
    window.localStorage.setItem(LOADING_STORAGE_KEY, String(Date.now()));
  } catch {
    // Storage can be unavailable in strict private browsing modes.
  }
}

function App() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const [showLoading, setShowLoading] = useState(shouldShowLoadingScreen);

  useRevealOnScroll();

  useEffect(() => {
    const onScroll = () => setIsScrolled(window.scrollY > 18);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <main className="relative min-h-screen overflow-hidden bg-[#07020f] text-white">
      <PageBackground />
      <Header
        isScrolled={isScrolled}
        menuOpen={menuOpen}
        onToggleMenu={() => setMenuOpen((value) => !value)}
        onCloseMenu={() => setMenuOpen(false)}
      />
      <HeroSection />
      <FocusMarquee />
      <ServicesSection />
      <ExpertiseSection />
      <ExperienceSection />
      <ProjectsSection />
      <EducationSection />
      <ContactSection />
      <Footer />
      <ScrollToTopButton visible={isScrolled} />
      {showLoading && (
        <LoadingScreen
          onComplete={() => {
            saveLoadingSeenAt();
            setShowLoading(false);
          }}
        />
      )}
    </main>
  );
}

export default App;
