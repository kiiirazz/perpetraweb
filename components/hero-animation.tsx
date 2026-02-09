"use client";

import { motion } from "framer-motion";

/* ------------------------------------------------------------------ */
/*  Candlestick data — bullish uptrend with natural pull-backs         */
/* ------------------------------------------------------------------ */

interface Candle {
  x: number;
  open: number;
  close: number;
  high: number;
  low: number;
}

const CANDLES: Candle[] = [
  // Accumulation
  { x: 55, open: 272, close: 258, high: 252, low: 278 },
  { x: 105, open: 258, close: 266, high: 254, low: 272 },
  // Breakout
  { x: 155, open: 264, close: 240, high: 234, low: 270 },
  { x: 205, open: 240, close: 228, high: 222, low: 246 },
  { x: 255, open: 228, close: 236, high: 224, low: 242 },
  // Strong trend
  { x: 305, open: 234, close: 210, high: 204, low: 240 },
  { x: 355, open: 210, close: 198, high: 192, low: 216 },
  { x: 405, open: 198, close: 208, high: 194, low: 214 },
  { x: 455, open: 206, close: 180, high: 174, low: 212 },
  // Continuation
  { x: 505, open: 180, close: 162, high: 156, low: 186 },
  { x: 555, open: 162, close: 170, high: 158, low: 176 },
  // Rally
  { x: 605, open: 168, close: 138, high: 130, low: 174 },
  { x: 655, open: 138, close: 120, high: 114, low: 144 },
  { x: 705, open: 120, close: 130, high: 116, low: 136 },
  // Finale
  { x: 755, open: 128, close: 95, high: 88, low: 134 },
];

/** Relative volume per candle — bigger bars on breakout candles */
const VOLUMES = [12, 8, 22, 15, 10, 28, 18, 12, 32, 20, 9, 35, 25, 14, 40];

/* ------------------------------------------------------------------ */
/*  Price line that follows the close prices                           */
/* ------------------------------------------------------------------ */

const LINE_POINTS: [number, number][] = [
  [0, 280],
  ...CANDLES.map((c) => [c.x, c.close] as [number, number]),
  [800, 82],
];

/** Attempt to build a smooth cubic-bezier path through the points */
function smoothPath(pts: [number, number][]): string {
  if (pts.length < 2) return "";
  let d = `M ${pts[0][0]} ${pts[0][1]}`;
  for (let i = 1; i < pts.length; i++) {
    const cpx = (pts[i - 1][0] + pts[i][0]) / 2;
    d += ` C ${cpx} ${pts[i - 1][1]}, ${cpx} ${pts[i][1]}, ${pts[i][0]} ${pts[i][1]}`;
  }
  return d;
}

const priceLine = smoothPath(LINE_POINTS);
const areaPath = priceLine + " L 800 340 L 0 340 Z";

/* ------------------------------------------------------------------ */
/*  Horizontal grid lines                                              */
/* ------------------------------------------------------------------ */

const GRID_Y = [100, 160, 220, 280];

/* ------------------------------------------------------------------ */
/*  Animation timing helpers                                           */
/* ------------------------------------------------------------------ */

const LINE_START = 0.3; // when the line starts drawing
const LINE_DUR = 2.2; // how long it takes to draw

/** Sync candle appearance with the line reaching that x position */
function candleDelay(x: number) {
  return LINE_START + (x / 800) * LINE_DUR;
}

const EASE_DRAW: [number, number, number, number] = [0.22, 1, 0.36, 1];

/* ------------------------------------------------------------------ */
/*  Component                                                          */
/* ------------------------------------------------------------------ */

