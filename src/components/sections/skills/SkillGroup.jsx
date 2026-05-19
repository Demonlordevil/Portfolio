export function SkillGroup({ group }) {
  return (
    <article className="bg-muted/[0.34] p-5 backdrop-blur transition hover:bg-muted/[0.48] sm:p-6">
      <h3 className="text-[clamp(1.15rem,2vw,1.4rem)] font-semibold text-foreground">
        {group.category}
      </h3>

      <p className="mt-3 text-sm leading-7 text-foreground/70">
        {group.description}
      </p>

      <div className="mt-5 flex flex-wrap gap-2">
        {group.skills.map((skill) => (
          <span
            key={skill}
            className="rounded-md border border-border/[0.62] bg-background/[0.42] px-3 py-1 text-xs font-medium text-foreground/70"
          >
            {skill}
          </span>
        ))}
      </div>
    </article>
  );
}
