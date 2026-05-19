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
      "relative whitespace-nowrap rounded-md px-2.5 py-2 text-[0.68rem] font-semibold uppercase tracking-[0.11em] transition focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-primary 2xl:px-3",
      isActive
        ? "bg-primary/[0.12] text-primary shadow-[inset_0_0_0_1px_rgb(var(--color-primary)/0.12)]"
        : "text-foreground/[0.56] hover:bg-muted/[0.62] hover:text-foreground",
    ].join(" ");
  }

  function handleLinkClick(href) {
    setActiveHref(href);
    setIsMenuOpen(false);
  }

  return (
    <header className="fixed inset-x-0 top-0 z-50 border-b border-border/[0.45] bg-background/[0.78] shadow-[0_1px_0_rgb(255_255_255/0.025)] backdrop-blur-2xl supports-[backdrop-filter]:bg-background/[0.68]">
      <Container className="flex min-h-16 items-center gap-3 sm:min-h-[4.5rem] lg:gap-5">
        <div className="flex min-w-0 flex-1 items-center">
          <a
            href="#"
            className="group flex min-w-0 items-center gap-3 rounded-md py-2 pr-3 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-primary"
            onClick={() => setIsMenuOpen(false)}
          >
            <span className="flex h-10 w-10 shrink-0 items-center justify-center rounded-lg border border-primary/[0.22] bg-primary/[0.09] text-sm font-semibold text-primary shadow-[0_0_28px_rgb(var(--color-primary)/0.14)] transition group-hover:border-primary/40">
              {brand.slice(0, 1)}
            </span>
            <span className="hidden min-w-0 flex-col sm:flex">
              <span className="text-sm font-semibold leading-5 text-foreground">
                {brand}
              </span>
              <span className="text-xs font-medium leading-5 text-foreground/45">
                Developer Portfolio
              </span>
            </span>
          </a>
        </div>

        <nav
          aria-label="Primary navigation"
          className="hidden shrink-0 items-center justify-end gap-0.5 rounded-lg border border-border/[0.45] bg-muted/[0.24] p-1 xl:flex 2xl:gap-1"
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

        <div className="hidden shrink-0 items-center justify-end xl:flex">
          <ThemeToggle
            currentTheme={theme.theme}
            nextLabel={theme.nextLabel}
            onToggle={theme.toggleTheme}
          />
        </div>

        <div className="flex flex-1 items-center justify-end gap-3 xl:hidden">
          <ThemeToggle
            currentTheme={theme.theme}
            nextLabel={theme.nextLabel}
            onToggle={theme.toggleTheme}
          />

          <button
            type="button"
            className="inline-flex h-10 w-10 items-center justify-center rounded-full border border-border/[0.58] bg-muted/[0.38] text-foreground/[0.72] transition hover:border-primary/[0.38] hover:bg-muted/[0.58] hover:text-primary focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-primary"
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
          className="border-t border-border/[0.45] bg-background/95 xl:hidden"
        >
          <Container className="py-4">
            <nav aria-label="Mobile navigation" className="grid gap-1">
              {links.map((link) => (
                <a
                  key={link.href}
                  href={link.href}
                  className={[
                    getLinkClassName(link.href),
                    "px-3 py-3 text-xs",
                  ].join(" ")}
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
