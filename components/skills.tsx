const groups = [
  {
    label: 'Technical',
    items: ['Python', 'C++', 'CAD', 'Google Suite', 'Microsoft 365', 'Social Media Management', 'Content Creation'],
  },
  {
    label: 'Interpersonal',
    items: ['Quick Learner', 'Communication', 'Adaptable', 'Dependable', 'Problem-Solving', 'Continuous Learning'],
  },
]

export function Skills() {
  return (
    <div className="flex flex-col gap-4">
      {groups.map((g) => (
        <div key={g.label} className="flex flex-col gap-2">
          <h3 className="text-sm font-medium text-foreground">{g.label}</h3>
          <ul className="flex flex-wrap gap-1.5" aria-label={`${g.label} skills`}>
            {g.items.map((item) => (
              <li
                key={item}
                className={
                  g.label === 'Technical'
                    ? 'rounded-md bg-secondary px-2 py-0.5 font-mono text-xs text-secondary-foreground'
                    : 'rounded-md border border-border px-2 py-0.5 text-xs text-muted-foreground'
                }
              >
                {item}
              </li>
            ))}
          </ul>
        </div>
      ))}
    </div>
  )
}
