import { Navbar } from "../../components/layout/Navbar";
import { SectionRenderer } from "../../app/SectionRenderer";

export function ModernTemplate({ brand, navLinks, sections, theme }) {
  const [heroSection, ...contentSections] = sections;

  return (
    <div className="relative isolate min-h-screen overflow-hidden bg-background text-foreground">
      <div className="pointer-events-none fixed inset-0 -z-10 bg-[radial-gradient(circle_at_14%_10%,rgb(var(--color-atmosphere-primary)/var(--opacity-atmosphere-primary)),transparent_24rem),radial-gradient(circle_at_88%_8%,rgb(var(--color-atmosphere-secondary)/var(--opacity-atmosphere-secondary)),transparent_24rem),radial-gradient(circle_at_58%_58%,rgb(var(--color-atmosphere-tertiary)/var(--opacity-atmosphere-tertiary)),transparent_34rem),linear-gradient(180deg,rgb(var(--color-background)),rgb(var(--color-background))_48%,rgb(var(--color-atmosphere-end)))]" />
      <Navbar brand={brand} links={navLinks} theme={theme} />
      <main className="pt-16 sm:pt-[4.5rem]">
        {heroSection ? <SectionRenderer sections={[heroSection]} /> : null}
        <div>
          <SectionRenderer sections={contentSections} />
        </div>
      </main>
    </div>
  );
}
