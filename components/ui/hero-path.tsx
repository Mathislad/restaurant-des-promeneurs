"use client";

import { motion } from "framer-motion";

/**
 * HeroPath — chemin narratif horizontal : part de la droite, arrive à gauche.
 * 5 étapes révélées en séquence. Labels alternés haut/bas.
 */

// Chemin horizontal avec légères ondulations — de droite (x=640) vers gauche (x=40)
const PATH_D =
  "M 640 100 C 560 95 520 108 440 100 C 360 92 320 112 240 100 C 160 88 120 108 40 100";

type Step = {
  id: string;
  label: string;
  cx: number;
  cy: number;
  labelSide: "top" | "bottom";
  icon: React.ReactNode;
};

const steps: Step[] = [
  {
    id: "arrivee",
    label: "L'arrivée",
    cx: 610,
    cy: 100,
    labelSide: "top",
    icon: (
      <g>
        <path d="M-10 4 L0 -7 L10 4" stroke="currentColor" strokeWidth="1.5" fill="none" strokeLinejoin="round" strokeLinecap="round" />
        <rect x="-7" y="4" width="14" height="10" rx="1" stroke="currentColor" strokeWidth="1.5" fill="none" />
        <rect x="-2.5" y="7" width="5" height="7" rx="0.5" stroke="currentColor" strokeWidth="1.1" fill="none" />
      </g>
    ),
  },
  {
    id: "decouverte",
    label: "La découverte",
    cx: 460,
    cy: 100,
    labelSide: "bottom",
    icon: (
      <g>
        <path d="M-9 0 C-4 -6 4 -6 9 0 C4 6 -4 6 -9 0Z" stroke="currentColor" strokeWidth="1.4" fill="none" />
        <circle cx="0" cy="0" r="2.8" fill="currentColor" opacity="0.7" />
        <line x1="0" y1="-9" x2="0" y2="-12" stroke="currentColor" strokeWidth="1.1" strokeLinecap="round" />
        <line x1="9" y1="-5" x2="11" y2="-7" stroke="currentColor" strokeWidth="1.1" strokeLinecap="round" />
        <line x1="9" y1="5" x2="11" y2="7" stroke="currentColor" strokeWidth="1.1" strokeLinecap="round" />
      </g>
    ),
  },
  {
    id: "repas",
    label: "Le repas",
    cx: 340,
    cy: 100,
    labelSide: "top",
    icon: (
      <g>
        <circle cx="0" cy="0" r="9" stroke="currentColor" strokeWidth="1.4" fill="none" />
        <circle cx="0" cy="0" r="5.5" stroke="currentColor" strokeWidth="0.9" fill="none" opacity="0.4" />
        <line x1="-14" y1="-8" x2="-14" y2="9" stroke="currentColor" strokeWidth="1.4" strokeLinecap="round" />
        <line x1="-17" y1="-8" x2="-17" y2="-2" stroke="currentColor" strokeWidth="1.1" strokeLinecap="round" />
        <line x1="-11" y1="-8" x2="-11" y2="-2" stroke="currentColor" strokeWidth="1.1" strokeLinecap="round" />
        <path d="M14 -8 C16 -5 16 2 14 9" stroke="currentColor" strokeWidth="1.4" strokeLinecap="round" fill="none" />
      </g>
    ),
  },
  {
    id: "dessert",
    label: "Le dessert",
    cx: 210,
    cy: 100,
    labelSide: "bottom",
    icon: (
      <g>
        <path d="M-9 5 Q0 -9 9 5 Z" stroke="currentColor" strokeWidth="1.4" fill="none" strokeLinejoin="round" />
        <line x1="-10" y1="5" x2="10" y2="5" stroke="currentColor" strokeWidth="1.4" strokeLinecap="round" />
        <path d="M-8 5 L-8 10 Q0 12 8 10 L8 5" stroke="currentColor" strokeWidth="1.2" fill="none" />
        <circle cx="0" cy="-9" r="2.2" stroke="currentColor" strokeWidth="1.1" fill="none" />
        <path d="M0 -11 C0.8 -15 3 -14 2.5 -11" stroke="currentColor" strokeWidth="1.1" fill="none" strokeLinecap="round" />
      </g>
    ),
  },
  {
    id: "partage",
    label: "Le partage",
    cx: 70,
    cy: 100,
    labelSide: "top",
    icon: (
      <g>
        <circle cx="-6" cy="-9" r="3.5" stroke="currentColor" strokeWidth="1.3" fill="none" />
        <path d="M-12 4 C-12 -1 0 -1 0 4" stroke="currentColor" strokeWidth="1.3" fill="none" strokeLinecap="round" />
        <circle cx="6" cy="-9" r="3.5" stroke="currentColor" strokeWidth="1.3" fill="none" />
        <path d="M0 4 C0 -1 12 -1 12 4" stroke="currentColor" strokeWidth="1.3" fill="none" strokeLinecap="round" />
        <circle cx="0" cy="-17" r="1.4" fill="currentColor" opacity="0.5" />
        <circle cx="-4" cy="-20" r="0.9" fill="currentColor" opacity="0.38" />
        <circle cx="4" cy="-20" r="0.9" fill="currentColor" opacity="0.38" />
      </g>
    ),
  },
];

