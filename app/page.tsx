import { GraduationCap } from 'lucide-react'
import { ContactLinks } from '@/components/contact-links'
import { Involvement } from '@/components/involvement'

export default function Page() {
  return (
    <main className="flex min-h-dvh items-center justify-center px-4 py-12 sm:py-20">
      <article className="w-full max-w-md overflow-hidden rounded-2xl border border-border bg-card shadow-sm">
        <div className="h-1.5 bg-primary" aria-hidden="true" />

        <div className="flex flex-col gap-8 p-6 sm:p-10">
          <header className="flex flex-col gap-4">
            <div
              className="flex size-14 items-center justify-center rounded-full bg-accent font-serif text-2xl text-accent-foreground"
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

          <section aria-labelledby="involvement-heading" className="flex flex-col gap-4">
            <h2
              id="involvement-heading"
              className="text-xs font-medium uppercase tracking-widest text-muted-foreground"
            >
              Involved with
            </h2>
            <Involvement />
          </section>

          <section aria-labelledby="contact-heading" className="flex flex-col gap-4">
            <h2
              id="contact-heading"
              className="text-xs font-medium uppercase tracking-widest text-muted-foreground"
            >
              Get in touch
            </h2>
            <ContactLinks />
          </section>
        </div>
      </article>
    </main>
  )
}
