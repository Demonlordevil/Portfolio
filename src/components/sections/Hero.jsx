import { Button } from "../ui/Button";
import { Container } from "../ui/Container";

export function Hero({ profile }) {
  return (
    <section className="border-b border-border">
      <Container className="grid  items-center gap-12 py-20 lg:grid-cols-2">
        <div className="max-w-3xl">
          <p className="mb-4 text-sm font-semibold uppercase tracking-[0.18em] text-primary">
            {profile.eyebrow}
          </p>

          <h1 className="text-4xl font-semibold leading-tight text-foreground sm:text-5xl lg:text-6xl">
            {profile.headline}
          </h1>

          <p className="mt-6 max-w-2xl text-base leading-8 text-foreground/70 sm:text-lg">
            {profile.summary}
          </p>

          <div className="mt-8 flex flex-col gap-3 sm:flex-row">
            <Button as="a" href={profile.primaryAction.href}>
              {profile.primaryAction.label}
            </Button>
            <Button
              as="a"
              href={profile.secondaryAction.href}
              variant="secondary"
            >
              {profile.secondaryAction.label}
            </Button>
          </div>
        </div>

        <div className="rounded-lg border border-border bg-muted p-6">
          <p className="text-base font-medium text-foreground/70">Current focus</p>
          <div className="mt-5 space-y-4">
            {["Reusable sections", "Theme-ready styling", "Template-friendly structure"].map(
              (item) => (
                <div
                  key={item}
                  className="rounded-md border border-border bg-background p-4 text-sm font-medium"
                >
                  {item}
                </div>
              ),
            )}
          </div>
        </div>
      </Container>
    </section>
  );
}
