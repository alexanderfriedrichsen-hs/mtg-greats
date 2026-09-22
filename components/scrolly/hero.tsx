export function Hero() {
  return (
    <header className="relative flex min-h-screen flex-col justify-between overflow-hidden px-4 py-10 md:px-8 md:py-14">
      <div className="mx-auto flex w-full max-w-6xl items-center justify-between">
        <span className="font-sans text-[11px] uppercase tracking-[0.28em] text-gold">
          The Elo Archive
        </span>
        <span className="font-sans text-[11px] uppercase tracking-[0.2em] text-muted-foreground">
          1996 — 2025
        </span>
      </div>

      <div className="mx-auto w-full max-w-6xl">
        <p className="font-sans text-xs uppercase tracking-[0.3em] text-muted-foreground">
          A competitive history of Magic: The Gathering
        </p>
        <h1 className="mt-5 font-display text-[15vw] font-bold leading-[0.86] tracking-tight text-foreground md:text-[11rem]">
          THE
          <br />
          GREATEST
          <br />
          <span className="text-gold">EVER.</span>
        </h1>
        <p className="mt-8 max-w-xl font-sans text-base leading-relaxed text-muted-foreground md:text-lg">
          Thirty years of Pro Tours, World Championships and grudge matches,
          measured on a single rating curve. This is the story of the players who
          defined the game — told through their Elo.
        </p>
      </div>

      <div className="mx-auto flex w-full max-w-6xl items-center gap-3">
        <span className="flex items-center gap-2 font-sans text-xs uppercase tracking-[0.2em] text-muted-foreground">
          <span className="inline-block h-8 w-px animate-pulse bg-gold" aria-hidden="true" />
          Scroll to begin
        </span>
      </div>
    </header>
  )
}
