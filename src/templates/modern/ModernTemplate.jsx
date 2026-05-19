import { Navbar } from "../../components/layout/Navbar";
import { SectionRenderer } from "../../app/SectionRenderer";

export function ModernTemplate({ brand, navLinks, sections, theme }) {
  const [heroSection, ...contentSections] = sections;

  return (
    <div className="min-h-screen bg-muted/40 text-foreground">
      <Navbar brand={brand} links={navLinks} theme={theme} />
      <main>
        {heroSection ? <SectionRenderer sections={[heroSection]} /> : null}
        <div className="bg-background">
          <SectionRenderer sections={contentSections} />
        </div>
      </main>
    </div>
  );
}
