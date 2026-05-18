import { Button } from "../ui/Button";
import { Container } from "../ui/Container";
import { Field } from "../ui/Field";

export function Contact({ contact }) {
  function handleSubmit(event) {
    event.preventDefault();
  }

  return (
    <section id="contact" className="py-20">
      <Container>
        <div className="grid gap-10 lg:grid-cols-[0.8fr_1.2fr] lg:items-start">
          <div>
            <p className="text-sm font-semibold uppercase tracking-[0.18em] text-primary">
              Contact
            </p>
            <h2 className="mt-3 text-3xl font-semibold text-foreground sm:text-4xl">
              {contact.headline}
            </h2>
            <p className="mt-4 text-base leading-8 text-foreground/70">
              {contact.summary}
            </p>

            <div className="mt-8 space-y-3 text-sm">
              {contact.links.map((link) => (
                <a
                  key={link.href}
                  href={link.href}
                  className="block text-foreground/70 transition hover:text-primary"
                >
                  {link.label}
                </a>
              ))}
            </div>
          </div>

          <form
            className="rounded-lg border border-border bg-muted p-6 shadow-soft"
            onSubmit={handleSubmit}
          >
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
