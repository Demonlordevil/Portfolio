const variants = {
  primary:
    "bg-primary text-primary-foreground shadow-[0_16px_42px_rgb(var(--color-primary)/0.16)] hover:opacity-[0.92] focus-visible:outline-primary",
  secondary:
    "border border-border/75 bg-muted/[0.36] text-foreground hover:bg-muted/60 focus-visible:outline-primary",
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
        "inline-flex min-h-11 items-center justify-center rounded-md px-5 py-2.5 text-center text-sm font-medium leading-5 transition focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2",
        variants[variant],
        className,
      ].join(" ")}
      {...props}
    />
  );
}
