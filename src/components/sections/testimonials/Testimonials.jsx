import { useState } from "react";
import { Container } from "../../ui/Container";
import { Button } from "../../ui/Button";

function MailField({ id, label, className = "", ...props }) {
  return (
    <label
      htmlFor={id}
      className={[
        "grid gap-2 border-b border-border/[0.54] px-4 py-4 sm:grid-cols-[7rem_1fr] sm:items-center sm:px-5",
        className,
      ].join(" ")}
    >
      <span className="text-xs font-semibold uppercase tracking-[0.16em] text-foreground/48">
        {label}
      </span>
      <input
        id={id}
        className="w-full bg-transparent text-base text-foreground outline-none transition placeholder:text-foreground/[0.34] focus:text-foreground sm:text-sm"
        {...props}
      />
    </label>
  );
}

export function Testimonials({ testimonials }) {
  const [isSent, setIsSent] = useState(false);

  function handleSubmit(event) {
    event.preventDefault();
    setIsSent(true);
  }

  return (
    <section
      id="testimonials"
      className="relative scroll-mt-[5.5rem] overflow-hidden py-[clamp(4.5rem,10vw,9rem)] lg:min-h-[88vh]"
    >
      <div className="absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-border to-transparent" />
      <Container>
        <div className="grid gap-12 lg:grid-cols-[0.88fr_1.12fr] lg:items-start 2xl:grid-cols-[0.8fr_1.2fr]">
          <div className="lg:sticky lg:top-28">
            <p className="text-sm font-semibold uppercase tracking-[0.18em] text-primary">
              Testimonials
            </p>
            <h2 className="mt-4 max-w-2xl text-[clamp(2.25rem,4.6vw,3.75rem)] font-semibold leading-tight text-foreground">
              {testimonials.headline}
            </h2>
            <p className="mt-5 max-w-2xl text-base leading-8 text-foreground/70">
              {testimonials.summary}
            </p>

            <div className="mt-10 rounded-lg border border-border/[0.62] bg-muted/[0.28] p-5 backdrop-blur sm:p-6">
              <p className="text-sm font-semibold uppercase tracking-[0.16em] text-primary">
                What helps
              </p>
              <p className="mt-4 text-base leading-8 text-foreground/72">
                {testimonials.philosophy}
              </p>
              <div className="mt-6 grid gap-px overflow-hidden rounded-md border border-border/[0.58] bg-border/[0.58]">
                {testimonials.prompts.map((prompt) => (
                  <p
                    key={prompt}
                    className="bg-background/[0.42] px-4 py-3 text-sm leading-6 text-foreground/68"
                  >
                    {prompt}
                  </p>
                ))}
              </div>
            </div>
          </div>

          <form
            className="relative overflow-hidden rounded-lg border border-border/[0.68] bg-muted/[0.34] shadow-[0_28px_100px_rgb(var(--color-shadow)/var(--opacity-shadow-card))] backdrop-blur"
            onSubmit={handleSubmit}
          >
            <div className="absolute inset-x-8 top-0 h-px bg-gradient-to-r from-transparent via-primary/[0.54] to-transparent" />
            <div className="flex items-center justify-between border-b border-border/[0.58] px-4 py-4 sm:px-5">
              <div className="flex items-center gap-2">
                <span className="h-2.5 w-2.5 rounded-full bg-primary" />
                <span className="h-2.5 w-2.5 rounded-full bg-foreground/20" />
                <span className="h-2.5 w-2.5 rounded-full bg-foreground/12" />
              </div>
              <p className="text-xs font-semibold uppercase tracking-[0.18em] text-foreground/48">
                Compose note
              </p>
            </div>

            <div className="border-b border-border/[0.54] px-4 py-4 sm:grid sm:grid-cols-[7rem_1fr] sm:items-center sm:px-5">
              <p className="text-xs font-semibold uppercase tracking-[0.16em] text-foreground/48">
                To
              </p>
              <p className="mt-2 text-sm font-medium text-foreground sm:mt-0">
                Aditya / Portfolio feedback
              </p>
            </div>

            <div className="grid sm:grid-cols-2">
              <MailField
                id="testimonial-name"
                label="From"
                name="name"
                placeholder="Your name"
                type="text"
              />
              <MailField
                id="testimonial-role"
                label="Context"
                name="role"
                placeholder="Designer, founder, teammate..."
                type="text"
                className="sm:border-l sm:border-l-border/[0.54]"
              />
            </div>

            <MailField
              id="testimonial-subject"
              label="Subject"
              name="subject"
              placeholder="A note about working together"
              type="text"
            />

            <label htmlFor="testimonial-message" className="block px-4 py-5 sm:px-5">
              <span className="sr-only">Testimonial message</span>
              <textarea
                id="testimonial-message"
                name="message"
                className="min-h-56 w-full resize-y bg-transparent text-base leading-8 text-foreground outline-none transition placeholder:text-foreground/[0.34] focus:text-foreground"
                placeholder="Write a thoughtful note about the collaboration, review, or project experience. What felt clear? What helped? What should I keep improving?"
              />
            </label>

            <div className="flex flex-col gap-4 border-t border-border/[0.58] bg-background/[0.28] px-4 py-4 sm:flex-row sm:items-center sm:justify-between sm:px-5">
              <div aria-live="polite" className="min-h-6">
                {isSent ? (
                  <p className="text-sm font-medium text-primary">
                    Message prepared locally. Backend delivery can be connected next.
                  </p>
                ) : (
                  <p className="text-sm leading-6 text-foreground/58">
                    Frontend-only for now. This creates the interaction without
                    storing a testimonial yet.
                  </p>
                )}
              </div>
              <Button type="submit" className="shrink-0">
                {isSent ? "Prepared" : "Send Note"}
              </Button>
            </div>
          </form>
        </div>
      </Container>
    </section>
  );
}
