import Image from 'next/image'
import { leaderboard, ELO_MIN } from '@/lib/players'
import { ManaPips } from './mana-pips'

export function Leaderboard() {
  const top = leaderboard[0].peakElo
  return (
    <section className="mx-auto max-w-6xl px-4 py-24 md:px-8 md:py-36">
      <div className="max-w-2xl">
        <p className="font-sans text-[11px] uppercase tracking-[0.25em] text-gold">
          The Verdict
        </p>
        <h2 className="mt-4 text-balance font-display text-4xl font-bold leading-[0.95] text-foreground md:text-6xl">
          THE ALL-TIME PEAK LADDER
        </h2>
        <p className="mt-5 text-pretty font-sans text-sm leading-relaxed text-muted-foreground md:text-base">
          Ranked by the highest Elo rating each player ever reached. The old guard
          set the standard; the modern era raised the ceiling. Whether greatness is
          a single peak or a decade of them is the argument that never ends.
        </p>
      </div>

      <ol className="mt-12 divide-y divide-border border-y border-border">
        {leaderboard.map((p, i) => {
          const pct = ((p.peakElo - ELO_MIN) / (top - ELO_MIN)) * 100
          return (
            <li
              key={p.id}
              className="grid grid-cols-[2rem_1fr_auto] items-center gap-4 py-4 md:grid-cols-[3rem_14rem_1fr_auto] md:gap-6"
            >
              <span className="font-display text-2xl font-bold text-muted-foreground md:text-3xl">
                {i + 1}
              </span>

              <div className="flex items-center gap-3">
                <div className="relative h-10 w-10 shrink-0 overflow-hidden rounded-sm border border-border bg-background/40">
                  <Image
                    src={p.image || '/placeholder.svg'}
                    alt={`Portrait of ${p.name}`}
                    fill
                    sizes="40px"
                    className="object-cover"
                  />
                </div>
                <ManaPips colors={p.colors} size={16} />
                <span className="truncate font-display text-lg font-medium text-foreground md:text-xl">
                  {p.name}
                </span>
              </div>

              {/* rating bar — hidden on small screens */}
              <div className="hidden md:block">
                <div className="h-2 w-full overflow-hidden rounded-full bg-muted">
                  <div
                    className="h-full rounded-full bg-gold"
                    style={{ width: `${pct}%` }}
                  />
                </div>
              </div>

              <div className="text-right">
                <span className="font-display text-xl font-bold text-foreground md:text-2xl">
                  {p.peakElo}
                </span>
                <span className="ml-2 font-sans text-[11px] text-muted-foreground">
                  &rsquo;{String(p.peakYear).slice(2)}
                </span>
              </div>
            </li>
          )
        })}
      </ol>

      <p className="mt-10 max-w-2xl font-sans text-xs leading-relaxed text-muted-foreground">
        Note: Elo figures are illustrative, modeled on the community-run MTG Elo
        Project&rsquo;s rating scale to visualize each player&rsquo;s competitive
        peak and career arc. They are a storytelling lens, not an official record.
      </p>
    </section>
  )
}
