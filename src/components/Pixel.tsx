import React from "react";

/* =========================================================
   PIXEL ART COMPONENTS — built with SVG <rect> grids
   ========================================================= */

type PixelProps = { size?: number; className?: string };

/** A walking adventurer character (16x20 grid scaled). */
export const PixelHero: React.FC<PixelProps & { walking?: boolean }> = ({
  size = 6,
  className = "",
  walking = true,
}) => {
  // Color palette
  const SK = "#f1c79b"; // skin
  const HR = "#3a2a1a"; // hair
  const SH = "#2ee892"; // shirt emerald
  const PT = "#1aa3d6"; // pants cyan
  const SHO = "#0a0d14"; // shoes
  const EYE = "#0a0d14";

  // 16 wide x 20 tall pixel grid (1 = color, 0 = transparent)
  // legend: 1=hair 2=skin 3=eye 4=shirt 5=pants 6=shoes
  const map = [
    "0000111100000000",
    "0001111111000000",
    "0011111111100000",
    "0112222222110000",
    "0122122122110000",
    "0122222222210000",
    "0122232222210000",
    "0022222222200000",
    "0002222222000000",
    "0044444444000000",
    "0444444444400000",
    "4444444444440000",
    "4444444444440000",
    "0444444444400000",
    "0044444444000000",
    "0005555555000000",
    "0005555555000000",
    "0005500550000000",
    "0006600660000000",
    "0006600660000000",
  ];
  const colorOf = (c: string) =>
    c === "1" ? HR : c === "2" ? SK : c === "3" ? EYE : c === "4" ? SH : c === "5" ? PT : c === "6" ? SHO : "transparent";

  return (
    <svg
      width={16 * size}
      height={20 * size}
      viewBox="0 0 16 20"
      className={`pixelated ${walking ? "animate-walk" : ""} ${className}`}
      shapeRendering="crispEdges"
      aria-hidden="true"
    >
      {map.map((row, y) =>
        row.split("").map((c, x) => (
          <rect key={`${x}-${y}`} x={x} y={y} width={1} height={1} fill={colorOf(c)} />
        ))
      )}
    </svg>
  );
};

/** Pixel sun */
export const PixelSun: React.FC<PixelProps> = ({ size = 8, className = "" }) => (
  <svg width={16 * size} height={16 * size} viewBox="0 0 16 16" className={`pixelated ${className}`} shapeRendering="crispEdges" aria-hidden="true">
    {[
      "000011110000",
      "000122221000",
      "001222222100",
      "012222222210",
      "122223322221",
      "122223322221",
      "122222222221",
      "012222222210",
      "001222222100",
      "000122221000",
      "000011110000",
    ].map((row, y) =>
      row.split("").map((c, x) => {
        const fill = c === "0" ? "transparent" : c === "1" ? "#ffcc4b" : c === "2" ? "#ffe28a" : "#ff9c2b";
        return <rect key={`${x}-${y}`} x={x + 1} y={y + 1} width={1} height={1} fill={fill} />;
      })
    )}
  </svg>
);

/** Pixel moon */
export const PixelMoon: React.FC<PixelProps> = ({ size = 8, className = "" }) => (
  <svg width={14 * size} height={14 * size} viewBox="0 0 14 14" className={`pixelated ${className}`} shapeRendering="crispEdges" aria-hidden="true">
    {[
      "000111100000",
      "001122210000",
      "012222221000",
      "122223222100",
      "122223222100",
      "122222222100",
      "012222221000",
      "001122210000",
      "000111100000",
    ].map((row, y) =>
      row.split("").map((c, x) => {
        const fill = c === "0" ? "transparent" : c === "1" ? "#cfd8e3" : c === "2" ? "#f4f7fb" : "#9aa3b2";
        return <rect key={`${x}-${y}`} x={x + 1} y={y + 1} width={1} height={1} fill={fill} />;
      })
    )}
  </svg>
);

