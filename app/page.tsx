import { Hero } from '@/components/scrolly/hero'
import { Scrollytelling } from '@/components/scrolly/scrollytelling'
import { Leaderboard } from '@/components/scrolly/leaderboard'

export default function Page() {
  return (
    <main className="min-h-screen bg-background">
      <Hero />
      <Scrollytelling />
      <Leaderboard />
      <footer className="border-t border-border px-4 py-10 md:px-8">
        <div className="mx-auto flex max-w-6xl flex-col gap-2 md:flex-row md:items-center md:justify-between">
          <span className="font-sans text-[11px] uppercase tracking-[0.24em] text-gold">
            The Elo Archive
          </span>
          <span className="font-sans text-[11px] text-muted-foreground">
            A scrollytelling tribute to competitive Magic: The Gathering
          </span>
        </div>
      </footer>
    </main>
  )
}
