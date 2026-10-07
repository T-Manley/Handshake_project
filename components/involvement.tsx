import Image from 'next/image'
import { Radio, ShieldCheck, Users } from 'lucide-react'
import { withBasePath } from '@/lib/base-path'

const items = [
  {
    icon: Users,
    title: 'Greek Independent Council (GIC) Chair',
    detail: 'Delta Omicron Lambda (DOL)',
  },
  {
    icon: ShieldCheck,
    title: 'ACM Security',
    detail: 'Missouri S&T',
  },
]

function RadioShow() {
  return (
    <div className="flex gap-4 rounded-xl border border-border bg-background/60 p-3 sm:p-4">
      <a
        href={withBasePath('/images/second-dimension-flyer.png')}
        target="_blank"
        rel="noopener noreferrer"
        className="group relative block size-24 shrink-0 overflow-hidden rounded-lg ring-1 ring-border transition hover:ring-primary focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-ring sm:size-32"
      >
        <Image
          src={withBasePath('/images/second-dimension-flyer.png')}
          alt="Flyer for The Second Dimension with DJ Prismo on KMNR, Tuesdays at 8"
          fill
          sizes="(min-width: 640px) 128px, 96px"
          className="object-cover transition-transform duration-300 group-hover:scale-105"
        />
        <span className="sr-only">View full flyer (opens in a new tab)</span>
      </a>
      <div className="flex min-w-0 flex-col justify-center gap-1">
        <span className="inline-flex items-center gap-1.5 text-[11px] font-medium uppercase tracking-wider text-primary sm:text-xs">
          <Radio className="size-3.5" aria-hidden="true" />
          KMNR &middot; S&amp;T Radio
        </span>
        <h3 className="text-base font-semibold leading-tight text-foreground sm:text-lg">The Second Dimension</h3>
        <p className="text-sm text-muted-foreground">
          Hosted by <span className="text-foreground">DJ Prismo</span>
        </p>
        <p className="font-mono text-xs text-muted-foreground">Tuesdays @ 8</p>
      </div>
    </div>
  )
}

export function Involvement() {
  return (
    <div className="flex flex-col gap-4">
      <RadioShow />
      <ul className="flex flex-col gap-4 sm:flex-row sm:gap-8">
        {items.map(({ icon: Icon, title, detail }) => (
          <li key={title} className="flex items-start gap-3">
            <Icon className="mt-0.5 size-4 shrink-0 text-primary" aria-hidden="true" />
            <div className="flex flex-col">
              <span className="text-sm font-medium text-foreground">{title}</span>
              <span className="text-sm text-muted-foreground">{detail}</span>
            </div>
          </li>
        ))}
      </ul>
    </div>
  )
}
