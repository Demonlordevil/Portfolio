import { Container } from "../ui/Container";
import { ThemeToggle } from "../ui/ThemeToggle";

export function Navbar({ brand, links, theme }) {
  return (
    <header className="sticky top-0 z-10 border-b border-border bg-background/90 backdrop-blur">
      <Container className="flex h-16 items-center justify-between">
        <a href="#" className="text-sm font-semibold tracking-wide">
          {brand}
        </a>

        <div className="flex items-center gap-4">
          <nav aria-label="Primary navigation" className="hidden gap-6 sm:flex">
            {links.map((link) => (
              <a
                key={link.href}
                href={link.href}
                className="text-sm text-foreground/70 transition hover:text-foreground"
              >
                {link.label}
              </a>
            ))}
          </nav>

          <ThemeToggle
            currentLabel={theme.currentLabel}
            nextLabel={theme.nextLabel}
            onToggle={theme.toggleTheme}
          />
        </div>
      </Container>
    </header>
  );
}
