import { Container } from "../../ui/Container";

export function Blog({ posts }) {
  return (
    <section
      id="blog"
      className="relative scroll-mt-[5.5rem] overflow-hidden py-[clamp(4.5rem,10vw,9rem)] lg:min-h-[82vh]"
    >
      <div className="absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-border to-transparent" />
      <Container>
        <div className="grid gap-10 xl:grid-cols-[0.68fr_1.52fr] xl:items-start">
          <div className="xl:sticky xl:top-28">
            <p className="text-sm font-semibold uppercase tracking-[0.18em] text-primary">
              Blog
            </p>
            <h2 className="mt-4 max-w-2xl text-[clamp(2.25rem,4.6vw,3.75rem)] font-semibold leading-tight text-foreground">
              Notes on frontend craft, systems, and interface decisions.
            </h2>
            <p className="mt-5 max-w-xl text-base leading-8 text-foreground/70">
              Editorial previews for future writing, shaped to show how I think
              about building useful interfaces.
            </p>
          </div>

          <div className="grid gap-px overflow-hidden rounded-lg border border-border/[0.66] bg-border/[0.66]">
            {posts.map((post, index) => (
              <article
                key={post.title}
                className="grid gap-6 bg-muted/[0.34] p-5 transition hover:bg-muted/[0.46] sm:p-6 lg:grid-cols-[auto_1fr_auto] lg:items-start"
              >
                <p className="text-xs font-semibold uppercase tracking-[0.18em] text-primary">
                  {String(index + 1).padStart(2, "0")}
                </p>
                <div>
                  <div className="flex flex-wrap gap-3 text-xs font-semibold uppercase tracking-[0.14em] text-foreground/54">
                    <span>{post.topic}</span>
                    <span>{post.readTime}</span>
                  </div>
                  <h3 className="mt-4 max-w-3xl text-2xl font-semibold leading-tight text-foreground">
                    {post.title}
                  </h3>
                  <p className="mt-3 max-w-3xl text-sm leading-7 text-foreground/68">
                    {post.excerpt}
                  </p>
                </div>
                <a
                  href="#contact"
                  className="text-sm font-semibold text-primary transition hover:opacity-80 lg:pt-9"
                >
                  Discuss
                </a>
              </article>
            ))}
          </div>
        </div>
      </Container>
    </section>
  );
}
