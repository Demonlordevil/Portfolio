import { siteConfig } from "../config/site.config";
import { projects } from "../data/projects";
import { skillGroups } from "../data/skills";
import { useTheme } from "../hooks/useTheme";
import { Navbar } from "../components/layout/Navbar";
import { About } from "../components/sections/About";
import { Contact } from "../components/sections/Contact";
import { Hero } from "../components/sections/Hero";
import { Projects } from "../components/sections/projects/Projects";
import { Skills } from "../components/sections/skills/Skills";

export function App() {
  const theme = useTheme();

  return (
    <div className="min-h-screen bg-background text-foreground">
      <Navbar brand={siteConfig.name} links={siteConfig.navLinks} theme={theme} />
      <main>
        <Hero profile={siteConfig.profile} />
        <About about={siteConfig.about} />
        <Projects projects={projects} />
        <Skills skillGroups={skillGroups} />
        <Contact contact={siteConfig.contact} />
      </main>
    </div>
  );
}
