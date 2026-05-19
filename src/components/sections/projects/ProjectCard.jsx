export function ProjectCard({ project, index = 0 }) {
  const layoutClassName =
    index === 0
      ? "sm:col-span-2 lg:col-span-7 lg:min-h-[clamp(22rem,32vw,29rem)]"
      : index === 1
        ? "lg:col-span-5 lg:min-h-[clamp(22rem,32vw,29rem)]"
        : "lg:col-span-4";

  return (
    <article
      className={[
        "group relative flex h-full min-h-64 flex-col overflow-hidden rounded-lg border border-border/[0.68] bg-muted/[0.34] p-5 shadow-[0_24px_90px_rgb(var(--color-shadow)/var(--opacity-shadow-card))] backdrop-blur transition hover:-translate-y-1 hover:border-primary/[0.38] hover:bg-muted/[0.42] sm:min-h-72 sm:p-6 2xl:p-7",
        layoutClassName,
      ].join(" ")}
    >
      <div className="absolute inset-x-6 top-0 h-px bg-gradient-to-r from-transparent via-primary/[0.52] to-transparent opacity-0 transition group-hover:opacity-100" />
      <div className="flex-1">
        <p className="mb-5 text-xs font-semibold uppercase tracking-[0.18em] text-primary/80">
          {String(index + 1).padStart(2, "0")}
        </p>
        <h3 className="text-[clamp(1.35rem,2.2vw,2rem)] font-semibold leading-tight text-foreground">
          {project.title}
        </h3>

        <p className="mt-4 max-w-xl text-sm leading-7 text-foreground/68">
          {project.description}
        </p>

        <div className="mt-7 flex flex-wrap gap-2">
          {project.tech.map((item) => (
            <span
              key={item}
              className="rounded-md border border-border/[0.62] bg-background/[0.42] px-3 py-1 text-xs font-medium text-foreground/68"
            >
              {item}
            </span>
          ))}
        </div>
      </div>

      <div className="mt-8 flex gap-4 text-sm font-medium">
        <a
          href={project.links.live}
          className="text-primary transition hover:opacity-80"
        >
          Live
        </a>
        <a
          href={project.links.source}
          className="text-foreground/70 transition hover:text-foreground"
        >
          Source
        </a>
      </div>
    </article>
  );
}
