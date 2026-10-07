const schools = [
  {
    school: 'Missouri University of Science and Technology',
    shortSchool: 'Missouri S&T',
    degree: 'B.S. Computer Engineering',
    dates: 'Aug 2025 – May 2029',
    gpa: '3.64',
    note: null as string | null,
  },
]

export function Education() {
  return (
    <ul className="flex flex-col gap-3">
      {schools.map((s) => (
        <li
          key={s.school}
          className="flex items-center justify-between gap-4 rounded-xl border border-border bg-background/60 p-4"
        >
          <div className="flex min-w-0 flex-col gap-0.5">
            <h3 className="text-sm font-semibold text-foreground sm:text-base">
              <span className="sm:hidden">{s.shortSchool}</span>
              <span className="hidden sm:inline">{s.school}</span>
            </h3>
            <p className="text-sm text-muted-foreground">
              {s.degree}
              {s.note && <span className="text-primary"> &middot; {s.note}</span>}
            </p>
            <p className="font-mono text-[11px] text-muted-foreground sm:text-xs">{s.dates}</p>
          </div>
          <div className="flex shrink-0 flex-col items-end">
            <span className="font-serif text-2xl leading-none text-primary sm:text-3xl">{s.gpa}</span>
            <span className="mt-1 text-[10px] uppercase tracking-wider text-muted-foreground">GPA / 4.00</span>
          </div>
        </li>
      ))}
    </ul>
  )
}
