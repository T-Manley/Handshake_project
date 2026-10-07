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
    <main className="flex min-h-dvh items-center justify-center px-4 py-12 sm:py-20">
      <article className="w-full max-w-2xl overflow-hidden rounded-2xl border border-border bg-card shadow-2xl shadow-black/40">
        <div className="h-1.5 bg-primary" aria-hidden="true" />

        <div className="flex flex-col gap-10 p-6 sm:p-10">
          <header className="flex flex-col gap-5 sm:flex-row sm:items-center sm:gap-6">
            <div
              className="flex size-16 shrink-0 items-center justify-center rounded-full bg-accent font-serif text-2xl text-accent-foreground ring-1 ring-primary/30"
              aria-hidden="true"
            >
              TM
            </div>
            <div className="flex flex-col gap-2">
              <h1 className="font-serif text-4xl leading-tight text-foreground text-balance sm:text-5xl">
                Taylor Manley
              </h1>
              <p className="flex items-center gap-2 text-sm text-muted-foreground">
                <GraduationCap className="size-4 shrink-0 text-primary" aria-hidden="true" />
                Computer Engineering Student at Missouri S&amp;T
              </p>
            </div>
          </header>

          <section aria-labelledby="projects-heading" className="flex flex-col gap-4">
            <div className="flex items-center justify-between gap-4">
              <SectionHeading id="projects-heading">Projects</SectionHeading>
              <a
                href="https://github.com/T-Manley/github-portfolio"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-1 text-xs text-primary hover:underline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-ring"
              >
                View full repo
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

          <section aria-labelledby="contact-heading" className="flex flex-col gap-4">
            <SectionHeading id="contact-heading">Get in touch</SectionHeading>
            <ContactLinks />
          </section>
        </div>
      </article>
    </main>
  )
}
