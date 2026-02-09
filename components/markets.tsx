import { FadeIn, StaggerContainer, StaggerItem } from "./motion";

const MARKET_GROUPS = [
  {
    label: "Major Markets",
    leverage: "100x",
    pairs: ["BTC-PERP", "ETH-PERP", "SOL-PERP"],
    accent: true,
  },
  {
    label: "DeFi & L1/L2",
    leverage: "10–20x",
    pairs: [
      "ARB-PERP",
      "OP-PERP",
      "LINK-PERP",
      "SUI-PERP",
      "AVAX-PERP",
      "ADA-PERP",
      "APT-PERP",
      "SEI-PERP",
      "TRX-PERP",
      "JUP-PERP",
    ],
    accent: false,
  },
  {
    label: "RWA & Equities",
    leverage: "Up to 20x",
    pairs: ["SPX500", "NAS100", "XAU", "XAG", "TSLA", "NVDA", "GOOGL"],
    accent: false,
  },
] as const;

export function Markets() {
  return (
    <section id="markets" className="relative py-24">
      {/* Section glow */}
      <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-[600px] h-[300px] rounded-full bg-emerald-500/[0.04] blur-[100px] pointer-events-none" />

      <div className="relative mx-auto max-w-6xl px-6">
        <FadeIn className="text-center mb-16">
          <p className="text-sm text-emerald-400 font-medium uppercase tracking-widest mb-3">
            Markets
          </p>
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-white tracking-tight">
            Crypto, RWA, and beyond
          </h2>
          <p className="mt-4 text-gray-400 text-lg max-w-2xl mx-auto">
            From Bitcoin to the S&amp;P 500 — trade perpetual futures across
            crypto majors, DeFi tokens, and real-world assets.
          </p>
        </FadeIn>

        <StaggerContainer className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {MARKET_GROUPS.map((group) => (
            <StaggerItem key={group.label}>
              <div
                className={`h-full p-6 rounded-2xl border transition-colors duration-300 ${
                  group.accent
                    ? "border-emerald-500/20 bg-emerald-500/[0.04]"
                    : "border-white/[0.06] bg-white/[0.02]"
                }`}
              >
                <div className="flex items-center justify-between mb-5">
                  <h3 className="text-lg font-semibold text-white">
                    {group.label}
                  </h3>
                  <span
                    className={`text-xs font-semibold px-2.5 py-1 rounded-full ${
                      group.accent
                        ? "bg-emerald-500/20 text-emerald-400"
                        : "bg-white/[0.06] text-gray-400"
                    }`}
                  >
                    {group.leverage}
                  </span>
                </div>

                <div className="flex flex-wrap gap-2">
                  {group.pairs.map((pair) => (
                    <span
                      key={pair}
                      className="text-sm px-3 py-1.5 rounded-lg bg-white/[0.04] border border-white/[0.06] text-gray-300 font-medium"
                    >
                      {pair}
                    </span>
                  ))}
                </div>
              </div>
            </StaggerItem>
          ))}
        </StaggerContainer>
      </div>
    </section>
  );
}
