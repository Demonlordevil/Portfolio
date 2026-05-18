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
          "mt-2 w-full rounded-md border border-border bg-background px-4 py-3 text-sm text-foreground outline-none transition placeholder:text-foreground/40 focus:border-primary focus:ring-2 focus:ring-primary/20",
          className,
        ].join(" ")}
        {...props}
      />
    </label>
  );
}
