import { ArrowUpRight, GraduationCap } from 'lucide-react'
import { ContactLinks } from '@/components/contact-links'
import { Involvement } from '@/components/involvement'
import { Projects } from '@/components/projects'

function SectionHeading({ id, children }: { id: string; children: React.ReactNode }) {
  return (
    <h2 id={id} className="text-xs font-medium uppercase tracking-widest text-muted-foreground">
      {children}
    </h2>
  )
}

export default function Page() {
  return (
    <main className="flex min-h-dvh items-center justify-center px-3 py-6 sm:px-4 sm:py-20">
      <article className="w-full max-w-2xl overflow-hidden rounded-2xl border border-border bg-card shadow-2xl shadow-black/40">
        <div className="h-1.5 bg-primary" aria-hidden="true" />

        <div className="flex flex-col gap-8 p-5 sm:gap-10 sm:p-10">
          <header className="flex flex-col items-center gap-4 text-center sm:flex-row sm:items-center sm:gap-6 sm:text-left">
            <div
              className="flex size-14 shrink-0 items-center justify-center rounded-full bg-accent font-serif text-xl text-accent-foreground ring-1 ring-primary/30 sm:size-16 sm:text-2xl"
              aria-hidden="true"
            >
              TM
            </div>
            <div className="flex flex-col items-center gap-2 sm:items-start">
              <h1 className="font-serif text-3xl leading-tight text-foreground text-balance sm:text-5xl">
                Taylor Manley
              </h1>
              <p className="flex items-start gap-2 text-sm leading-snug text-muted-foreground sm:items-center">
                <GraduationCap className="hidden size-4 shrink-0 text-primary sm:block" aria-hidden="true" />
                <span>
                  Computer Engineering
                  <span className="sm:hidden"> &middot; </span>
                  <span className="hidden sm:inline"> Student at </span>
                  <span className="whitespace-nowrap">Missouri S&amp;T</span>
                </span>
              </p>
            </div>
          </header>

          <section aria-labelledby="contact-heading-mobile" className="flex flex-col gap-3 sm:hidden">
            <h2 id="contact-heading-mobile" className="sr-only">
              Get in touch
            </h2>
            <ContactLinks variant="compact" />
          </section>

          <section aria-labelledby="projects-heading" className="flex flex-col gap-4">
            <div className="flex items-center justify-between gap-4">
              <SectionHeading id="projects-heading">Projects</SectionHeading>
              <a
                href="https://github.com/T-Manley/github-portfolio"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-1 text-xs text-primary hover:underline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-ring"
              >
                <span className="hidden sm:inline">View full repo</span>
                <span className="sm:hidden">Full repo</span>
                <ArrowUpRight className="size-3.5" aria-hidden="true" />
                <span className="sr-only">(opens in a new tab)</span>
              </a>
            </div>
            <Projects />
          </section>

          <section aria-labelledby="involvement-heading" className="flex flex-col gap-4">
            <SectionHeading id="involvement-heading">Involved with</SectionHeading>
            <Involvement />
          </section>

          <section aria-labelledby="contact-heading" className="hidden flex-col gap-4 sm:flex">
            <SectionHeading id="contact-heading">Get in touch</SectionHeading>
            <ContactLinks />
          </section>
        </div>
      </article>
    </main>
  )
}
