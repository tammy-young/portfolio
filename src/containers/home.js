import NavBar from "./navbar";
import IntroSection from "./intro";
import AboutSection from "./about";
import Projects from "./projects";

export default function Home() {
  return (
    <div className="space-y-12">
      <NavBar />
      <IntroSection />
      <AboutSection />
      <Projects />
    </div>
  );
}