/** Pixel tree */
export const PixelTree: React.FC<PixelProps> = ({ size = 6, className = "" }) => (
  <svg width={12 * size} height={16 * size} viewBox="0 0 12 16" className={`pixelated ${className}`} shapeRendering="crispEdges" aria-hidden="true">
    {/* leaves */}
    {[
      "000111000000",
      "001111100000",
      "011111110000",
      "111111111100",
      "111111111110",
      "111111111111",
      "011111111110",
      "001111111100",
      "000111111000",
    ].map((row, y) =>
      row.split("").map((c, x) => (
        <rect key={`l-${x}-${y}`} x={x} y={y} width={1} height={1} fill={c === "1" ? (x % 3 === 0 ? "#14a35d" : "#2ee892") : "transparent"} />
      ))
    )}
    {/* trunk */}
    {[
      "000110000000",
      "000110000000",
      "000110000000",
      "000110000000",
      "000110000000",
      "000110000000",
    ].map((row, y) =>
      row.split("").map((c, x) => (
        <rect key={`t-${x}-${y}`} x={x} y={y + 9} width={1} height={1} fill={c === "1" ? "#5a3a22" : "transparent"} />
      ))
    )}
  </svg>
);

/** Pixel cloud */
export const PixelCloud: React.FC<PixelProps> = ({ size = 6, className = "" }) => (
  <svg width={20 * size} height={8 * size} viewBox="0 0 20 8" className={`pixelated ${className}`} shapeRendering="crispEdges" aria-hidden="true">
    {[
      "00001111100000000000",
      "00011111111000000000",
      "00111111111110000000",
      "01111111111111110000",
      "01111111111111111100",
      "00111111111111111000",
      "00001111111111100000",
      "00000001111100000000",
    ].map((row, y) =>
      row.split("").map((c, x) => (
        <rect key={`c-${x}-${y}`} x={x} y={y} width={1} height={1} fill={c === "1" ? "#e6f1ff" : "transparent"} />
      ))
    )}
  </svg>
);

/** Pixel trophy */
export const PixelTrophy: React.FC<PixelProps & { color?: string }> = ({ size = 6, className = "", color = "#ffcc4b" }) => (
  <svg width={14 * size} height={14 * size} viewBox="0 0 14 14" className={`pixelated ${className}`} shapeRendering="crispEdges" aria-hidden="true">
    {[
      "000111110000",
      "001122221000",
      "012211112210",
      "012100001210",
      "012211112210",
      "001122221000",
      "000111110000",
      "000011100000",
      "000111110000",
      "001000001000",
      "001000001000",
      "000111110000",
    ].map((row, y) =>
      row.split("").map((c, x) => {
        const fill =
          c === "0" ? "transparent" :
          c === "1" ? color :
          c === "2" ? "#fff7d6" : "transparent";
        return <rect key={`tr-${x}-${y}`} x={x + 1} y={y + 1} width={1} height={1} fill={fill} />;
      })
    )}
  </svg>
);

/** Pixel medal/badge */
export const PixelMedal: React.FC<PixelProps & { color?: string; ring?: string }> = ({
  size = 6,
  className = "",
  color = "#2ee892",
  ring = "#ffcc4b",
}) => (
  <svg width={14 * size} height={14 * size} viewBox="0 0 14 14" className={`pixelated ${className}`} shapeRendering="crispEdges" aria-hidden="true">
    {/* ribbon */}
    {[
      "100000000001",
      "110000000011",
      "011000000110",
      "001100001100",
      "000110011000",
    ].map((row, y) =>
      row.split("").map((c, x) => (
        <rect key={`r-${x}-${y}`} x={x + 1} y={y + 1} width={1} height={1} fill={c === "1" ? ring : "transparent"} />
      ))
    )}
    {/* medal disc */}
    {[
      "000111110000",
      "001122221000",
      "012211112210",
      "012211112210",
      "012211112210",
      "012211112210",
      "001122221000",
      "000111110000",
    ].map((row, y) =>
      row.split("").map((c, x) => {
        const fill = c === "0" ? "transparent" : c === "1" ? "#0a0d14" : color;
        return <rect key={`m-${x}-${y}`} x={x + 1} y={y + 5} width={1} height={1} fill={fill} />;
      })
    )}
  </svg>
);

/** Pixel coin */
export const PixelCoin: React.FC<PixelProps> = ({ size = 6, className = "" }) => (
  <svg width={10 * size} height={10 * size} viewBox="0 0 10 10" className={`pixelated ${className}`} shapeRendering="crispEdges" aria-hidden="true">
    {[
      "00111100",
      "01222210",
      "12000221",
      "12000221",
      "12000221",
      "12000221",
      "01222210",
      "00111100",
    ].map((row, y) =>
      row.split("").map((c, x) => {
        const fill = c === "0" ? "transparent" : c === "1" ? "#a8761b" : c === "2" ? "#ffcc4b" : "transparent";
        return <rect key={`co-${x}-${y}`} x={x + 1} y={y + 1} width={1} height={1} fill={fill} />;
      })
    )}
  </svg>
);

