'use client'

import { useEffect, useRef, useState } from 'react'
import { players } from '@/lib/players'
import { EloChart } from './elo-chart'
import { PlayerDossier } from './player-dossier'
import { ManaPips } from './mana-pips'

export function Scrollytelling() {
  // activeIndex: -1 = intro/overview, 0..n = players[index]
  const [activeIndex, setActiveIndex] = useState(-1)
  const stepRefs = useRef<(HTMLElement | null)[]>([])

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            const idx = Number((entry.target as HTMLElement).dataset.index)
            setActiveIndex(idx)
          }
        })
      },
      { rootMargin: '-45% 0px -45% 0px', threshold: 0 },
    )
    stepRefs.current.forEach((el) => el && observer.observe(el))
    return () => observer.disconnect()
  }, [])

  const activePlayer = activeIndex >= 0 ? players[activeIndex] : null

  return (
    <section className="relative mx-auto max-w-6xl px-4 md:px-8">
      <div className="relative">
        {/* Sticky visual panel — full-width on mobile, right half on desktop */}
        <div className="sticky top-0 z-10 -mx-4 flex h-[52vh] flex-col justify-center border-b border-border bg-background/90 px-4 py-3 backdrop-blur-sm md:mx-0 md:ml-auto md:h-screen md:w-1/2 md:border-b-0 md:bg-transparent md:py-10 md:pl-10 md:backdrop-blur-none">
          <div className="min-h-0 flex-1">
            <EloChart activeId={activePlayer?.id ?? null} />
          </div>
          <div className="shrink-0">
            <PlayerDossier player={activePlayer} />
          </div>
        </div>

        {/* Narrative steps — pulled up over the left half on desktop */}
        <div className="relative z-0 md:-mt-[100vh] md:w-1/2 md:pr-10">
          {/* Intro step */}
          <Step
            index={-1}
            ref={(el) => {
              stepRefs.current[0] = el
            }}
          >
            <p className="font-sans text-[11px] uppercase tracking-[0.25em] text-gold">
              The Read
            </p>
            <p className="mt-4 font-sans text-lg leading-relaxed text-foreground">
              Magic has no single scoreboard for greatness. So the community built
              one: an Elo rating, borrowed from chess, that rises and falls with
              every match played across three decades of professional play.
            </p>
            <p className="mt-4 font-sans text-sm leading-relaxed text-muted-foreground">
              Read from left to right, the chart on the{' '}
              <span className="md:hidden">top</span>
              <span className="hidden md:inline">right</span> is thirty years of
              competition. Keep scrolling to meet the eight players who bent it.
            </p>
          </Step>

          {players.map((p, i) => (
            <Step
              key={p.id}
              index={i}
              ref={(el) => {
                stepRefs.current[i + 1] = el
              }}
              active={activeIndex === i}
            >
              <div className="flex items-center gap-3">
                <span className="font-display text-4xl font-bold leading-none text-gold md:text-5xl">
                  {String(i + 1).padStart(2, '0')}
                </span>
                <div>
                  <p className="font-sans text-[10px] uppercase tracking-[0.22em] text-muted-foreground">
                    {p.era}
                  </p>
                  <h2 className="font-display text-2xl font-semibold leading-none text-foreground md:text-3xl">
                    {p.name}
                  </h2>
                </div>
              </div>

              <div className="mt-4 flex items-center gap-3">
                <ManaPips colors={p.colors} size={16} />
                <span className="font-sans text-[11px] text-muted-foreground">
                  {p.active}
                </span>
              </div>

              <p className="mt-5 font-sans text-[15px] leading-relaxed text-foreground">
                {p.narrative}
              </p>

              <p className="mt-4 border-l-2 border-gold/50 pl-3 font-sans text-sm italic leading-relaxed text-muted-foreground">
                {p.signature}
              </p>
            </Step>
          ))}
        </div>
      </div>
    </section>
  )
}

const Step = ({
  index,
  active,
  children,
  ref,
}: {
  index: number
  active?: boolean
  children: React.ReactNode
  ref: (el: HTMLElement | null) => void
}) => {
  return (
    <article
      ref={ref}
      data-index={index}
      className={`flex min-h-[85vh] flex-col justify-center py-10 transition-opacity duration-500 md:min-h-screen ${
        active === false ? 'opacity-45' : 'opacity-100'
      }`}
    >
      <div className="max-w-md">{children}</div>
    </article>
  )
}