export function HeroPath() {
  return (
    <div
      aria-hidden
      className="pointer-events-none absolute inset-x-0 top-0 z-10 h-full overflow-hidden"
    >
      {/* viewBox 680×220 — centré verticalement dans la zone haute du Hero */}
      <svg
        viewBox="0 0 680 220"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        className="absolute left-0 top-[8%] w-full"
        preserveAspectRatio="xMidYMid meet"
      >
        {/* ─── Chemin pointillé — tracé de droite à gauche ─── */}
        <motion.path
          d={PATH_D}
          stroke="var(--muted)"
          strokeWidth="1.3"
          strokeLinecap="round"
          strokeDasharray="7 6"
          initial={{ pathLength: 0, opacity: 0 }}
          animate={{ pathLength: 1, opacity: 0.85 }}
          transition={{ duration: 3.0, delay: 0.4, ease: "easeInOut" }}
        />

        {/* ─── Étapes ─── */}
        {steps.map((step, i) => (
          <motion.g
            key={step.id}
            initial={{ opacity: 0, scale: 0.5 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{
              duration: 0.65,
              delay: 1.0 + i * 0.5,
              ease: [0.22, 1, 0.36, 1],
            }}
          >
            {/* Halo fond */}
            <circle
              cx={step.cx}
              cy={step.cy}
              r="20"
              fill="var(--background)"
              stroke="var(--line)"
              strokeWidth="1"
              opacity="0.9"
            />
            {/* Icône */}
            <g
              transform={`translate(${step.cx}, ${step.cy})`}
              color="var(--foreground)"
              opacity="0.6"
            >
              {step.icon}
            </g>
            {/* Label */}
            <text
              x={step.cx}
              y={step.labelSide === "top" ? step.cy - 28 : step.cy + 38}
              textAnchor="middle"
              fontSize="7.5"
              fill="var(--soft-foreground)"
              fontFamily="'Helvetica Neue', Arial, sans-serif"
              letterSpacing="1.8"
              opacity="0.65"
              style={{ textTransform: "uppercase" }}
            >
              {step.label}
            </text>
          </motion.g>
        ))}

        {/* ─── Flèche "le chemin continue" — part vers la gauche ─── */}
        <motion.g
          initial={{ opacity: 0, x: 8 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8, delay: 3.8, ease: [0.22, 1, 0.36, 1] }}
        >
          <motion.line
            x1="40"
            y1="100"
            x2="12"
            y2="100"
            stroke="var(--accent)"
            strokeWidth="1.4"
            strokeLinecap="round"
            initial={{ pathLength: 0 }}
            animate={{ pathLength: 1 }}
            transition={{ duration: 0.5, delay: 3.8 }}
          />
          {/* Pointe gauche */}
          <path
            d="M18 94 L12 100 L18 106"
            stroke="var(--accent)"
            strokeWidth="1.3"
            strokeLinecap="round"
            strokeLinejoin="round"
            fill="none"
          />
          <text
            x="52"
            y="88"
            textAnchor="middle"
            fontSize="6.8"
            fill="var(--accent)"
            fontFamily="'Helvetica Neue', Arial, sans-serif"
            letterSpacing="1.5"
            opacity="0.7"
          >
            LE CHEMIN CONTINUE…
          </text>
        </motion.g>
      </svg>
    </div>
  );
}
