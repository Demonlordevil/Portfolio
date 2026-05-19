export function Field({
  id,
  label,
  as: Component = "input",
  className = "",
  ...props
}) {
  return (
    <label htmlFor={id} className="block">
      <span className="text-sm font-medium text-foreground">{label}</span>
      <Component
        id={id}
        className={[
          "mt-2 w-full rounded-md border border-border/75 bg-background/[0.58] px-4 py-3 text-base text-foreground outline-none transition placeholder:text-foreground/[0.36] focus:border-primary/70 focus:ring-2 focus:ring-primary/[0.18] sm:text-sm",
          className,
        ].join(" ")}
        {...props}
      />
    </label>
  );
}
