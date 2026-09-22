'use client'

import {
  players,
  playerColorToken,
  YEAR_MIN,
  YEAR_MAX,
  ELO_MIN,
  ELO_MAX,
  type Player,
} from '@/lib/players'

const VB_W = 820
const VB_H = 480
const M = { top: 30, right: 26, bottom: 46, left: 58 }
const PW = VB_W - M.left - M.right
const PH = VB_H - M.top - M.bottom

function x(year: number) {
  return M.left + ((year - YEAR_MIN) / (YEAR_MAX - YEAR_MIN)) * PW
}
function y(elo: number) {
  return M.top + ((ELO_MAX - elo) / (ELO_MAX - ELO_MIN)) * PH
}

function pathFor(p: Player) {
  return p.trajectory
    .map((pt, i) => `${i === 0 ? 'M' : 'L'} ${x(pt.year).toFixed(1)} ${y(pt.elo).toFixed(1)}`)
    .join(' ')
}

const yTicks = [1600, 1700, 1800, 1900, 2000]
const xTicks = [1996, 2000, 2005, 2010, 2015, 2020, 2025]

export function EloChart({ activeId }: { activeId: string | null }) {
  const activePlayer = players.find((p) => p.id === activeId) ?? null

  return (
    <svg
      viewBox={`0 0 ${VB_W} ${VB_H}`}
      className="h-full w-full"
      role="img"
      aria-label={
        activePlayer
          ? `Elo rating timeline highlighting ${activePlayer.name}, peaking at ${activePlayer.peakElo} in ${activePlayer.peakYear}.`
          : 'Elo rating timeline of the greatest Magic: The Gathering players from 1996 to 2025.'
      }
    >
      {/* horizontal gridlines + elo labels */}
      {yTicks.map((t) => (
        <g key={t}>
          <line
            x1={M.left}
            x2={VB_W - M.right}
            y1={y(t)}
            y2={y(t)}
            stroke="var(--border)"
            strokeWidth={1}
            strokeDasharray="2 5"
            opacity={0.5}
          />
          <text
            x={M.left - 10}
            y={y(t) + 4}
            textAnchor="end"
            className="font-sans"
            fontSize={12}
            fill="var(--muted-foreground)"
          >
            {t}
          </text>
        </g>
      ))}

      {/* baseline + year labels */}
      <line
        x1={M.left}
        x2={VB_W - M.right}
        y1={y(ELO_MIN)}
        y2={y(ELO_MIN)}
        stroke="var(--border)"
        strokeWidth={1.5}
      />
      {xTicks.map((t) => (
        <g key={t}>
          <line
            x1={x(t)}
            x2={x(t)}
            y1={y(ELO_MIN)}
            y2={y(ELO_MIN) + 6}
            stroke="var(--border)"
            strokeWidth={1.5}
          />
          <text
            x={x(t)}
            y={y(ELO_MIN) + 22}
            textAnchor="middle"
            className="font-sans"
            fontSize={12}
            fill="var(--muted-foreground)"
          >
            {t}
          </text>
        </g>
      ))}

      {/* axis captions */}
      <text
        x={M.left}
        y={M.top - 12}
        className="font-sans"
        fontSize={11}
        letterSpacing={1.5}
        fill="var(--muted-foreground)"
      >
        ELO RATING
      </text>

      {/* inactive trajectories */}
      {players.map((p) => {
        const isActive = p.id === activeId
        if (isActive) return null
        return (
          <path
            key={p.id}
            d={pathFor(p)}
            fill="none"
            stroke="var(--muted-foreground)"
            strokeWidth={1.4}
            strokeLinecap="round"
            strokeLinejoin="round"
            opacity={activeId ? 0.14 : 0.32}
            style={{ transition: 'opacity 0.5s ease' }}
          />
        )
      })}

      {/* active trajectory */}
      {activePlayer && (
        <g key={activePlayer.id}>
          <path
            d={pathFor(activePlayer)}
            fill="none"
            stroke={playerColorToken[activePlayer.id]}
            strokeWidth={3.4}
            strokeLinecap="round"
            strokeLinejoin="round"
            className="animate-elo-draw"
            pathLength={1}
          />
          {/* peak marker */}
          <circle
            cx={x(activePlayer.peakYear)}
            cy={y(activePlayer.peakElo)}
            r={9}
            fill="none"
            stroke={playerColorToken[activePlayer.id]}
            strokeWidth={1.5}
            opacity={0.5}
          />
          <circle
            cx={x(activePlayer.peakYear)}
            cy={y(activePlayer.peakElo)}
            r={4.5}
            fill={playerColorToken[activePlayer.id]}
          />
          <g
            transform={`translate(${Math.min(x(activePlayer.peakYear) + 12, VB_W - M.right - 92)}, ${y(activePlayer.peakElo) - 14})`}
          >
            <text
              className="font-display"
              fontSize={26}
              fontWeight={700}
              fill="var(--foreground)"
            >
              {activePlayer.peakElo}
            </text>
            <text
              y={16}
              className="font-sans"
              fontSize={10}
              letterSpacing={1}
              fill="var(--muted-foreground)"
            >
              PEAK · {activePlayer.peakYear}
            </text>
          </g>
        </g>
      )}
    </svg>
  )
}
