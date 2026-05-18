import { Container } from "../../ui/Container";
import { SkillGroup } from "./SkillGroup";

export function Skills({ skillGroups }) {
  return (
    <section id="skills" className="border-b border-border py-20">
      <Container>
        <div className="grid gap-10 lg:grid-cols-[0.8fr_1.2fr] lg:items-start">
          <div>
            <p className="text-sm font-semibold uppercase tracking-[0.18em] text-primary">
              Skills
            </p>
            <h2 className="mt-3 text-3xl font-semibold text-foreground sm:text-4xl">
              Focused tools, grouped by how they are used.
            </h2>
            <p className="mt-4 text-base leading-8 text-foreground/70">
              Grouped skills make the content easier to scan today and easier
              to expand later as the portfolio grows.
            </p>
          </div>

          <div className="grid gap-6 md:grid-cols-2">
            {skillGroups.map((group) => (
              <SkillGroup key={group.category} group={group} />
            ))}
          </div>
        </div>
      </Container>
    </section>
  );
}
