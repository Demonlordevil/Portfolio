import { Container } from "../../ui/Container";
import { ProjectCard } from "./ProjectCard";

export function Projects({ projects }) {
  return (
    <section
      id="projects"
      className="relative scroll-mt-[5.5rem] overflow-hidden py-[clamp(4.5rem,10vw,9rem)] lg:min-h-screen"
    >
      <div className="absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-border to-transparent" />
      <Container>
        <div className="grid gap-8 lg:grid-cols-[0.78fr_1.42fr] lg:items-end lg:gap-12 2xl:grid-cols-[0.72fr_1.5fr]">
          <div>
            <p className="text-sm font-semibold uppercase tracking-[0.18em] text-primary">
              Projects
            </p>
            <h2 className="mt-4 max-w-2xl text-[clamp(2.25rem,4.6vw,3.75rem)] font-semibold leading-tight text-foreground">
              Selected work with room to grow.
            </h2>
          </div>
          <p className="max-w-4xl text-base leading-8 text-foreground/70 lg:mt-4">
            Project content lives outside the UI, so cards can stay reusable
            while the portfolio remains easy to customize.
          </p>
        </div>

        <div className="mt-10 grid gap-4 sm:grid-cols-2 lg:mt-14 lg:grid-cols-12 lg:gap-5 2xl:gap-6">
          {projects.map((project, index) => (
            <ProjectCard key={project.title} project={project} index={index} />
          ))}
        </div>
      </Container>
    </section>
  );
}
