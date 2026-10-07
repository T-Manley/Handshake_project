type Role = {
  role: string
  org: string
  location: string
  dates: string
  summary: string
  bullets: string[]
}

const roles: Role[] = [
  {
    role: 'Hackathon Participant',
    org: 'PickHacks 2026',
    location: 'Missouri S&T',
    dates: 'Feb 2026 – Mar 2026',
    summary: 'Built the Arduino foundation for the SkyWalks canopy system.',
    bullets: [
      'Collaborated on the “SkyWalks” project, using Arduino to set a foundation for the canopy system',
      'Developed solutions for “smarter cities,” reducing carbon footprint and promoting safer, healthier transportation',
      'Presented the project to a large audience',
    ],
  },
  {
    role: 'Member',
    org: 'Delta Omicron Lambda (DOL)',
    location: 'Missouri S&T',
    dates: 'Jan 2026 – Present',
    summary: '50+ community service hours, including STEM outreach.',
    bullets: [
      'Completed 50+ community service hours, including supporting STEM outreach and nonprofit initiatives',
      'Volunteered at a Science Olympiad tournament: event coordination, prepping labs, and grading tests',
      'Supporting Russell House philanthropy and local park cleanup initiatives',
    ],
  },
  {
    role: 'Laborer',
    org: 'Robert’s Hardwood Flooring',
    location: 'Mountain View, MO',
    dates: 'Sep 2023 – Present',
    summary: 'Quality control and grading on the production floor.',
    bullets: [
      'Graded flooring by quality (selects, com 1&2’s), managed recuts, and quality control before packaging',
      'Fixed offset chains, greased gears, and kept buildings clean',
      'Communicated with coworkers to ensure safety and efficiency; 40 hours/week during summer',
    ],
  },
  {
    role: 'Volunteer',
    org: 'Mountain View Christian Church',
    location: 'Mountain View, MO',
    dates: '2018 – Present',
    summary: 'Worship team musician and youth jam session leader.',
    bullets: [
      'Sang and played guitar for Sunday and Wednesday worship teams',
      'Led youth jam sessions, teaching new youth how to play instruments',
      'Cut and delivered firewood for the elderly and disabled; helped at the Annual Car Care Clinic',
    ],
  },
]

export function Experience() {
  return (
    <ol className="flex flex-col">
      {roles.map((r, i) => (
        <li key={r.org} className="relative flex gap-4 pb-6 last:pb-0">
          <div className="flex flex-col items-center" aria-hidden="true">
            <span className="mt-1.5 size-2 shrink-0 rounded-full bg-primary ring-4 ring-primary/15" />
            {i < roles.length - 1 && <span className="mt-2 w-px flex-1 bg-border" />}
          </div>
          <div className="flex min-w-0 flex-1 flex-col gap-1">
            <div className="flex flex-col gap-0.5 sm:flex-row sm:items-baseline sm:justify-between sm:gap-4">
              <h3 className="text-sm font-semibold text-foreground sm:text-base">{r.org}</h3>
              <span className="shrink-0 font-mono text-[11px] text-muted-foreground sm:text-xs">{r.dates}</span>
            </div>
            <p className="text-sm text-primary">
              {r.role}
              <span className="hidden text-muted-foreground sm:inline"> &middot; {r.location}</span>
            </p>
            <p className="text-sm leading-relaxed text-muted-foreground text-pretty sm:hidden">{r.summary}</p>
            <ul className="mt-1 hidden list-disc flex-col gap-1 pl-4 text-sm leading-relaxed text-muted-foreground marker:text-primary/60 sm:flex">
              {r.bullets.map((b) => (
                <li key={b} className="text-pretty">
                  {b}
                </li>
              ))}
            </ul>
          </div>
        </li>
      ))}
    </ol>
  )
}
