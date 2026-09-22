export type Mana = 'W' | 'U' | 'B' | 'R' | 'G'

export type EloPoint = { year: number; elo: number }

export type Player = {
  id: string
  name: string
  nickname: string
  era: string
  eraTag: string
  active: string
  country: string
  colors: Mana[]
  peakElo: number
  peakYear: number
  titles: { label: string; value: string }[]
  signature: string
  narrative: string
  trajectory: EloPoint[]
}

// Chart domain shared by the timeline + all trajectories.
export const YEAR_MIN = 1996
export const YEAR_MAX = 2025
export const ELO_MIN = 1550
export const ELO_MAX = 2070

// Elo figures are illustrative, modeled on the community-run MTG Elo Project's
// rating scale to visualize each player's competitive peak and longevity.
export const players: Player[] = [
  {
    id: 'finkel',
    name: 'Jon Finkel',
    nickname: 'Jonny Magic',
    era: 'The First Legends',
    eraTag: '1996 – 1999',
    active: 'Active 1996 – present',
    country: 'United States',
    colors: ['U', 'B'],
    peakElo: 2012,
    peakYear: 2002,
    titles: [
      { label: 'Pro Tour titles', value: '3' },
      { label: 'World Champion', value: '2000' },
      { label: 'Hall of Fame', value: 'Class of 2005' },
    ],
    signature:
      'The original benchmark — the name every GOAT argument still starts with.',
    narrative:
      'Before Elo could measure a legend, Jon Finkel was already one. A Blue-Black control savant, he turned the game\u2019s first pro seasons into a personal proving ground and set the ceiling everyone after him would be measured against.',
    trajectory: [
      { year: 1996, elo: 1610 },
      { year: 1998, elo: 1815 },
      { year: 2000, elo: 1975 },
      { year: 2002, elo: 2012 },
      { year: 2005, elo: 1985 },
      { year: 2010, elo: 1958 },
      { year: 2015, elo: 1932 },
      { year: 2020, elo: 1921 },
    ],
  },
  {
    id: 'budde',
    name: 'Kai Budde',
    nickname: 'The German Juggernaut',
    era: 'The First Legends',
    eraTag: '1997 – 2004',
    active: 'Active 1997 – 2007',
    country: 'Germany',
    colors: ['U', 'R'],
    peakElo: 2038,
    peakYear: 2002,
    titles: [
      { label: 'Pro Tour titles', value: '7' },
      { label: 'Player of the Year', value: '4\u00d7' },
      { label: 'Peak rating', value: 'Highest of era' },
    ],
    signature: 'Seven Pro Tour trophies — a haul no one has matched since.',
    narrative:
      'If Finkel set the ceiling, Kai Budde broke through it. Across the early 2000s the German posted a level of tournament dominance so relentless that his seven Pro Tour titles remain the sport\u2019s untouchable record, and his rating the high-water mark of the old guard.',
    trajectory: [
      { year: 1997, elo: 1650 },
      { year: 1999, elo: 1905 },
      { year: 2001, elo: 2008 },
      { year: 2002, elo: 2038 },
      { year: 2004, elo: 2000 },
      { year: 2007, elo: 1962 },
    ],
  },
  {
    id: 'nassif',
    name: 'Gabriel Nassif',
    nickname: 'Yellowhat',
    era: 'The Golden Age',
    eraTag: '2000 – 2006',
    active: 'Active 2000 – present',
    country: 'France',
    colors: ['U', 'W'],
    peakElo: 1988,
    peakYear: 2004,
    titles: [
      { label: 'Pro Tour titles', value: '2' },
      { label: 'Player of the Year', value: '2004' },
      { label: 'Hall of Fame', value: 'Class of 2010' },
    ],
    signature: 'The deckbuilder\u2019s deckbuilder — theory made trophies.',
    narrative:
      'As the field professionalized, Gabriel Nassif won with preparation. The French mastermind\u2019s Blue-White control lists were so tuned they read like published theory, defining what a top-tier metagame call looked like for a generation of grinders.',
    trajectory: [
      { year: 2001, elo: 1700 },
      { year: 2003, elo: 1902 },
      { year: 2004, elo: 1988 },
      { year: 2006, elo: 1952 },
      { year: 2008, elo: 1930 },
      { year: 2011, elo: 1958 },
      { year: 2014, elo: 1968 },
    ],
  },
  {
    id: 'tsumura',
    name: 'Kenji Tsumura',
    nickname: 'The Prodigy',
    era: 'The Golden Age',
    eraTag: '2003 – 2008',
    active: 'Active 2003 – 2010',
    country: 'Japan',
    colors: ['G', 'U'],
    peakElo: 1975,
    peakYear: 2005,
    titles: [
      { label: 'Pro Tour titles', value: '1' },
      { label: 'Player of the Year', value: '2005' },
      { label: 'Hall of Fame', value: 'Class of 2011' },
    ],
    signature: 'The spearhead of Japan\u2019s golden generation.',
    narrative:
      'Kenji Tsumura arrived as a teenager and left the mid-2000s as its Player of the Year. His fearless, tempo-driven lines announced a Japanese wave that would soon dominate the game and rewrote what a prodigy\u2019s ceiling could be.',
    trajectory: [
      { year: 2003, elo: 1720 },
      { year: 2005, elo: 1975 },
      { year: 2006, elo: 1950 },
      { year: 2008, elo: 1902 },
      { year: 2010, elo: 1878 },
    ],
  },
  {
    id: 'lsv',
    name: 'Luis Scott-Vargas',
    nickname: 'LSV',
    era: 'The Modern Pros',
    eraTag: '2007 – 2014',
    active: 'Active 2006 – present',
    country: 'United States',
    colors: ['W', 'U'],
    peakElo: 1992,
    peakYear: 2009,
    titles: [
      { label: 'Pro Tour titles', value: '1' },
      { label: 'PT Berlin run', value: '10\u20130' },
      { label: 'Hall of Fame', value: 'Class of 2013' },
    ],
    signature: 'A perfect 10\u20130 Swiss run — then he explained how he did it.',
    narrative:
      'Luis Scott-Vargas fused elite results with the game\u2019s clearest teaching voice. His flawless 10\u20130 at Pro Tour Berlin is folklore, but his lasting influence is a decade of content that turned private pro knowledge into a public craft.',
    trajectory: [
      { year: 2006, elo: 1752 },
      { year: 2008, elo: 1930 },
      { year: 2009, elo: 1992 },
      { year: 2011, elo: 1970 },
      { year: 2013, elo: 1980 },
      { year: 2016, elo: 1972 },
      { year: 2019, elo: 1958 },
    ],
  },
  {
    id: 'shenhar',
    name: 'Shahar Shenhar',
    nickname: 'The Two-Time',
    era: 'The Modern Pros',
    eraTag: '2013 – 2014',
    active: 'Active 2011 – 2018',
    country: 'Israel',
    colors: ['U', 'B'],
    peakElo: 1951,
    peakYear: 2014,
    titles: [
      { label: 'World Champion', value: '2013 & 2014' },
      { label: 'Youngest ever', value: 'Age 19' },
      { label: 'Back-to-back', value: 'First ever' },
    ],
    signature: 'The only player to win back-to-back World Championships.',
    narrative:
      'Shahar Shenhar did something no legend before him managed: he won the World Championship twice in a row, the second time still a teenager. In an era of impossibly deep fields, back-to-back titles was a statement of pure ceiling.',
    trajectory: [
      { year: 2012, elo: 1780 },
      { year: 2013, elo: 1922 },
      { year: 2014, elo: 1951 },
      { year: 2016, elo: 1900 },
      { year: 2018, elo: 1878 },
    ],
  },
  {
    id: 'pvddr',
    name: 'Paulo Vitor Damo da Rosa',
    nickname: 'PVDDR',
    era: 'The Present Day',
    eraTag: '2015 – present',
    active: 'Active 2006 – present',
    country: 'Brazil',
    colors: ['U'],
    peakElo: 2051,
    peakYear: 2020,
    titles: [
      { label: 'Pro Tour Top 8s', value: 'Record 21+' },
      { label: 'World Champion', value: '2020' },
      { label: 'Peak rating', value: 'Highest ever' },
    ],
    signature: 'The longevity king — and the modern era\u2019s Elo ceiling.',
    narrative:
      'Paulo Vitor Damo da Rosa is the answer to the GOAT question for a new generation. A Blue-control master with the deepest Top 8 record in history, he stayed at the absolute top for fifteen years and pushed the peak rating higher than any player who came before.',
    trajectory: [
      { year: 2006, elo: 1760 },
      { year: 2010, elo: 1950 },
      { year: 2014, elo: 1992 },
      { year: 2017, elo: 2022 },
      { year: 2019, elo: 2045 },
      { year: 2020, elo: 2051 },
      { year: 2023, elo: 2040 },
      { year: 2025, elo: 2034 },
    ],
  },
  {
    id: 'manfield',
    name: 'Seth Manfield',
    nickname: 'The Grinder',
    era: 'The Present Day',
    eraTag: '2015 – present',
    active: 'Active 2013 – present',
    country: 'United States',
    colors: ['B', 'G'],
    peakElo: 1996,
    peakYear: 2019,
    titles: [
      { label: 'World Champion', value: '2015' },
      { label: 'Player of the Year', value: '2019' },
      { label: 'Pro Tour titles', value: '2' },
    ],
    signature: 'The relentless engine of the current competitive era.',
    narrative:
      'Seth Manfield closes the arc as the model modern professional: a World Championship, a Player of the Year, and a workload nobody outpaces. Where the first legends won on instinct, Manfield wins on volume, preparation, and sheer consistency.',
    trajectory: [
      { year: 2013, elo: 1800 },
      { year: 2015, elo: 1970 },
      { year: 2017, elo: 1960 },
      { year: 2019, elo: 1996 },
      { year: 2022, elo: 1976 },
      { year: 2025, elo: 1970 },
    ],
  },
]

export const manaMeta: Record<Mana, { label: string; token: string }> = {
  W: { label: 'White', token: 'var(--mana-w)' },
  U: { label: 'Blue', token: 'var(--mana-u)' },
  B: { label: 'Black', token: 'var(--mana-b)' },
  R: { label: 'Red', token: 'var(--mana-r)' },
  G: { label: 'Green', token: 'var(--mana-g)' },
}

// Primary line color per player, drawn from their color identity.
export const playerColorToken: Record<string, string> = {
  finkel: 'var(--mana-u)',
  budde: 'var(--mana-r)',
  nassif: 'var(--mana-w)',
  tsumura: 'var(--mana-g)',
  lsv: 'var(--gold)',
  shenhar: 'var(--mana-b)',
  pvddr: 'var(--mana-u)',
  manfield: 'var(--mana-g)',
}

// All-time peak leaderboard for the closing section.
export const leaderboard = [...players]
  .sort((a, b) => b.peakElo - a.peakElo)
  .map((p) => ({ id: p.id, name: p.name, peakElo: p.peakElo, peakYear: p.peakYear, colors: p.colors }))
