/** Illustrations SVG inline — thème campagne, nourriture, chaleur humaine.
 *  Toutes en viewBox normalisé, colorées via CSS variables pour cohérence DA.
 */

export function IlluWheatSprig({ className = "" }: { className?: string }) {
  return (
    <svg
      viewBox="0 0 120 180"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className={className}
      aria-hidden
    >
      {/* tige centrale */}
      <path
        d="M60 170 Q58 120 60 20"
        stroke="var(--sage)"
        strokeWidth="2"
        strokeLinecap="round"
      />
      {/* épis gauche */}
      <ellipse cx="44" cy="72" rx="10" ry="18" fill="var(--accent)" opacity="0.55" transform="rotate(-22 44 72)" />
      <ellipse cx="48" cy="98" rx="9" ry="16" fill="var(--accent)" opacity="0.45" transform="rotate(-18 48 98)" />
      <ellipse cx="50" cy="123" rx="8" ry="14" fill="var(--accent)" opacity="0.38" transform="rotate(-14 50 123)" />
      {/* épis droite */}
      <ellipse cx="76" cy="68" rx="10" ry="18" fill="var(--accent)" opacity="0.55" transform="rotate(22 76 68)" />
      <ellipse cx="72" cy="94" rx="9" ry="16" fill="var(--accent)" opacity="0.45" transform="rotate(18 72 94)" />
      <ellipse cx="70" cy="119" rx="8" ry="14" fill="var(--accent)" opacity="0.38" transform="rotate(14 70 119)" />
      {/* moustaches */}
      <path d="M60 20 L52 8" stroke="var(--sage)" strokeWidth="1.4" strokeLinecap="round" />
      <path d="M60 20 L68 8" stroke="var(--sage)" strokeWidth="1.4" strokeLinecap="round" />
      <path d="M60 20 L60 6" stroke="var(--sage)" strokeWidth="1.4" strokeLinecap="round" />
    </svg>
  );
}

export function IlluLeaf({ className = "" }: { className?: string }) {
  return (
    <svg
      viewBox="0 0 100 140"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className={className}
      aria-hidden
    >
      <path
        d="M50 130 C30 90 10 50 50 10 C90 50 70 90 50 130Z"
        fill="var(--sage)"
        opacity="0.38"
      />
      <path
        d="M50 130 Q48 90 50 10"
        stroke="var(--sage)"
        strokeWidth="1.5"
        strokeLinecap="round"
        opacity="0.7"
      />
      <path d="M50 55 Q35 50 28 38" stroke="var(--sage)" strokeWidth="1" strokeLinecap="round" opacity="0.5" />
      <path d="M50 75 Q36 70 30 60" stroke="var(--sage)" strokeWidth="1" strokeLinecap="round" opacity="0.5" />
      <path d="M50 55 Q65 50 72 38" stroke="var(--sage)" strokeWidth="1" strokeLinecap="round" opacity="0.5" />
      <path d="M50 75 Q64 70 70 60" stroke="var(--sage)" strokeWidth="1" strokeLinecap="round" opacity="0.5" />
    </svg>
  );
}

export function IlluBowl({ className = "" }: { className?: string }) {
  return (
    <svg
      viewBox="0 0 160 120"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className={className}
      aria-hidden
    >
      {/* vapeur */}
      <path d="M62 32 Q58 22 62 12 Q66 2 62 -4" stroke="var(--muted)" strokeWidth="1.6" strokeLinecap="round" opacity="0.5" />
      <path d="M80 28 Q76 18 80 8 Q84 -2 80 -8" stroke="var(--muted)" strokeWidth="1.6" strokeLinecap="round" opacity="0.4" />
      <path d="M98 32 Q94 22 98 12 Q102 2 98 -4" stroke="var(--muted)" strokeWidth="1.6" strokeLinecap="round" opacity="0.5" />
      {/* bol */}
      <path
        d="M18 58 Q18 108 80 108 Q142 108 142 58 Z"
        fill="var(--background)"
        stroke="var(--foreground)"
        strokeWidth="2"
        opacity="0.88"
      />
      {/* rebord */}
      <ellipse cx="80" cy="58" rx="62" ry="12" fill="var(--background)" stroke="var(--foreground)" strokeWidth="2" opacity="0.88" />
      {/* soupe */}
      <ellipse cx="80" cy="58" rx="52" ry="9" fill="var(--accent)" opacity="0.22" />
      {/* détails */}
      <circle cx="68" cy="57" r="4" fill="var(--accent)" opacity="0.35" />
      <circle cx="82" cy="55" r="3" fill="var(--sage)" opacity="0.4" />
      <circle cx="94" cy="58" r="3.5" fill="var(--accent)" opacity="0.3" />
    </svg>
  );
}

