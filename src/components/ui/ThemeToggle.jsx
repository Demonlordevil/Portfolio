import { Button } from "./Button";

export function ThemeToggle({ currentLabel, nextLabel, onToggle }) {
  return (
    <Button
      type="button"
      variant="secondary"
      className="h-10 gap-2 bg-muted/70 px-3 text-xs"
      aria-label={`Switch to ${nextLabel} theme`}
      title={`Switch to ${nextLabel} theme`}
      onClick={onToggle}
    >
      <span className="h-2 w-2 rounded-full bg-primary" aria-hidden="true" />
      <span>{currentLabel}</span>
    </Button>
  );
}
