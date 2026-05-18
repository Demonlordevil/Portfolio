export function ProjectCard({ project }) {
  return (
    <article className="flex h-full flex-col rounded-lg border border-border bg-background p-6 shadow-soft">
      <div className="flex-1">
        <h3 className="text-lg font-semibold text-foreground">
          {project.title}
        </h3>

        <p className="mt-3 text-sm leading-7 text-foreground/70">
          {project.description}
        </p>

        <div className="mt-5 flex flex-wrap gap-2">
          {project.tech.map((item) => (
            <span
              key={item}
              className="rounded-md border border-border bg-muted px-3 py-1 text-xs font-medium text-foreground/70"
            >
              {item}
            </span>
          ))}
        </div>
      </div>

      <div className="mt-6 flex gap-4 text-sm font-medium">
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
