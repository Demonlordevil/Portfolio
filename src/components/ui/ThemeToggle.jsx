import { Button } from "./Button";

export function ThemeToggle({ currentLabel, nextLabel, onToggle }) {
  return (
    <Button
      type="button"
      variant="secondary"
      className="h-9 px-3"
      aria-label={`Switch to ${nextLabel} theme`}
      title={`Switch to ${nextLabel} theme`}
      onClick={onToggle}
    >
      {currentLabel}
    </Button>
  );
}
