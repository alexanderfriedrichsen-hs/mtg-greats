import { ManaPips } from './mana-pips'
import type { Player } from '@/lib/players'

export function PlayerDossier({ player }: { player: Player | null }) {
  if (!player) {
    return (
      <div className="animate-dossier-in border-t border-border pt-4">
        <p className="font-sans text-[11px] uppercase tracking-[0.2em] text-muted-foreground">
          The Field · 1996 – 2025
        </p>
        <p className="mt-2 font-sans text-sm leading-relaxed text-muted-foreground">
          Eight careers, one rating scale. Scroll to trace how the ceiling of
          competitive Magic rose from the first legends to the present day.
        </p>
      </div>
    )
  }

  return (
    <div key={player.id} className="animate-dossier-in border-t border-gold/40 pt-4">
      <div className="flex items-start justify-between gap-3">
        <div className="min-w-0">
          <p className="font-sans text-[11px] uppercase tracking-[0.2em] text-gold">
            {player.era} · {player.eraTag}
          </p>
          <h3 className="mt-1 truncate font-display text-2xl font-semibold leading-none text-foreground md:text-3xl">
            {player.name}
          </h3>
          <p className="mt-1 font-sans text-xs text-muted-foreground">
            &ldquo;{player.nickname}&rdquo; · {player.country}
          </p>
        </div>
        <ManaPips colors={player.colors} size={18} />
      </div>

      <dl className="mt-4 grid grid-cols-3 gap-2">
        {player.titles.map((t) => (
          <div
            key={t.label}
            className="rounded-sm border border-border bg-background/40 px-2 py-2"
          >
            <dt className="font-sans text-[9px] uppercase tracking-wider text-muted-foreground">
              {t.label}
            </dt>
            <dd className="mt-1 font-display text-sm font-medium leading-tight text-foreground">
              {t.value}
            </dd>
          </div>
        ))}
      </dl>
    </div>
  )
}
