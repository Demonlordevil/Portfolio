const variants = {
  primary:
    "bg-primary text-primary-foreground shadow-soft hover:opacity-90 focus-visible:outline-primary",
  secondary:
    "border border-border bg-background text-foreground hover:bg-muted focus-visible:outline-primary",
};

export function Button({
  as: Component = "button",
  variant = "primary",
  className = "",
  ...props
}) {
  return (
    <Component
      className={[
        "inline-flex h-11 items-center justify-center rounded-md px-5 text-sm font-medium transition focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2",
        variants[variant],
        className,
      ].join(" ")}
      {...props}
    />
  );
}
