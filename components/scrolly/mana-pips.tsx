import { manaMeta, type Mana } from '@/lib/players'

export function ManaPips({
  colors,
  size = 16,
}: {
  colors: Mana[]
  size?: number
}) {
  return (
    <div className="flex items-center gap-1" role="img" aria-label={`Color identity: ${colors.map((c) => manaMeta[c].label).join(', ')}`}>
      {colors.map((c) => (
        <span
          key={c}
          className="inline-flex items-center justify-center rounded-full border border-black/30 font-display text-[10px] font-semibold leading-none shadow-sm"
          style={{
            width: size,
            height: size,
            background: manaMeta[c].token,
            color: c === 'B' || c === 'U' || c === 'R' ? 'oklch(0.98 0 0)' : 'oklch(0.2 0.02 264)',
          }}
        >
          {c}
        </span>
      ))}
    </div>
  )
}
