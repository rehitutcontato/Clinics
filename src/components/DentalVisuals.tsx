import React from 'react';

// Luxury vector representation of tooth cross-section & layered stratification
export const StratificationDiagram: React.FC<{ activeLayer?: number; onSelectLayer?: (idx: number) => void }> = ({
  activeLayer = 0,
  onSelectLayer
}) => {
  return (
    <div className="relative w-full aspect-square max-w-md mx-auto p-4 flex flex-col items-center justify-center">
      <svg viewBox="0 0 400 400" className="w-full h-full drop-shadow-2xl" fill="none" xmlns="http://www.w3.org/2000/svg">
        <defs>
          {/* Radial glow */}
          <radialGradient id="goldCore" cx="50%" cy="40%" r="60%">
            <stop offset="0%" stopColor="#FFF4D0" stopOpacity="0.8" />
            <stop offset="45%" stopColor="#D4AF37" stopOpacity="0.4" />
            <stop offset="100%" stopColor="#09090B" stopOpacity="0" />
          </radialGradient>
          <linearGradient id="ceramicGrad" x1="0%" y1="0%" x2="100%" y2="100%">
            <stop offset="0%" stopColor="#FFFFFF" stopOpacity="0.95" />
            <stop offset="50%" stopColor="#F5EFE0" stopOpacity="0.85" />
            <stop offset="100%" stopColor="#D8C7A5" stopOpacity="0.75" />
          </linearGradient>
          <linearGradient id="enamelGrad" x1="0%" y1="0%" x2="0%" y2="100%">
            <stop offset="0%" stopColor="#FDFBF7" stopOpacity="0.9" />
            <stop offset="80%" stopColor="#E9DFCC" stopOpacity="0.6" />
            <stop offset="100%" stopColor="#C9B896" stopOpacity="0.4" />
          </linearGradient>
          <linearGradient id="dentinGrad" x1="0%" y1="0%" x2="0%" y2="100%">
            <stop offset="0%" stopColor="#ECD9B5" />
            <stop offset="100%" stopColor="#C1A26B" />
          </linearGradient>
        </defs>

        {/* Ambient gold aura */}
        <circle cx="200" cy="180" r="140" fill="url(#goldCore)" />

        {/* Biological Tooth Core / Dentin */}
        <path
          d="M140 120 C140 70, 260 70, 260 120 C260 210, 230 300, 200 340 C170 300, 140 210, 140 120 Z"
          fill="url(#dentinGrad)"
          className="transition-all duration-500 cursor-pointer"
          onClick={() => onSelectLayer?.(0)}
          stroke={activeLayer === 0 ? "#FFF" : "#A6864C"}
          strokeWidth={activeLayer === 0 ? 2 : 1}
          opacity="0.85"
        />

        {/* Intermediate Enamel / Biomimetic Layer */}
        <path
          d="M125 110 C125 50, 275 50, 275 110 C275 220, 240 310, 200 355 C160 310, 125 220, 125 110 Z"
          fill="none"
          stroke="url(#enamelGrad)"
          strokeWidth="12"
          strokeDasharray="4 2"
          className="transition-all duration-500 cursor-pointer"
          onClick={() => onSelectLayer?.(1)}
          opacity={activeLayer === 1 ? 1 : 0.65}
        />

        {/* Ultra-thin Porcelain Veneer Shell (0.2mm - 0.4mm) */}
        <path
          d="M115 105 C115 40, 285 40, 285 105 C285 180, 280 230, 275 260 C265 250, 255 240, 245 225 C230 180, 170 180, 155 225 C145 240, 135 250, 125 260 C120 230, 115 180, 115 105 Z"
          fill="url(#ceramicGrad)"
          stroke={activeLayer === 2 ? "#FFFFFF" : "#E5C378"}
          strokeWidth={activeLayer === 2 ? 3 : 1.5}
          className="transition-all duration-500 cursor-pointer drop-shadow-md"
          onClick={() => onSelectLayer?.(2)}
          opacity={activeLayer === 2 ? 1 : 0.85}
        />

        {/* Incisal Translucency Halo (Edge) */}
        <path
          d="M150 70 Q200 55 250 70"
          stroke="#FFFFFF"
          strokeWidth="3.5"
          strokeLinecap="round"
          opacity="0.9"
        />

        {/* Light Reflection highlights */}
        <path
          d="M140 100 C140 90, 150 85, 170 85"
          stroke="#FFFFFF"
          strokeWidth="2.5"
          strokeLinecap="round"
          opacity="0.8"
        />
        <path
          d="M245 130 C250 160, 245 200, 240 230"
          stroke="#FFFFFF"
          strokeWidth="1.5"
          strokeLinecap="round"
          opacity="0.5"
        />

        {/* Measurement Callouts */}
        <g className="text-[10px] font-mono tracking-wider fill-zinc-400">
          <line x1="285" y1="90" x2="330" y2="70" stroke="#71717A" strokeWidth="0.8" strokeDasharray="2 2" />
          <circle cx="285" cy="90" r="2.5" fill="#E5C378" />
          <text x="335" y="73" fill="#E5C378" className="font-semibold">0.2mm Porcelana Pura</text>

          <line x1="260" y1="180" x2="320" y2="180" stroke="#71717A" strokeWidth="0.8" strokeDasharray="2 2" />
          <circle cx="260" cy="180" r="2.5" fill="#D4D4D8" />
          <text x="325" y="184" fill="#A1A1AA">Interface Biomimética</text>

          <line x1="140" y1="210" x2="80" y2="210" stroke="#71717A" strokeWidth="0.8" strokeDasharray="2 2" />
          <circle cx="140" cy="210" r="2.5" fill="#CBA258" />
          <text x="15" y="214" fill="#A1A1AA">Estrutura Dental Sadia</text>
        </g>
      </svg>
    </div>
  );
};

