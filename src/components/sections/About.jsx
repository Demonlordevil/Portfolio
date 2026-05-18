import { Container } from "../ui/Container";

export function About({ about }) {
  return (
    <section id="about" className="border-b border-border py-20">
      <Container>
        <div className="grid gap-10 lg:grid-cols-[0.8fr_1.2fr] lg:items-start">
          <div>
            <p className="text-sm font-semibold uppercase tracking-[0.18em] text-primary">
              About
            </p>
            <h2 className="mt-3 text-3xl font-semibold text-foreground sm:text-4xl">
              {about.headline}
            </h2>
          </div>

          <div className="space-y-6 text-base leading-8 text-foreground/70">
            {about.body.map((paragraph) => (
              <p key={paragraph}>{paragraph}</p>
            ))}

            <div className="grid gap-4 pt-2 sm:grid-cols-3">
              {about.highlights.map((highlight) => (
                <div
                  key={highlight.label}
                  className="rounded-lg border border-border bg-muted p-4"
                >
                  <p className="text-2xl font-semibold text-foreground">
                    {highlight.value}
                  </p>
                  <p className="mt-1 text-sm text-foreground/70">
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
