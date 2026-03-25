"use client";

export default function RelativeGraph() {
  return (
    <div className="w-full flex justify-center">
      <svg
        viewBox="0 0 400 260"
        className="w-full max-w-md"
        aria-label="相対評価の可視化: 同じ人物でも見る人によってスコアが変わる"
      >
        {/* Background glow for center node */}
        <circle cx="200" cy="130" r="48" fill="#4f46e5" opacity="0.08" />

        {/* Connection: A → B (shown first) */}
        <g className="score-from-a">
          <line
            x1="80" y1="100" x2="175" y2="125"
            stroke="#4f46e5" strokeWidth="2" strokeDasharray="4 3" opacity="0.9"
          />
          {/* Arrow tip */}
          <polygon points="175,125 162,118 164,129" fill="#4f46e5" opacity="0.9" />
          {/* Score badge */}
          <rect x="106" y="96" width="44" height="20" rx="10" fill="#4f46e5" />
          <text x="128" y="110" textAnchor="middle" fill="white" fontSize="10" fontWeight="700">92点</text>
        </g>

        {/* Connection: C → B (shown second) */}
        <g className="score-from-c">
          <line
            x1="320" y1="100" x2="225" y2="125"
            stroke="#e11d48" strokeWidth="2" strokeDasharray="4 3" opacity="0.9"
          />
          {/* Arrow tip */}
          <polygon points="225,125 237,118 236,129" fill="#e11d48" opacity="0.9" />
          {/* Score badge */}
          <rect x="250" y="96" width="44" height="20" rx="10" fill="#e11d48" />
          <text x="272" y="110" textAnchor="middle" fill="white" fontSize="10" fontWeight="700">31点</text>
        </g>

        {/* Node A */}
        <circle cx="70" cy="90" r="32" fill="#1e1b4b" />
        <circle cx="70" cy="90" r="32" fill="none" stroke="#4f46e5" strokeWidth="1.5" />
        <text x="70" y="85" textAnchor="middle" fill="#a5b4fc" fontSize="9" fontFamily="Inter">Person</text>
        <text x="70" y="98" textAnchor="middle" fill="white" fontSize="15" fontWeight="700">A</text>

        {/* Node C */}
        <circle cx="330" cy="90" r="32" fill="#1e1b4b" />
        <circle cx="330" cy="90" r="32" fill="none" stroke="#e11d48" strokeWidth="1.5" opacity="0.6" />
        <text x="330" y="85" textAnchor="middle" fill="#fda4af" fontSize="9" fontFamily="Inter">Person</text>
        <text x="330" y="98" textAnchor="middle" fill="white" fontSize="15" fontWeight="700">C</text>

        {/* Node B (center — always visible) */}
        <circle cx="200" cy="130" r="38" fill="#312e81" />
        <circle cx="200" cy="130" r="38" fill="none" stroke="#818cf8" strokeWidth="2" />
        <text x="200" y="123" textAnchor="middle" fill="#a5b4fc" fontSize="9" fontFamily="Inter">Person</text>
        <text x="200" y="138" textAnchor="middle" fill="white" fontSize="18" fontWeight="800">B</text>

        {/* Dynamic label below: "Aから見ると" */}
        <g className="label-a">
          <text x="200" y="188" textAnchor="middle" fill="#6366f1" fontSize="11" fontFamily="Inter, sans-serif">
            A から見ると
          </text>
          <text x="200" y="205" textAnchor="middle" fill="#4f46e5" fontSize="22" fontWeight="800" fontFamily="Inter">
            92
          </text>
          <text x="200" y="220" textAnchor="middle" fill="#6366f1" fontSize="10">
            高い信頼スコア
          </text>
        </g>

        {/* Dynamic label below: "Cから見ると" */}
        <g className="label-c">
          <text x="200" y="188" textAnchor="middle" fill="#e11d48" fontSize="11" fontFamily="Inter, sans-serif">
            C から見ると
          </text>
          <text x="200" y="205" textAnchor="middle" fill="#e11d48" fontSize="22" fontWeight="800" fontFamily="Inter">
            31
          </text>
          <text x="200" y="220" textAnchor="middle" fill="#e11d48" fontSize="10">
            低い信頼スコア
          </text>
        </g>
      </svg>
    </div>
  );
}
