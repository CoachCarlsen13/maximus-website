// Shield M Logo — Maximus AI brand mark
// Per maximus-brand-identity skill v1.1: 3D metallic shield with stylized M letter
// Outer frame: brushed silver/chrome, beveled
// Inner fill: dark navy gradient
// M letterform: metallic silver with cyan edge lighting + soft cyan glow
// Halo: soft cyan aura behind shield
// Hex grid: faintly visible behind shield (handled by parent surface, not embedded)
//
// Created 2026-04-18 per directive 87566ed7. Brand-canonical replacement for prior favicon.

interface ShieldMProps {
  size?: number;
  className?: string;
  withHalo?: boolean;
}

export function ShieldM({ size = 96, className = '', withHalo = true }: ShieldMProps) {
  return (
    <svg
      width={size}
      height={size * (120 / 96)}
      viewBox="0 0 96 120"
      className={className}
      role="img"
      aria-label="Maximus AI Shield M logo"
      xmlns="http://www.w3.org/2000/svg"
    >
      <defs>
        {/* Brushed chrome gradient for shield frame */}
        <linearGradient id="chrome" x1="0%" y1="0%" x2="0%" y2="100%">
          <stop offset="0%" stopColor="#E8EEF4" />
          <stop offset="35%" stopColor="#B8C2CE" />
          <stop offset="65%" stopColor="#8A95A4" />
          <stop offset="100%" stopColor="#5C6776" />
        </linearGradient>
        {/* Inner navy gradient — matches brand background */}
        <linearGradient id="innerNavy" x1="0%" y1="0%" x2="0%" y2="100%">
          <stop offset="0%" stopColor="#111633" />
          <stop offset="100%" stopColor="#060918" />
        </linearGradient>
        {/* M letterform metallic silver */}
        <linearGradient id="mLetter" x1="0%" y1="0%" x2="0%" y2="100%">
          <stop offset="0%" stopColor="#F0F6FF" />
          <stop offset="50%" stopColor="#C9D6E5" />
          <stop offset="100%" stopColor="#7E8BA0" />
        </linearGradient>
        {/* Cyan edge glow filter for the M */}
        <filter id="cyanEdge" x="-30%" y="-30%" width="160%" height="160%">
          <feGaussianBlur in="SourceGraphic" stdDeviation="0.8" result="blur" />
          <feFlood floodColor="#00B4D8" floodOpacity="0.85" result="cyan" />
          <feComposite in="cyan" in2="blur" operator="in" result="edge" />
          <feMerge>
            <feMergeNode in="edge" />
            <feMergeNode in="SourceGraphic" />
          </feMerge>
        </filter>
        {/* Soft cyan halo behind whole shield */}
        <radialGradient id="halo" cx="50%" cy="50%" r="55%">
          <stop offset="0%" stopColor="#00B4D8" stopOpacity="0.45" />
          <stop offset="60%" stopColor="#00B4D8" stopOpacity="0.12" />
          <stop offset="100%" stopColor="#00B4D8" stopOpacity="0" />
        </radialGradient>
      </defs>

      {/* Halo */}
      {withHalo && (
        <ellipse cx="48" cy="60" rx="46" ry="56" fill="url(#halo)" />
      )}

      {/* Outer shield frame (brushed chrome) */}
      <path
        d="M48 6 L82 18 L82 64 Q82 92 48 114 Q14 92 14 64 L14 18 Z"
        fill="url(#chrome)"
        stroke="#5C6776"
        strokeWidth="0.5"
      />

      {/* Inner navy fill */}
      <path
        d="M48 12 L78 22 L78 64 Q78 88 48 108 Q18 88 18 64 L18 22 Z"
        fill="url(#innerNavy)"
        stroke="#0A0E27"
        strokeWidth="0.5"
      />

      {/* Letter M — metallic with cyan edge lighting */}
      <g filter="url(#cyanEdge)">
        <path
          d="M 30 78
             L 30 38
             L 38 38
             L 48 60
             L 58 38
             L 66 38
             L 66 78
             L 60 78
             L 60 50
             L 51 70
             L 45 70
             L 36 50
             L 36 78 Z"
          fill="url(#mLetter)"
          stroke="#00B4D8"
          strokeWidth="0.4"
          strokeOpacity="0.6"
        />
      </g>
    </svg>
  );
}

export default ShieldM;
