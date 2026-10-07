import { Radio, Users } from 'lucide-react'

const items = [
  {
    icon: Radio,
    title: 'KMNR',
    detail: 'College radio station at S&T',
  },
  {
    icon: Users,
    title: 'Greek Independent Council (GIC) Chair',
    detail: 'Delta Omicron Lambda (DOL)',
  },
]

export function Involvement() {
  return (
    <ul className="flex flex-col gap-4">
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
  )
}
