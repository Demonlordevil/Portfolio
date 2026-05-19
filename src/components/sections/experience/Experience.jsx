import { Container } from "../../ui/Container";

export function Experience({ items }) {
  return (
    <section
      id="experience"
      className="relative scroll-mt-[5.5rem] overflow-hidden py-[clamp(4.5rem,10vw,9rem)] lg:min-h-[86vh]"
    >
      <div className="absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-border to-transparent" />
      <Container>
        <div className="grid gap-12 xl:grid-cols-[0.7fr_1.5fr] xl:items-start">
          <div>
            <p className="text-sm font-semibold uppercase tracking-[0.18em] text-primary">
              Experience
            </p>
            <h2 className="mt-4 max-w-2xl text-[clamp(2.25rem,4.6vw,3.75rem)] font-semibold leading-tight text-foreground">
              A steady path through interface craft and frontend systems.
            </h2>
          </div>

          <div className="relative">
            <div className="absolute left-3 top-3 hidden h-[calc(100%-1.5rem)] w-px bg-border/[0.66] sm:block" />
            <div className="grid gap-5">
              {items.map((item) => (
                <article
                  key={`${item.period}-${item.role}`}
                  className="relative grid gap-5 rounded-lg border border-border/[0.66] bg-muted/[0.32] p-5 shadow-[0_24px_90px_rgb(var(--color-shadow)/var(--opacity-shadow-card))] backdrop-blur sm:ml-10 sm:p-6 lg:grid-cols-[0.36fr_1fr]"
                >
                  <span className="absolute -left-[2.45rem] top-7 hidden h-3 w-3 rounded-full border border-primary/[0.45] bg-background shadow-[0_0_0_6px_rgb(var(--color-primary)/0.08)] sm:block" />
                  <div>
                    <p className="text-xs font-semibold uppercase tracking-[0.18em] text-primary">
                      {item.period}
                    </p>
                    <p className="mt-3 text-sm leading-6 text-foreground/62">
                      {item.context}
                    </p>
                  </div>
                  <div>
                    <h3 className="text-2xl font-semibold leading-tight text-foreground">
                      {item.role}
                    </h3>
                    <p className="mt-3 max-w-2xl text-sm leading-7 text-foreground/70">
                      {item.description}
                    </p>
                  </div>
                </article>
              ))}
            </div>
          </div>
        </div>
      </Container>
    </section>
  );
}
