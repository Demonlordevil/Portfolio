export function SkillGroup({ group }) {
  return (
    <article className="rounded-lg border border-border bg-background p-6 shadow-soft">
      <h3 className="text-lg font-semibold text-foreground">
        {group.category}
      </h3>

      <p className="mt-3 text-sm leading-7 text-foreground/70">
        {group.description}
      </p>

      <div className="mt-5 flex flex-wrap gap-2">
        {group.skills.map((skill) => (
          <span
            key={skill}
            className="rounded-md border border-border bg-muted px-3 py-1 text-xs font-medium text-foreground/70"
          >
            {skill}
          </span>
        ))}
      </div>
    </article>
  );
}
