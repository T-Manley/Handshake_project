import { ArrowUpRight, FolderGit2, Mail, MessageSquare } from 'lucide-react'
import type { ReactNode } from 'react'

type ContactLink = {
  label: string
  value: string
  href: string
  icon: ReactNode
  external?: boolean
}

function LinkedInMark() {
  return (
    <span aria-hidden="true" className="text-[11px] font-bold leading-none tracking-tight">
      in
    </span>
  )
}

const contacts: ContactLink[] = [
  {
    label: 'Email',
    value: 'tm5qf@umsystem.edu',
    href: 'mailto:tm5qf@umsystem.edu',
    icon: <Mail className="size-4" aria-hidden="true" />,
  },
  {
    label: 'Text',
    value: '(417) 247-9737',
    href: 'sms:+14172479737',
    icon: <MessageSquare className="size-4" aria-hidden="true" />,
  },
  {
    label: 'LinkedIn',
    value: 'linkedin.com/in/taylor-manley-292842342',
    href: 'https://www.linkedin.com/in/taylor-manley-292842342/',
    icon: <LinkedInMark />,
    external: true,
  },
  {
    label: 'GitHub',
    value: 'github.com/T-Manley',
    href: 'https://github.com/T-Manley',
    icon: <FolderGit2 className="size-4" aria-hidden="true" />,
    external: true,
  },
]

export function ContactLinks({ variant = 'full' }: { variant?: 'full' | 'compact' }) {
  if (variant === 'compact') {
    return (
      <ul className="grid grid-cols-4 gap-2">
        {contacts.map((contact) => (
          <li key={contact.label}>
            <a
              href={contact.href}
              {...(contact.external ? { target: '_blank', rel: 'noopener noreferrer' } : {})}
              aria-label={`${contact.label}: ${contact.value}${contact.external ? ' (opens in a new tab)' : ''}`}
              className="flex flex-col items-center gap-1.5 rounded-xl border border-border bg-background/60 py-3 text-foreground transition-colors active:bg-accent hover:border-primary/50 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-ring"
            >
              <span className="flex size-9 items-center justify-center rounded-lg bg-accent text-accent-foreground">
                {contact.icon}
              </span>
              <span className="text-[11px] font-medium text-muted-foreground">{contact.label}</span>
            </a>
          </li>
        ))}
      </ul>
    )
  }

  return (
    <ul className="grid gap-2 sm:grid-cols-2">
      {contacts.map((contact) => (
        <li key={contact.label}>
          <a
            href={contact.href}
            {...(contact.external ? { target: '_blank', rel: 'noopener noreferrer' } : {})}
            className="group flex items-center gap-4 rounded-xl border border-border bg-background/60 px-4 py-3 transition-colors hover:border-primary/50 hover:bg-accent focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-ring"
          >
            <span className="flex size-9 shrink-0 items-center justify-center rounded-lg bg-accent text-accent-foreground transition-colors group-hover:bg-primary group-hover:text-primary-foreground">
              {contact.icon}
            </span>
            <span className="flex min-w-0 flex-1 flex-col">
              <span className="text-xs font-medium uppercase tracking-wider text-muted-foreground">
                {contact.label}
              </span>
              <span className="truncate text-sm text-foreground">{contact.value}</span>
            </span>
            <ArrowUpRight
              className="size-4 shrink-0 text-muted-foreground transition-transform group-hover:-translate-y-0.5 group-hover:translate-x-0.5 group-hover:text-primary"
              aria-hidden="true"
            />
            {contact.external && <span className="sr-only">(opens in a new tab)</span>}
          </a>
        </li>
      ))}
    </ul>
  )
}
