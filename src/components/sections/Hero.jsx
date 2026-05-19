import { Button } from "../ui/Button";
import { Container } from "../ui/Container";

export function Hero({ profile }) {
  return (
    <section className="relative isolate overflow-hidden text-hero-foreground">
      <div className="absolute inset-x-0 bottom-0 -z-10 h-px bg-gradient-to-r from-transparent via-hero-border to-transparent" />

      <Container className="grid min-h-[calc(100svh-4rem)] max-w-[106rem] items-center gap-10 py-[clamp(3rem,8vw,6rem)] sm:min-h-[calc(100svh-4.5rem)] lg:gap-14 xl:grid-cols-[minmax(0,0.92fr)_minmax(30rem,1.04fr)] xl:gap-[clamp(2.25rem,3.8vw,5rem)] xl:px-10 2xl:grid-cols-[minmax(0,0.88fr)_minmax(36rem,1.12fr)] 2xl:px-12">
        <div className="relative max-w-5xl xl:max-w-[51rem] 2xl:max-w-[54rem]">
          <div className="mb-6 inline-flex max-w-full items-center gap-3 rounded-full border border-hero-border/[0.62] bg-hero-surface/[0.34] px-4 py-2 text-[0.68rem] font-semibold uppercase tracking-[0.16em] text-hero-muted shadow-[inset_0_1px_0_rgb(255_255_255/0.035)] backdrop-blur sm:mb-7 sm:text-xs sm:tracking-[0.18em]">
            <span className="h-2 w-2 rounded-full bg-hero-accent" />
            {profile.eyebrow}
          </div>

          <h1 className="max-w-6xl text-[clamp(3rem,8.4vw,7.1rem)] font-semibold leading-[0.95] text-hero-foreground">
            {profile.headline}
          </h1>

          <p className="mt-6 max-w-2xl text-base leading-8 text-hero-muted sm:mt-8 sm:text-lg xl:max-w-xl 2xl:max-w-2xl">
            {profile.summary}
          </p>

          <div className="mt-8 flex flex-col gap-3 sm:mt-9 sm:flex-row">
            <Button
              as="a"
              href={profile.primaryAction.href}
              className="bg-hero-accent text-hero-background shadow-[0_18px_48px_rgb(var(--color-hero-accent)/0.18)] hover:opacity-95"
            >
              {profile.primaryAction.label}
            </Button>
            <Button
              as="a"
              href={profile.secondaryAction.href}
              variant="secondary"
              className="border-hero-border/[0.65] bg-hero-surface/[0.34] text-hero-foreground hover:bg-hero-surface/[0.62]"
            >
              {profile.secondaryAction.label}
            </Button>
          </div>

          <div className="mt-10 grid max-w-3xl gap-5 border-t border-hero-border/70 pt-6 sm:mt-14 sm:grid-cols-3 sm:pt-7 xl:max-w-[40rem] 2xl:max-w-3xl">
            {profile.highlights.map((highlight) => (
              <div key={highlight.label}>
                <p className="text-sm font-semibold uppercase tracking-[0.14em] text-hero-foreground">
                  {highlight.value}
                </p>
                <p className="mt-1 text-sm leading-6 text-hero-muted">
                  {highlight.label}
                </p>
              </div>
            ))}
          </div>
        </div>

        <div className="relative mx-auto w-full max-w-3xl md:max-w-none xl:translate-y-8 2xl:translate-y-10">
          <div className="absolute -inset-10 -z-10 rounded-[2rem] bg-hero-accent/10 blur-3xl xl:-inset-14 xl:bg-hero-accent/[0.13] 2xl:-inset-16" />

          <div className="relative overflow-hidden rounded-lg border border-hero-border/[0.65] bg-hero-surface/[0.56] p-4 shadow-[0_34px_120px_rgb(var(--color-shadow)/var(--opacity-shadow-panel))] backdrop-blur-xl sm:p-5 xl:p-6 2xl:p-7">
            <div className="absolute inset-x-8 top-0 h-px bg-gradient-to-r from-transparent via-hero-accent/[0.55] to-transparent" />
            <div className="flex items-center justify-between border-b border-hero-border/[0.65] pb-4">
              <div className="flex items-center gap-2">
                <span className="h-2.5 w-2.5 rounded-full bg-hero-accent" />
                <span className="h-2.5 w-2.5 rounded-full bg-hero-muted/50" />
                <span className="h-2.5 w-2.5 rounded-full bg-hero-muted/30" />
              </div>
              <p className="text-xs font-semibold uppercase tracking-[0.18em] text-hero-muted">
                Portfolio OS
              </p>
            </div>

            <div className="grid gap-5 py-6 md:grid-cols-[0.78fr_1.22fr] xl:grid-cols-[0.72fr_1.28fr] 2xl:grid-cols-[0.74fr_1.26fr]">
              <div className="rounded-lg border border-hero-border/[0.62] bg-hero-background/[0.48] p-5 shadow-[inset_0_1px_0_rgb(255_255_255/0.025)] xl:p-6">
                <p className="text-xs font-semibold uppercase tracking-[0.18em] text-hero-muted">
                  Current Focus
                </p>
                <p className="mt-4 text-2xl font-semibold leading-tight text-hero-foreground">
                  Systems that feel personal, polished, and easy to evolve.
                </p>
              </div>

              <div className="space-y-3">
                {profile.focusAreas.map((item, index) => (
                  <div
                    key={item}
                    className="grid grid-cols-[auto_1fr] items-center gap-4 border-b border-hero-border/[0.52] pb-3 last:border-b-0 last:pb-0"
                  >
                    <span className="text-xs font-semibold text-hero-accent">
                      {String(index + 1).padStart(2, "0")}
                    </span>
                    <p className="text-sm font-medium leading-6 text-hero-foreground">
                      {item}
                    </p>
                  </div>
                ))}
              </div>
            </div>

            <div className="grid gap-3 border-t border-hero-border/[0.65] pt-5 sm:grid-cols-3">
              {["Config", "Sections", "Templates"].map((item) => (
                <div
                  key={item}
                  className="rounded-md border border-hero-border/[0.58] bg-hero-background/[0.42] p-4"
                >
                  <p className="text-xs font-semibold uppercase tracking-[0.14em] text-hero-muted">
                    {item}
                  </p>
                  <div className="mt-4 h-1.5 rounded-full bg-hero-border">
                    <div className="h-full w-2/3 rounded-full bg-hero-accent" />
                  </div>
                </div>
              ))}
            </div>

            <div className="mt-5 border-t border-hero-border/[0.65] pt-5">
              <p className="text-xs font-semibold uppercase tracking-[0.18em] text-hero-muted">
                Architecture
              </p>
              <p className="mt-3 max-w-xl text-sm leading-7 text-hero-muted">
                Configured content, reusable sections, semantic themes, and
                template-level composition stay independent, so the portfolio
                can grow without becoming fragile.
              </p>
            </div>
          </div>
        </div>
      </Container>
    </section>
  );
}
