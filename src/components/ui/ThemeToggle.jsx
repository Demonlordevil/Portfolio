function MoonIcon() {
  return (
    <svg
      aria-hidden="true"
      className="h-4 w-4"
      fill="none"
      viewBox="0 0 24 24"
      stroke="currentColor"
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth="1.8"
    >
      <path d="M20.2 14.4A8 8 0 0 1 9.6 3.8 8.5 8.5 0 1 0 20.2 14.4Z" />
    </svg>
  );
}

function SunIcon() {
  return (
    <svg
      aria-hidden="true"
      className="h-4 w-4"
      fill="none"
      viewBox="0 0 24 24"
      stroke="currentColor"
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth="1.8"
    >
      <circle cx="12" cy="12" r="4" />
      <path d="M12 2.75v2.1M12 19.15v2.1M4.85 4.85l1.5 1.5M17.65 17.65l1.5 1.5M2.75 12h2.1M19.15 12h2.1M4.85 19.15l1.5-1.5M17.65 6.35l1.5-1.5" />
    </svg>
  );
}

export function ThemeToggle({ currentTheme, nextLabel, onToggle }) {
  const isDark = currentTheme === "dark";

  return (
    <button
      type="button"
      className="inline-flex h-10 w-10 items-center justify-center rounded-full border border-border/[0.58] bg-muted/[0.38] text-foreground/[0.72] shadow-[inset_0_1px_0_rgb(255_255_255/0.04)] transition hover:border-primary/[0.38] hover:bg-muted/[0.58] hover:text-primary focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-primary"
      aria-label={`Switch to ${nextLabel} theme`}
      title={`Switch to ${nextLabel} theme`}
      onClick={onToggle}
    >
      {isDark ? <MoonIcon /> : <SunIcon />}
    </button>
  );
}