/** Pixel star */
export const PixelStar: React.FC<PixelProps> = ({ size = 4, className = "" }) => (
  <svg width={7 * size} height={7 * size} viewBox="0 0 7 7" className={`pixelated ${className}`} shapeRendering="crispEdges" aria-hidden="true">
    {[
      "00100",
      "01110",
      "11111",
      "01110",
      "00100",
    ].map((row, y) =>
      row.split("").map((c, x) => (
        <rect key={`s-${x}-${y}`} x={x + 1} y={y + 1} width={1} height={1} fill={c === "1" ? "#ffe28a" : "transparent"} />
      ))
    )}
  </svg>
);

/** Pixel heart */
export const PixelHeart: React.FC<PixelProps> = ({ size = 4, className = "" }) => (
  <svg width={9 * size} height={8 * size} viewBox="0 0 9 8" className={`pixelated ${className}`} shapeRendering="crispEdges" aria-hidden="true">
    {[
      "011001100",
      "122112210",
      "122222220",
      "122222220",
      "012222200",
      "001222000",
      "000120000",
      "000010000",
    ].map((row, y) =>
      row.split("").map((c, x) => {
        const fill = c === "0" ? "transparent" : c === "1" ? "#7a1d3f" : "#ff5fa2";
        return <rect key={`h-${x}-${y}`} x={x} y={y} width={1} height={1} fill={fill} />;
      })
    )}
  </svg>
);

/** Pixel icons for About section — chunky 12x12 icons */
export const PixelIcon: React.FC<{
  type: "code" | "robot" | "innovation" | "team" | "circuit" | "rocket";
  size?: number;
  className?: string;
}> = ({ type, size = 5, className = "" }) => {
  const palettes: Record<string, [string, string, string]> = {
    code: ["#0a0d14", "#4be1ff", "#b6f1ff"],
    robot: ["#0a0d14", "#2ee892", "#6cffb0"],
    innovation: ["#0a0d14", "#ffcc4b", "#ffe28a"],
    team: ["#0a0d14", "#ff5fa2", "#ffb3d4"],
    circuit: ["#0a0d14", "#4be1ff", "#2ee892"],
    rocket: ["#0a0d14", "#ff5fa2", "#ffcc4b"],
  };
  const [bg, mid, hi] = palettes[type];
  const grids: Record<string, string[]> = {
    code: [
      "000000000000",
      "000111110000",
      "001000001000",
      "001000101000",
      "001001001000",
      "001010001000",
      "001000001000",
      "001111111000",
      "000000000000",
    ],
    robot: [
      "000111110000",
      "001222222100",
      "012022202210",
      "012222222210",
      "012211112210",
      "012222222210",
      "001222222100",
      "000111110000",
      "000100100100",
    ],
    innovation: [
      "000111110000",
      "001222222100",
      "012022202210",
      "012222222210",
      "012222222210",
      "012022202210",
      "001222222100",
      "000111110000",
      "000000000000",
    ],
    team: [
      "000110011000",
      "001221122100",
      "012022022210",
      "012222222210",
      "001222222100",
      "000110011000",
      "000000000000",
      "000000000000",
      "000000000000",
    ],
    circuit: [
      "100000001001",
      "120000002201",
      "120011112201",
      "100100100001",
      "120100100021",
      "120011112201",
      "120000002201",
      "100000001001",
      "000000000000",
    ],
    rocket: [
      "000011000000",
      "000122100000",
      "001222210000",
      "012022201000",
      "012222221000",
      "012222221000",
      "001222210000",
      "011100110000",
      "010000010000",
    ],
  };
  const grid = grids[type];
  return (
    <svg width={12 * size} height={9 * size} viewBox="0 0 12 9" className={`pixelated ${className}`} shapeRendering="crispEdges" aria-hidden="true">
      {grid.map((row, y) =>
        row.split("").map((c, x) => {
          const fill = c === "0" ? "transparent" : c === "1" ? bg : c === "2" ? mid : hi;
          return <rect key={`${x}-${y}`} x={x} y={y} width={1} height={1} fill={fill} />;
        })
      )}
    </svg>
  );
};

