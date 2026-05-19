import { Container } from "../ui/Container";

export function About({ about }) {
  return (
    <section
      id="about"
      className="relative scroll-mt-[5.5rem] overflow-hidden py-[clamp(4.5rem,10vw,9rem)] lg:min-h-[72vh]"
    >
      <div className="absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-border to-transparent" />
      <Container>
        <div className="grid gap-10 lg:gap-14 xl:grid-cols-[0.82fr_1.35fr] xl:items-start 2xl:grid-cols-[0.76fr_1.44fr]">
          <div className="xl:sticky xl:top-28">
            <p className="text-sm font-semibold uppercase tracking-[0.18em] text-primary">
              About
            </p>
            <h2 className="mt-4 max-w-2xl text-[clamp(2.25rem,4.6vw,3.75rem)] font-semibold leading-tight text-foreground">
              {about.headline}
            </h2>
          </div>

          <div>
            <div className="max-w-4xl space-y-5 text-base leading-8 text-foreground/72 sm:space-y-6 sm:text-lg sm:leading-9">
              {about.body.map((paragraph) => (
                <p key={paragraph}>{paragraph}</p>
              ))}
            </div>

            <div className="mt-10 grid gap-px overflow-hidden rounded-lg border border-border/[0.66] bg-border/[0.66] sm:grid-cols-3 lg:mt-12">
              {about.highlights.map((highlight) => (
                <div
                  key={highlight.label}
                  className="bg-muted/[0.36] p-5 backdrop-blur sm:p-6"
                >
                  <p className="text-[clamp(1.65rem,3.5vw,2.25rem)] font-semibold text-foreground">
                    {highlight.value}
                  </p>
                  <p className="mt-2 text-sm leading-6 text-foreground/62">
                    {highlight.label}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </Container>
    </section>
  );
}
