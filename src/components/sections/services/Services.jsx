import { Container } from "../../ui/Container";

export function Services({ services }) {
  return (
    <section
      id="services"
      className="relative scroll-mt-[5.5rem] overflow-hidden py-[clamp(4.5rem,10vw,9rem)] lg:min-h-[82vh]"
    >
      <div className="absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-border to-transparent" />
      <Container>
        <div className="grid gap-10 xl:grid-cols-[0.78fr_1.42fr] xl:items-start 2xl:grid-cols-[0.72fr_1.5fr]">
          <div className="xl:sticky xl:top-28">
            <p className="text-sm font-semibold uppercase tracking-[0.18em] text-primary">
              Services
            </p>
            <h2 className="mt-4 max-w-2xl text-[clamp(2.25rem,4.6vw,3.75rem)] font-semibold leading-tight text-foreground">
              Practical capability, shaped around clear product outcomes.
            </h2>
            <p className="mt-5 max-w-xl text-base leading-8 text-foreground/70">
              I focus on the parts of frontend work that make an interface feel
              understandable, polished, and easy to keep improving.
            </p>
          </div>

          <div className="grid gap-px overflow-hidden rounded-lg border border-border/[0.66] bg-border/[0.66]">
            {services.map((service, index) => (
              <article
                key={service.title}
                className="grid gap-6 bg-muted/[0.34] p-5 backdrop-blur transition hover:bg-muted/[0.46] sm:p-6 lg:grid-cols-[auto_1fr_auto] lg:items-start"
              >
                <p className="text-xs font-semibold uppercase tracking-[0.18em] text-primary">
                  {String(index + 1).padStart(2, "0")}
                </p>
                <div>
                  <h3 className="text-2xl font-semibold leading-tight text-foreground">
                    {service.title}
                  </h3>
                  <p className="mt-3 max-w-2xl text-sm leading-7 text-foreground/68">
                    {service.description}
                  </p>
                </div>
                <p className="max-w-44 text-sm font-medium leading-6 text-foreground/72 lg:text-right">
                  {service.outcome}
                </p>
              </article>
            ))}
          </div>
        </div>
      </Container>
    </section>
  );
}