// Luxury Smile Curve & Golden Ratio Face Mask SVG
export const GoldenRatioSmile: React.FC = () => {
  return (
    <div className="relative w-full aspect-video flex items-center justify-center overflow-hidden rounded-2xl bg-zinc-900/60 border border-zinc-800/80 p-6">
      <svg viewBox="0 0 600 300" className="w-full h-full" fill="none" xmlns="http://www.w3.org/2000/svg">
        {/* Facial midline */}
        <line x1="300" y1="20" x2="300" y2="280" stroke="#E5C378" strokeWidth="1" strokeDasharray="3 3" opacity="0.4" />
        <text x="306" y="40" fill="#E5C378" opacity="0.6" fontSize="10" fontFamily="sans-serif">Linha Média Facial</text>

        {/* Bipupilar / Incisal Plane */}
        <line x1="80" y1="120" x2="520" y2="120" stroke="#71717A" strokeWidth="0.7" strokeDasharray="4 4" opacity="0.3" />
        <text x="85" y="112" fill="#71717A" opacity="0.6" fontSize="10" fontFamily="sans-serif">Plano Oclusal Horizontal</text>

        {/* Lower lip curvature smile arch */}
        <path
          d="M100 170 C180 235, 420 235, 500 170"
          stroke="#CBA258"
          strokeWidth="2"
          strokeLinecap="round"
          opacity="0.8"
        />
        <text x="420" y="235" fill="#E5C378" fontSize="10" fontFamily="sans-serif">Curvatura Labial Dinâmica (1:1.618)</text>

        {/* Dental arch teeth outlines */}
        {/* Central incisors */}
        <rect x="265" y="125" width="32" height="48" rx="6" fill="#18181B" stroke="#E5C378" strokeWidth="1.5" />
        <rect x="303" y="125" width="32" height="48" rx="6" fill="#18181B" stroke="#E5C378" strokeWidth="1.5" />
        {/* Laterals */}
        <rect x="234" y="130" width="26" height="42" rx="5" fill="#18181B" stroke="#A1A1AA" strokeWidth="1.2" />
        <rect x="340" y="130" width="26" height="42" rx="5" fill="#18181B" stroke="#A1A1AA" strokeWidth="1.2" />
        {/* Canines */}
        <rect x="206" y="134" width="24" height="44" rx="5" fill="#18181B" stroke="#71717A" strokeWidth="1" />
        <rect x="370" y="134" width="24" height="44" rx="5" fill="#18181B" stroke="#71717A" strokeWidth="1" />
        {/* Premolars */}
        <rect x="180" y="140" width="22" height="38" rx="4" fill="#18181B" stroke="#52525B" strokeWidth="0.8" />
        <rect x="398" y="140" width="22" height="38" rx="4" fill="#18181B" stroke="#52525B" strokeWidth="0.8" />

        {/* Golden Ratio indicators */}
        <path d="M265 180 L297 180" stroke="#E5C378" strokeWidth="1" />
        <text x="272" y="195" fill="#E5C378" fontSize="9" fontWeight="600">1.618</text>

        <path d="M234 180 L260 180" stroke="#A1A1AA" strokeWidth="1" />
        <text x="242" y="195" fill="#A1A1AA" fontSize="9">1.0</text>

        <path d="M206 185 L230 185" stroke="#71717A" strokeWidth="1" />
        <text x="212" y="200" fill="#71717A" fontSize="9">0.618</text>
      </svg>
    </div>
  );
};
