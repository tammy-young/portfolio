import Navigation from "./navigation";
import IntroSection from "./intro";
import AboutSection from "./about";
import Projects from "./projects";
import Experience from "./experience";
import Connect from "./contact";
import { useLocation } from "react-router-dom";
import { useEffect } from "react";
import ScrollToTopButton from "../components/scrollToTopButton";

export default function Home() {

  const location = useLocation();
  const fragment = location.hash;

  useEffect(() => {
    if (fragment) {
      const element = document.getElementById(fragment.replace('#', ''));
      if (element) {
        element.scrollIntoView({ behavior: 'smooth' });
      }
    }
  }, [fragment]);

  return (
    <div className="flex md:flex-row scroll-smooth">
      <Navigation />
      <div className="flex flex-col snap-y snap-mandatory overflow-y-scroll !h-dvh">
        <div className="snap-start snap-always">
          <IntroSection />
        </div>
        <div className="snap-start snap-always">
          <AboutSection />
        </div>
        <div className="snap-start snap-always">
          <Projects />
        </div>
        <div className="snap-start snap-always">
          <Experience />
        </div>
        <div className="snap-start snap-always">
          <Connect />
        </div>
      </div>
      <ScrollToTopButton />
    </div>
  );
}
