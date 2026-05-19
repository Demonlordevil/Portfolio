import { Navbar } from "../../components/layout/Navbar";
import { SectionRenderer } from "../../app/SectionRenderer";

export function MinimalTemplate({ brand, navLinks, sections, theme }) {
  return (
    <div className="min-h-screen bg-background text-foreground">
      <Navbar brand={brand} links={navLinks} theme={theme} />
      <main>
        <SectionRenderer sections={sections} />
      </main>
    </div>
  );
}