/** Pixel avatar — customizable by skin/hair/shirt colors */
export const PixelAvatar: React.FC<{
  size?: number;
  skin?: string;
  hair?: string;
  shirt?: string;
  pants?: string;
  className?: string;
}> = ({ size = 6, skin = "#f1c79b", hair = "#3a2a1a", shirt = "#4be1ff", pants = "#1aa3d6", className = "" }) => {
  const map = [
    "0000111100000000",
    "0001111111000000",
    "0011111111100000",
    "0112222222110000",
    "0122122122110000",
    "0122222222210000",
    "0122232222210000",
    "0022222222200000",
    "0002222222000000",
    "0044444444000000",
    "4444444444440000",
    "4444444444440000",
    "0444444444400000",
    "0044444444000000",
    "0005555555000000",
    "0005500550000000",
    "0006600660000000",
  ];
  const colorOf = (c: string) => c === "1" ? hair : c === "2" ? skin : c === "3" ? "#0a0d14" : c === "4" ? shirt : c === "5" ? pants : c === "6" ? "#0a0d14" : "transparent";
  return (
    <svg width={16 * size} height={17 * size} viewBox="0 0 16 17" className={`pixelated ${className}`} shapeRendering="crispEdges" aria-hidden="true">
      {map.map((row, y) =>
        row.split("").map((c, x) => (
          <rect key={`${x}-${y}`} x={x} y={y} width={1} height={1} fill={colorOf(c)} />
        ))
      )}
    </svg>
  );
};

/** Pixel landscape background (mountains + ground) */
export const PixelLandscape: React.FC<{ className?: string }> = ({ className = "" }) => (
  <svg
    className={`absolute inset-0 w-full h-full ${className}`}
    viewBox="0 0 512 200"
    preserveAspectRatio="none"
    shapeRendering="crispEdges"
    aria-hidden="true"
  >
    {/* far mountains */}
    <g fill="#1a2238">
      <rect x="0" y="120" width="120" height="80" />
      <rect x="20" y="100" width="80" height="20" />
      <rect x="40" y="90" width="40" height="10" />
      <rect x="180" y="110" width="160" height="90" />
      <rect x="220" y="90" width="80" height="20" />
      <rect x="380" y="115" width="132" height="85" />
      <rect x="410" y="100" width="60" height="15" />
    </g>
    {/* near mountains */}
    <g fill="#243049">
      <rect x="80" y="140" width="120" height="60" />
      <rect x="120" y="125" width="40" height="15" />
      <rect x="260" y="135" width="160" height="65" />
      <rect x="310" y="120" width="60" height="15" />
      <rect x="430" y="138" width="120" height="62" />
    </g>
    {/* ground */}
    <rect x="0" y="170" width="512" height="30" fill="#14a35d" />
    <rect x="0" y="168" width="512" height="2" fill="#2ee892" />
    {/* grass tufts */}
    {Array.from({ length: 32 }).map((_, i) => (
      <rect key={i} x={i * 16 + (i % 3)} y={166} width="2" height="2" fill="#6cffb0" />
    ))}
    {/* dirt specks */}
    {Array.from({ length: 24 }).map((_, i) => (
      <rect key={`d-${i}`} x={(i * 23) % 512} y={185 + (i % 3) * 3} width="2" height="2" fill="#0a4a2a" />
    ))}
  </svg>
);

/** Pixel circuit pattern (background) */
export const CircuitPattern: React.FC<{ className?: string; color?: string }> = ({
  className = "",
  color = "rgba(46,232,146,0.18)",
}) => (
  <svg className={className} viewBox="0 0 200 200" aria-hidden="true">
    <g fill={color} stroke={color} strokeWidth="1">
      <rect x="10" y="10" width="60" height="2" />
      <rect x="68" y="10" width="2" height="40" />
      <rect x="68" y="48" width="40" height="2" />
      <rect x="106" y="48" width="2" height="60" />
      <rect x="106" y="106" width="80" height="2" />
      <rect x="184" y="106" width="2" height="40" />
      <rect x="120" y="144" width="66" height="2" />

      <rect x="140" y="20" width="2" height="50" />
      <rect x="140" y="68" width="40" height="2" />
      <rect x="178" y="68" width="2" height="40" />

      <rect x="30" y="120" width="2" height="60" />
      <rect x="30" y="178" width="60" height="2" />
    </g>
    <g fill={color}>
      {[
        [10, 10], [68, 10], [68, 48], [106, 48], [106, 106], [184, 106], [120, 144],
        [140, 20], [140, 68], [178, 68], [30, 120], [30, 178],
      ].map(([x, y], i) => (
        <rect key={i} x={x} y={y} width="4" height="4" />
      ))}
    </g>
  </svg>
);