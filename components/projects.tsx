import { ArrowUpRight, Code2, FileText } from 'lucide-react'

type ProjectLink = {
  label: string
  href: string
  kind: 'code' | 'doc'
}

type Project = {
  eyebrow: string
  title: string
  description: string
  tech: string[]
  links: ProjectLink[]
}

const REPO = 'https://github.com/T-Manley/github-portfolio'

const projects: Project[] = [
  {
    eyebrow: 'PickHacks 2026 · Hackathon',
    title: 'SkyWalks',
    description:
      'An automated canopy-covered skybridge system: open-air skybridges with reactive sun/weather coverage and illumination. Includes formal and bulleted write-ups of the full idea plus sample code for the inputs driving the automated canopy.',
    tech: ['Arduino', 'C++'],
    links: [
      { label: 'Code', href: `${REPO}/tree/main/PickHacks2026`, kind: 'code' },
      {
        label: 'Formal write-up',
        href: `${REPO}/blob/main/PickHacks2026/Formal_Idea_Write_Up.pdf`,
        kind: 'doc',
      },
    ],
  },
  {
    eyebrow: 'Web App',
    title: 'Budget Tracker',
    description:
      'A Flask budgeting app backed by SQLite. Add, delete, and view expenses, filter by month, and see totals with a category breakdown visualized in an animated donut chart.',
    tech: ['Python', 'Flask', 'SQLite'],
    links: [{ label: 'Code', href: `${REPO}/tree/main/pythonProjects/budgeting-app`, kind: 'code' }],
  },
  {
    eyebrow: 'Command-Line App',
    title: 'To-Do List',
    description:
      'A command-line to-do app for managing tasks with due dates: add, view, complete, and delete tasks, with save and load to a local file.',
    tech: ['Python'],
    links: [{ label: 'Code', href: `${REPO}/tree/main/pythonProjects/todo`, kind: 'code' }],
  },
]

export function Projects() {
  return (
    <ul className="flex flex-col gap-3">
      {projects.map((project) => (
        <li
          key={project.title}
          className="flex flex-col gap-4 rounded-xl border border-border bg-background/60 p-5 transition-colors hover:border-primary/40"
        >
          <div className="flex flex-col gap-1.5">
            <span className="text-xs font-medium uppercase tracking-wider text-primary">
              {project.eyebrow}
            </span>
            <h3 className="text-lg font-semibold text-foreground">{project.title}</h3>
            <p className="text-sm leading-relaxed text-muted-foreground text-pretty">
              {project.description}
            </p>
          </div>

          <div className="flex flex-wrap items-center justify-between gap-3">
            <ul className="flex flex-wrap gap-1.5" aria-label={`${project.title} technologies`}>
              {project.tech.map((t) => (
                <li
                  key={t}
                  className="rounded-md bg-secondary px-2 py-0.5 font-mono text-xs text-secondary-foreground"
                >
                  {t}
                </li>
              ))}
            </ul>

            <div className="flex flex-wrap gap-2">
              {project.links.map((link) => {
                const Icon = link.kind === 'code' ? Code2 : FileText
                return (
                  <a
                    key={link.href}
                    href={link.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="group inline-flex items-center gap-1.5 rounded-lg border border-border px-3 py-1.5 text-sm text-foreground transition-colors hover:border-primary hover:bg-primary hover:text-primary-foreground focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-ring"
                  >
                    <Icon className="size-3.5" aria-hidden="true" />
                    {link.label}
                    <ArrowUpRight className="size-3.5 opacity-60" aria-hidden="true" />
                    <span className="sr-only">for {project.title} (opens in a new tab)</span>
                  </a>
                )
              })}
            </div>
          </div>
        </li>
      ))}
    </ul>
  )
}
