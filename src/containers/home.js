import NavBar from "./navbar";
import IntroSection from "./intro";
import AboutSection from "./about";
import Projects from "./projects";
import Experience from "./experience";
import Connect from "./contact";
import { useLocation } from "react-router-dom";
import { useEffect } from "react";

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
    <div className="space-y-12">
      <NavBar />
      <IntroSection />
      <AboutSection />
      <Projects />
      <Experience />
      <Connect />
    </div>
  );
}
