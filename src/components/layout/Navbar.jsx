import { useEffect, useState } from "react";
import { Container } from "../ui/Container";
import { ThemeToggle } from "../ui/ThemeToggle";

export function Navbar({ brand, links, theme }) {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [activeHref, setActiveHref] = useState("");

  useEffect(() => {
    function updateActiveHref() {
      setActiveHref(window.location.hash);
    }

    updateActiveHref();
    window.addEventListener("hashchange", updateActiveHref);

    return () => window.removeEventListener("hashchange", updateActiveHref);
  }, []);

  function getLinkClassName(href) {
    const isActive = activeHref === href;

    return [
      "relative whitespace-nowrap rounded-md px-2.5 py-2 text-sm font-medium transition focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-primary xl:px-3.5",
      isActive
        ? "text-foreground after:absolute after:inset-x-2.5 after:-bottom-0.5 after:h-0.5 after:rounded-full after:bg-primary xl:after:inset-x-3.5"
        : "text-foreground/62 hover:bg-muted/70 hover:text-foreground",
    ].join(" ");
  }

  function handleLinkClick(href) {
    setActiveHref(href);
    setIsMenuOpen(false);
  }

  return (
    <header className="sticky top-0 z-10 border-b border-border bg-background/92 backdrop-blur-xl">
      <Container className="flex min-h-[4.75rem] items-center gap-4 lg:gap-6">
        <div className="flex min-w-0 flex-1 items-center">
          <a
            href="#"
            className="group flex min-w-0 items-center gap-3 rounded-md py-2 pr-3 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-primary"
            onClick={() => setIsMenuOpen(false)}
          >
            <span className="flex h-10 w-10 shrink-0 items-center justify-center rounded-lg border border-border bg-muted text-sm font-semibold text-primary transition group-hover:border-primary/40">
              {brand.slice(0, 1)}
            </span>
            <span className="hidden min-w-0 flex-col sm:flex">
              <span className="text-base font-semibold leading-5 text-foreground">
                {brand}
              </span>
              <span className="text-xs font-medium leading-5 text-foreground/55">
                Developer Portfolio
              </span>
            </span>
          </a>
        </div>

        <nav
          aria-label="Primary navigation"
          className="hidden shrink-0 items-center justify-center gap-1.5 px-3 lg:flex xl:gap-2 xl:px-5"
        >
          {links.map((link) => (
            <a
              key={link.href}
              href={link.href}
              className={getLinkClassName(link.href)}
              onClick={() => handleLinkClick(link.href)}
            >
              {link.label}
            </a>
          ))}
        </nav>

        <div className="hidden flex-1 items-center justify-end lg:flex">
          <ThemeToggle
            currentLabel={theme.currentLabel}
            nextLabel={theme.nextLabel}
            onToggle={theme.toggleTheme}
          />
        </div>

        <div className="flex flex-1 items-center justify-end gap-3 lg:hidden">
          <ThemeToggle
            currentLabel={theme.currentLabel}
            nextLabel={theme.nextLabel}
            onToggle={theme.toggleTheme}
          />

          <button
            type="button"
            className="inline-flex h-10 w-10 items-center justify-center rounded-md border border-border bg-muted text-foreground transition hover:border-primary/40 hover:text-primary focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-primary"
            aria-label="Toggle navigation menu"
            aria-expanded={isMenuOpen}
            aria-controls="mobile-navigation"
            onClick={() => setIsMenuOpen((value) => !value)}
          >
            <span className="sr-only">Menu</span>
            <span className="flex w-4 flex-col gap-1">
              <span className="h-0.5 rounded-full bg-current" />
              <span className="h-0.5 rounded-full bg-current" />
              <span className="h-0.5 rounded-full bg-current" />
            </span>
          </button>
        </div>
      </Container>

      {isMenuOpen ? (
        <div
          id="mobile-navigation"
          className="border-t border-border bg-background/95 lg:hidden"
        >
          <Container className="py-4">
            <nav
              aria-label="Mobile navigation"
              className="grid gap-1"
            >
              {links.map((link) => (
                <a
                  key={link.href}
                  href={link.href}
                  className={getLinkClassName(link.href)}
                  onClick={() => handleLinkClick(link.href)}
                >
                  {link.label}
                </a>
              ))}
            </nav>
          </Container>
        </div>
      ) : null}
    </header>
  );
}