export function IlluFlowers({ className = "" }: { className?: string }) {
  return (
    <svg
      viewBox="0 0 160 160"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className={className}
      aria-hidden
    >
      {/* tige 1 */}
      <path d="M55 148 Q53 110 50 70" stroke="var(--sage)" strokeWidth="1.8" strokeLinecap="round" />
      {/* fleur 1 */}
      <circle cx="50" cy="62" r="14" fill="var(--accent)" opacity="0.28" />
      <circle cx="50" cy="50" r="7" fill="var(--accent)" opacity="0.38" />
      <circle cx="38" cy="62" r="7" fill="var(--accent)" opacity="0.3" />
      <circle cx="62" cy="62" r="7" fill="var(--accent)" opacity="0.3" />
      <circle cx="50" cy="74" r="7" fill="var(--accent)" opacity="0.3" />
      <circle cx="50" cy="62" r="5" fill="var(--foreground)" opacity="0.2" />
      {/* tige 2 */}
      <path d="M90 148 Q88 112 92 72" stroke="var(--sage)" strokeWidth="1.8" strokeLinecap="round" />
      {/* fleur 2 (plus petite, décalée) */}
      <circle cx="92" cy="64" r="11" fill="var(--sage)" opacity="0.25" />
      <circle cx="92" cy="54" r="5.5" fill="var(--sage)" opacity="0.35" />
      <circle cx="82" cy="64" r="5.5" fill="var(--sage)" opacity="0.28" />
      <circle cx="102" cy="64" r="5.5" fill="var(--sage)" opacity="0.28" />
      <circle cx="92" cy="74" r="5.5" fill="var(--sage)" opacity="0.28" />
      <circle cx="92" cy="64" r="4" fill="var(--foreground)" opacity="0.15" />
      {/* feuille entre les deux */}
      <path d="M72 148 Q70 120 68 96 C75 86 80 82 74 74" stroke="var(--sage)" strokeWidth="1.4" fill="none" strokeLinecap="round" />
      <path d="M68 96 C62 92 58 88 64 82" stroke="var(--sage)" strokeWidth="1.2" fill="none" strokeLinecap="round" opacity="0.7" />
    </svg>
  );
}

export function IlluFork({ className = "" }: { className?: string }) {
  return (
    <svg
      viewBox="0 0 60 180"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className={className}
      aria-hidden
    >
      {/* manche */}
      <path d="M30 100 Q29 135 30 168" stroke="var(--foreground)" strokeWidth="3" strokeLinecap="round" opacity="0.55" />
      {/* col */}
      <path d="M22 82 Q24 92 30 100 Q36 92 38 82" stroke="var(--foreground)" strokeWidth="2.5" strokeLinecap="round" opacity="0.55" />
      {/* dents */}
      <path d="M20 12 L22 82" stroke="var(--foreground)" strokeWidth="2" strokeLinecap="round" opacity="0.55" />
      <path d="M26 10 L28 80" stroke="var(--foreground)" strokeWidth="2" strokeLinecap="round" opacity="0.55" />
      <path d="M34 10 L32 80" stroke="var(--foreground)" strokeWidth="2" strokeLinecap="round" opacity="0.55" />
      <path d="M40 12 L38 82" stroke="var(--foreground)" strokeWidth="2" strokeLinecap="round" opacity="0.55" />
    </svg>
  );
}

