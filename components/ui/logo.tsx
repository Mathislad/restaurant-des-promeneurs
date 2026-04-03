/** Logo signature du Restaurant des Promeneurs.
 *  SVG inline — initiales "R·P" dans un médaillon circulaire style tampon ancien.
 *  Coloré via CSS variables pour s'adapter à tous les contextes.
 */
export function Logo({
  className = "",
  variant = "dark",
}: {
  className?: string;
  /** dark = sur fond clair | light = sur fond sombre */
  variant?: "dark" | "light";
}) {
  const stroke = variant === "light" ? "rgba(245,240,232,0.92)" : "var(--foreground)";
  const fill = variant === "light" ? "rgba(245,240,232,0.92)" : "var(--foreground)";
  const accent = "var(--accent)";
  const sage = "var(--sage)";

  return (
    <svg
      viewBox="0 0 200 200"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className={className}
      role="img"
      aria-label="Restaurant des Promeneurs"
    >
      {/* Cercle extérieur */}
      <circle cx="100" cy="100" r="92" stroke={stroke} strokeWidth="1.2" opacity="0.6" />
      {/* Cercle intérieur */}
      <circle cx="100" cy="100" r="80" stroke={stroke} strokeWidth="0.7" opacity="0.28" />

      {/* Petit ornement haut — épi stylisé */}
      <path d="M100 12 L100 22" stroke={accent} strokeWidth="1.4" strokeLinecap="round" opacity="0.8" />
      <ellipse cx="96" cy="19" rx="3.5" ry="6" fill={accent} opacity="0.55" transform="rotate(-18 96 19)" />
      <ellipse cx="104" cy="19" rx="3.5" ry="6" fill={accent} opacity="0.55" transform="rotate(18 104 19)" />

      {/* Petit ornement bas — feuille */}
      <path d="M100 188 L100 178" stroke={sage} strokeWidth="1.4" strokeLinecap="round" opacity="0.7" />
      <path d="M100 178 C96 172 92 168 96 162 C100 156 104 160 100 178Z" fill={sage} opacity="0.45" />

      {/* Séparateurs latéraux — tirets ornementaux */}
      <line x1="18" y1="100" x2="30" y2="100" stroke={stroke} strokeWidth="0.8" opacity="0.4" />
      <line x1="170" y1="100" x2="182" y2="100" stroke={stroke} strokeWidth="0.8" opacity="0.4" />
      <circle cx="15" cy="100" r="1.5" fill={stroke} opacity="0.4" />
      <circle cx="185" cy="100" r="1.5" fill={stroke} opacity="0.4" />

      {/* Initiale R */}
      <text
        x="62"
        y="118"
        fontFamily="Georgia, 'Times New Roman', serif"
        fontSize="62"
        fontWeight="400"
        fill={fill}
        opacity="0.9"
        letterSpacing="-2"
      >
        R
      </text>

      {/* Séparateur central — point médian */}
      <circle cx="100" cy="96" r="2.5" fill={accent} opacity="0.75" />

      {/* Initiale P */}
      <text
        x="107"
        y="118"
        fontFamily="Georgia, 'Times New Roman', serif"
        fontSize="62"
        fontWeight="400"
        fill={fill}
        opacity="0.9"
        letterSpacing="-2"
      >
        P
      </text>

      {/* Texte circulaire haut : "RESTAURANT DES PROMENEURS" */}
      <path
        id="top-arc"
        d="M 28,100 A 72,72 0 0,1 172,100"
        fill="none"
      />
      <text fontSize="8.2" fill={fill} opacity="0.5" letterSpacing="3.2" fontFamily="'Helvetica Neue', Arial, sans-serif">
        <textPath href="#top-arc" startOffset="4%">
          RESTAURANT DES PROMENEURS
        </textPath>
      </text>

      {/* Texte circulaire bas : "NOLHAC · HAUTE-LOIRE" */}
      <path
        id="bottom-arc"
        d="M 32,106 A 68,68 0 0,0 168,106"
        fill="none"
      />
      <text fontSize="7.5" fill={fill} opacity="0.42" letterSpacing="2.8" fontFamily="'Helvetica Neue', Arial, sans-serif">
        <textPath href="#bottom-arc" startOffset="10%">
          NOLHAC  ·  HAUTE-LOIRE
        </textPath>
      </text>
    </svg>
  );
}
