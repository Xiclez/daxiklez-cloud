import Landing from "./components/Landing";
import Navbar from "./components/Navbar";
import Contact from "./components/Contact";
import Profiles from "./components/Profiles";
import Projects from "./components/Projects";
import Home from "./components/Home";

export default function Page() {
  return (
    <div className="relative z-0 bg-primary font-sans">
      {/* Navbar */}
      <Navbar />

      {/* Landing Page */}
      <section id="landing">
        <Landing />
      </section>

      {/* Home Section */}
      <section id="home">
        <Home />
      </section>

      {/* Projects Section */}
      <section id="projects">
        <Projects />
      </section>

      {/* Profiles Section */}
      <section id="profiles">
        <Profiles />
      </section>

      {/* Contact Section */}
      <section id="contact">
        <Contact />
      </section>
    </div>
  );
}