export function IlluRoad({ className = "" }: { className?: string }) {
  return (
    <svg
      viewBox="0 0 240 120"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className={className}
      aria-hidden
    >
      {/* route qui s'éloigne */}
      <path
        d="M0 118 Q50 90 120 72 Q190 54 240 50"
        stroke="var(--muted)"
        strokeWidth="22"
        strokeLinecap="round"
        opacity="0.18"
      />
      <path
        d="M0 118 Q50 90 120 72 Q190 54 240 50"
        stroke="var(--muted)"
        strokeWidth="2"
        strokeLinecap="round"
        strokeDasharray="12 10"
        opacity="0.45"
      />
      {/* herbe */}
      <path d="M10 106 Q14 94 10 86" stroke="var(--sage)" strokeWidth="1.5" strokeLinecap="round" opacity="0.55" />
      <path d="M18 108 Q22 98 20 88" stroke="var(--sage)" strokeWidth="1.4" strokeLinecap="round" opacity="0.45" />
      <path d="M200 62 Q204 54 202 46" stroke="var(--sage)" strokeWidth="1.3" strokeLinecap="round" opacity="0.5" />
      <path d="M218 60 Q222 52 220 44" stroke="var(--sage)" strokeWidth="1.2" strokeLinecap="round" opacity="0.4" />
      {/* collines lointaines */}
      <path d="M100 52 Q130 32 165 48 Q195 34 230 46" stroke="var(--sage)" strokeWidth="1.5" fill="none" opacity="0.3" />
    </svg>
  );
}

export function IlluWineGlass({ className = "" }: { className?: string }) {
  return (
    <svg
      viewBox="0 0 80 160"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className={className}
      aria-hidden
    >
      {/* pied */}
      <path d="M20 148 L60 148" stroke="var(--foreground)" strokeWidth="2" strokeLinecap="round" opacity="0.5" />
      <path d="M40 148 L40 112" stroke="var(--foreground)" strokeWidth="2" strokeLinecap="round" opacity="0.5" />
      {/* coupe */}
      <path
        d="M12 32 Q8 72 18 98 Q26 112 40 112 Q54 112 62 98 Q72 72 68 32 Z"
        fill="var(--accent)"
        opacity="0.12"
        stroke="var(--foreground)"
        strokeWidth="1.8"
        strokeOpacity="0.5"
      />
      {/* niveau du vin */}
      <path d="M18 74 Q40 78 62 74" stroke="var(--accent)" strokeWidth="1.2" strokeLinecap="round" opacity="0.55" fill="none" />
      <path
        d="M18 74 Q16 90 18 98 Q26 112 40 112 Q54 112 62 98 Q64 90 62 74 Q40 78 18 74Z"
        fill="var(--accent)"
        opacity="0.22"
      />
      {/* reflet */}
      <path d="M22 44 Q24 62 22 72" stroke="white" strokeWidth="1.5" strokeLinecap="round" opacity="0.35" />
    </svg>
  );
}

export function IlluPlate({ className = "" }: { className?: string }) {
  return (
    <svg
      viewBox="0 0 180 100"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className={className}
      aria-hidden
    >
      {/* assiette */}
      <ellipse cx="90" cy="62" rx="82" ry="30" fill="var(--background)" stroke="var(--foreground)" strokeWidth="1.8" opacity="0.8" />
      <ellipse cx="90" cy="60" rx="66" ry="22" stroke="var(--foreground)" strokeWidth="1" opacity="0.25" />
      {/* nourriture abstraite */}
      <ellipse cx="90" cy="58" rx="42" ry="14" fill="var(--accent)" opacity="0.18" />
      <circle cx="80" cy="55" r="8" fill="var(--accent)" opacity="0.28" />
      <circle cx="98" cy="57" r="6" fill="var(--sage)" opacity="0.32" />
      <circle cx="88" cy="62" r="5" fill="var(--accent)" opacity="0.24" />
      {/* herbes */}
      <path d="M105 52 Q108 46 106 42" stroke="var(--sage)" strokeWidth="1.5" strokeLinecap="round" opacity="0.65" />
      <path d="M110 54 Q114 48 112 44" stroke="var(--sage)" strokeWidth="1.4" strokeLinecap="round" opacity="0.55" />
    </svg>
  );
}
