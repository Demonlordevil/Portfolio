import { Button } from "../ui/Button";
import { Container } from "../ui/Container";
import { Field } from "../ui/Field";

export function Contact({ contact }) {
  function handleSubmit(event) {
    event.preventDefault();
  }

  return (
    <section
      id="contact"
      className="relative scroll-mt-[5.5rem] overflow-hidden py-[clamp(4.5rem,10vw,9rem)] lg:min-h-[82vh]"
    >
      <div className="absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-border to-transparent" />
      <Container>
        <div className="grid gap-10 lg:grid-cols-[0.82fr_1.18fr] lg:items-start lg:gap-12 2xl:grid-cols-[0.76fr_1.24fr]">
          <div>
            <p className="text-sm font-semibold uppercase tracking-[0.18em] text-primary">
              Contact
            </p>
            <h2 className="mt-4 max-w-2xl text-[clamp(2.25rem,4.6vw,3.75rem)] font-semibold leading-tight text-foreground">
              {contact.headline}
            </h2>
            <p className="mt-5 max-w-xl text-base leading-8 text-foreground/70">
              {contact.summary}
            </p>

            <div className="mt-10 grid gap-px overflow-hidden rounded-lg border border-border/[0.66] bg-border/[0.66] text-sm sm:max-w-md">
              {contact.links.map((link) => (
                <a
                  key={link.href}
                  href={link.href}
                  className="block bg-muted/[0.34] px-5 py-4 text-foreground/70 transition hover:bg-muted/[0.48] hover:text-primary"
                >
                  {link.label}
                </a>
              ))}
            </div>
          </div>

          <form
            className="relative overflow-hidden rounded-lg border border-border/[0.68] bg-muted/[0.36] p-5 shadow-[0_28px_100px_rgb(var(--color-shadow)/var(--opacity-shadow-card))] backdrop-blur sm:p-6"
            onSubmit={handleSubmit}
          >
            <div className="absolute inset-x-8 top-0 h-px bg-gradient-to-r from-transparent via-primary/[0.54] to-transparent" />
            <div className="grid gap-5 sm:grid-cols-2">
              <Field
                id="name"
                label="Name"
                name="name"
                placeholder="Your name"
                type="text"
              />
              <Field
                id="email"
                label="Email"
                name="email"
                placeholder="you@example.com"
                type="email"
              />
            </div>

            <div className="mt-5">
              <Field
                id="message"
                label="Message"
                name="message"
                as="textarea"
                className="min-h-36 resize-y"
                placeholder="Tell me about your project"
              />
            </div>

            <div className="mt-6 flex flex-col gap-3 sm:flex-row sm:items-center">
              <Button type="submit">Send Message</Button>
              <p className="text-sm text-foreground/60">
                Frontend-only for now. No message will be sent yet.
              </p>
            </div>
          </form>
        </div>
      </Container>
    </section>
  );
}
