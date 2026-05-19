import { Container } from "../../ui/Container";
import { SkillGroup } from "./SkillGroup";

export function Skills({ skillGroups }) {
  return (
    <section
      id="skills"
      className="relative scroll-mt-[5.5rem] overflow-hidden py-[clamp(4.5rem,10vw,9rem)] lg:min-h-[78vh]"
    >
      <div className="absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-border to-transparent" />
      <Container>
        <div className="grid gap-10 lg:gap-12 xl:grid-cols-[0.72fr_1.4fr] xl:items-start 2xl:grid-cols-[0.66fr_1.5fr]">
          <div>
            <p className="text-sm font-semibold uppercase tracking-[0.18em] text-primary">
              Skills
            </p>
            <h2 className="mt-4 max-w-2xl text-[clamp(2.25rem,4.6vw,3.75rem)] font-semibold leading-tight text-foreground">
              Focused tools, grouped by how they are used.
            </h2>
            <p className="mt-4 max-w-2xl text-base leading-8 text-foreground/70">
              Grouped skills make the content easier to scan today and easier
              to expand later as the portfolio grows.
            </p>
          </div>

          <div className="grid gap-px overflow-hidden rounded-lg border border-border/[0.66] bg-border/[0.66] sm:grid-cols-2">
            {skillGroups.map((group) => (
              <SkillGroup key={group.category} group={group} />
            ))}
          </div>
        </div>
      </Container>
    </section>
  );
}