export function HeroAnimation() {
  return (
    <div className="relative w-full mt-12 md:mt-16">
      {/* Soft glow behind the chart */}
      <div className="absolute inset-x-8 inset-y-4 bg-emerald-500/[0.035] blur-[80px] rounded-full pointer-events-none" />

      {/* Subtle perspective tilt */}
      <div style={{ perspective: "1200px" }}>
        <div
          style={{
            transform: "rotateX(3deg)",
            transformOrigin: "center bottom",
          }}
        >
          <svg
            viewBox="0 0 800 340"
            className="w-full h-auto"
            preserveAspectRatio="xMidYMid meet"
            fill="none"
            aria-hidden="true"
            role="img"
          >
            <defs>
              {/* Line gradient — emerald to teal */}
              <linearGradient
                id="line-grad"
                x1="0%"
                y1="0%"
                x2="100%"
                y2="0%"
              >
                <stop offset="0%" stopColor="#059669" />
                <stop offset="50%" stopColor="#34D399" />
                <stop offset="100%" stopColor="#2DD4BF" />
              </linearGradient>

              {/* Area fill — fades to transparent at the bottom */}
              <linearGradient id="area-grad" x1="0" y1="0" x2="0" y2="1">
                <stop offset="0%" stopColor="#34D399" stopOpacity="0.12" />
                <stop offset="100%" stopColor="#34D399" stopOpacity="0" />
              </linearGradient>
            </defs>

            {/* ── Grid ── */}
            {GRID_Y.map((y) => (
              <motion.line
                key={y}
                x1="0"
                y1={y}
                x2="800"
                y2={y}
                stroke="white"
                strokeOpacity="0.035"
                strokeDasharray="4 6"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ duration: 0.8, delay: 0.1 }}
              />
            ))}

            {/* ── Area fill ── */}
            <motion.path
              d={areaPath}
              fill="url(#area-grad)"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 1.6, delay: 1.0, ease: "easeOut" }}
            />

            {/* ── Price line glow (wider, softer duplicate) ── */}
            <motion.path
              d={priceLine}
              stroke="#34D399"
              strokeWidth={8}
              strokeOpacity={0.12}
              strokeLinecap="round"
              fill="none"
              initial={{ pathLength: 0 }}
              animate={{ pathLength: 1 }}
              transition={{
                duration: LINE_DUR,
                ease: EASE_DRAW,
                delay: LINE_START,
              }}
            />

            {/* ── Price line ── */}
            <motion.path
              d={priceLine}
              stroke="url(#line-grad)"
              strokeWidth={2.5}
              strokeLinecap="round"
              fill="none"
              initial={{ pathLength: 0 }}
              animate={{ pathLength: 1 }}
              transition={{
                duration: LINE_DUR,
                ease: EASE_DRAW,
                delay: LINE_START,
              }}
            />

            {/* ── Candlesticks ── */}
            {CANDLES.map((c, i) => {
              const isGreen = c.close < c.open;
              const color = isGreen ? "#34D399" : "#F87171";
              const bodyTop = Math.min(c.open, c.close);
              const bodyHeight = Math.max(Math.abs(c.open - c.close), 2);
              const delay = candleDelay(c.x);

              return (
                <motion.g
                  key={i}
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  transition={{ duration: 0.4, delay }}
                >
                  {/* Wick */}
                  <line
                    x1={c.x}
                    y1={c.high}
                    x2={c.x}
                    y2={c.low}
                    stroke={color}
                    strokeWidth={1.2}
                    strokeOpacity={0.45}
                  />
                  {/* Body */}
                  <rect
                    x={c.x - 10}
                    y={bodyTop}
                    width={20}
                    height={bodyHeight}
                    rx={2}
                    fill={color}
                    fillOpacity={isGreen ? 0.75 : 0.45}
                  />
                </motion.g>
              );
            })}

            {/* ── Volume bars ── */}
            {CANDLES.map((c, i) => {
              const isGreen = c.close < c.open;
              return (
                <motion.rect
                  key={`v-${i}`}
                  x={c.x - 8}
                  y={320 - VOLUMES[i]}
                  width={16}
                  height={VOLUMES[i]}
                  rx={1.5}
                  fill={isGreen ? "#34D399" : "#F87171"}
                  fillOpacity={0.12}
                  initial={{ scaleY: 0, opacity: 0 }}
                  animate={{ scaleY: 1, opacity: 1 }}
                  transition={{
                    duration: 0.35,
                    delay: candleDelay(c.x) + 0.08,
                  }}
                  style={{ transformOrigin: `${c.x}px 320px` }}
                />
              );
            })}

            {/* ── Tracking dot (pulse) at last candle close ── */}
            {/* Outer glow */}
            <motion.circle
              cx={755}
              cy={95}
              r={18}
              fill="#34D399"
              fillOpacity={0.1}
              initial={{ opacity: 0, scale: 0.5 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ delay: LINE_START + LINE_DUR - 0.2, duration: 0.5 }}
            >
              <animate
                attributeName="r"
                values="14;22;14"
                dur="3s"
                repeatCount="indefinite"
              />
              <animate
                attributeName="fill-opacity"
                values="0.12;0.04;0.12"
                dur="3s"
                repeatCount="indefinite"
              />
            </motion.circle>

            {/* Inner dot */}
            <motion.circle
              cx={755}
              cy={95}
              r={5}
              fill="#34D399"
              initial={{ opacity: 0, scale: 0 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{
                delay: LINE_START + LINE_DUR - 0.2,
                duration: 0.4,
                type: "spring",
                stiffness: 300,
              }}
            >
              <animate
                attributeName="r"
                values="4;6;4"
                dur="2s"
                repeatCount="indefinite"
              />
            </motion.circle>
          </svg>
        </div>
      </div>

      {/* ── Floating labels ── */}

      {/* ETH-PERP badge — sm+ */}
      <motion.div
        className="absolute top-[6%] right-[4%] hidden sm:flex items-center gap-2 px-3 py-1.5 rounded-lg bg-emerald-500/10 border border-emerald-500/20 backdrop-blur-sm"
        initial={{ opacity: 0, y: 10 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 2.6, duration: 0.5 }}
      >
        <span className="w-1.5 h-1.5 rounded-full bg-emerald-400 shrink-0" />
        <span className="text-[11px] font-semibold text-emerald-400 whitespace-nowrap">
          ETH-PERP
        </span>
        <span className="text-[11px] font-bold text-emerald-300">+2.41%</span>
      </motion.div>

      {/* Order filled badge — md+ */}
      <motion.div
        className="absolute top-[22%] left-[6%] hidden md:flex items-center gap-2 px-3 py-1.5 rounded-lg bg-white/[0.04] border border-white/[0.08] backdrop-blur-sm"
        initial={{ opacity: 0, y: 10 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 2.9, duration: 0.5 }}
      >
        <span className="text-[11px] text-gray-500">Filled</span>
        <span className="text-[11px] font-semibold text-white">
          $3,241.50
        </span>
      </motion.div>

      {/* Long 10x badge — lg+ */}
      <motion.div
        className="absolute bottom-[28%] right-[10%] hidden lg:flex items-center gap-1.5 px-3 py-1.5 rounded-lg bg-emerald-500/[0.08] border border-emerald-500/15 backdrop-blur-sm"
        initial={{ opacity: 0, y: 10 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 3.1, duration: 0.5 }}
      >
        <span className="text-[11px] font-semibold text-emerald-400">
          Long
        </span>
        <span className="text-[11px] font-bold text-emerald-300">10x</span>
      </motion.div>

      {/* ── Edge fades ── */}
      <div className="absolute top-0 left-0 bottom-0 w-8 sm:w-16 bg-gradient-to-r from-[#050A08] to-transparent pointer-events-none z-10" />
      <div className="absolute top-0 right-0 bottom-0 w-8 sm:w-16 bg-gradient-to-l from-[#050A08] to-transparent pointer-events-none z-10" />
      <div className="absolute bottom-0 left-0 right-0 h-12 sm:h-20 bg-gradient-to-t from-[#050A08] to-transparent pointer-events-none z-10" />
    </div>
  );
}
