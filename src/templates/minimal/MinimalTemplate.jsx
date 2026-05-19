import { Navbar } from "../../components/layout/Navbar";
import { SectionRenderer } from "../../app/SectionRenderer";

export function MinimalTemplate({ brand, navLinks, sections, theme }) {
  return (
    <div className="relative isolate min-h-screen overflow-hidden bg-background text-foreground">
      <div className="pointer-events-none fixed inset-0 -z-10 bg-[radial-gradient(circle_at_10%_10%,rgb(var(--color-atmosphere-primary)/var(--opacity-atmosphere-primary)),transparent_24rem),radial-gradient(circle_at_88%_4%,rgb(var(--color-atmosphere-secondary)/var(--opacity-atmosphere-secondary)),transparent_24rem),radial-gradient(circle_at_58%_58%,rgb(var(--color-atmosphere-tertiary)/var(--opacity-atmosphere-tertiary)),transparent_34rem),linear-gradient(180deg,rgb(var(--color-background)),rgb(var(--color-background))_48%,rgb(var(--color-atmosphere-end)))]" />
      <div className="pointer-events-none fixed inset-0 -z-10 bg-[linear-gradient(rgb(var(--color-border)/0.1)_1px,transparent_1px),linear-gradient(90deg,rgb(var(--color-border)/0.1)_1px,transparent_1px)] bg-[size:56px_56px] opacity-[var(--opacity-grid)] [mask-image:linear-gradient(to_bottom,black,transparent_82%)] sm:bg-[size:88px_88px]" />
      <Navbar brand={brand} links={navLinks} theme={theme} />
      <main className="relative pt-16 sm:pt-[4.5rem]">
        <SectionRenderer sections={sections} />
      </main>
    </div>
  );
}
