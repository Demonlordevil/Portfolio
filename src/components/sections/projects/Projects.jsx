import { Container } from "../../ui/Container";
import { ProjectCard } from "./ProjectCard";

export function Projects({ projects }) {
  return (
    <section id="projects" className="border-b border-border bg-muted/40 py-20">
      <Container>
        <div className="max-w-2xl">
          <p className="text-sm font-semibold uppercase tracking-[0.18em] text-primary">
            Projects
          </p>
          <h2 className="mt-3 text-3xl font-semibold text-foreground sm:text-4xl">
            Selected work with room to grow.
          </h2>
          <p className="mt-4 text-base leading-8 text-foreground/70">
            Project content lives outside the UI, so cards can stay reusable
            while the portfolio remains easy to customize.
          </p>
        </div>

        <div className="mt-10 grid gap-6 md:grid-cols-2 lg:grid-cols-3">
          {projects.map((project) => (
            <ProjectCard key={project.title} project={project} />
          ))}
        </div>
      </Container>
    </section>
  );
}
