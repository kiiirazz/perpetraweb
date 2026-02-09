import {
  Layers,
  TrendingUp,
  ShieldCheck,
  Zap,
  Eye,
  BarChart3,
} from "lucide-react";
import { FadeIn, StaggerContainer, StaggerItem } from "./motion";

const FEATURES = [
  {
    icon: Layers,
    title: "Deep Liquidity",
    description:
      "Shared orderbook via Orderly's infrastructure delivers tight spreads and minimal slippage from day one — no bootstrapping required.",
  },
  {
    icon: TrendingUp,
    title: "Up to 100x Leverage",
    description:
      "Trade BTC, ETH, and SOL with up to 100x leverage. Majors and alts supported with flexible margin across all positions.",
  },
  {
    icon: ShieldCheck,
    title: "Full Self-Custody",
    description:
      "Your keys, your funds — always. Deposit, trade, and withdraw without ever handing custody to a third party.",
  },
  {
    icon: Zap,
    title: "CEX-Grade Execution",
    description:
      "Sub-second order matching on MegaETH's real-time L2. Gasless trading via session keys means zero friction per order.",
  },
  {
    icon: Eye,
    title: "On-Chain Settlement",
    description:
      "Every fill settles on-chain. Verify every trade, every position — full transparency without dark pools or hidden order flow.",
  },
  {
    icon: BarChart3,
    title: "RWA Markets",
    description:
      "Go beyond crypto: trade SPX 500, NASDAQ 100, Gold, Silver, and single-name equities like TSLA and NVDA — all on-chain.",
  },
] as const;

export function Features() {
  return (
    <section id="features" className="relative py-24">
      {/* Subtle section glow */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[800px] h-[400px] rounded-full bg-emerald-500/[0.04] blur-[120px] pointer-events-none" />

      <div className="relative mx-auto max-w-6xl px-6">
        <FadeIn className="text-center mb-16">
          <p className="text-sm text-emerald-400 font-medium uppercase tracking-widest mb-3">
            Why Perpetra
          </p>
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-white tracking-tight">
            Built for serious traders
          </h2>
          <p className="mt-4 text-gray-400 text-lg max-w-2xl mx-auto">
            Everything you need for perpetual futures — speed, depth, and
            control — without compromising on decentralization.
          </p>
        </FadeIn>

        <StaggerContainer className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5">
          {FEATURES.map((feature) => {
            const Icon = feature.icon;
            return (
              <StaggerItem key={feature.title}>
                <div className="group relative h-full">
                  {/* Hover glow border */}
                  <div className="absolute -inset-px rounded-2xl bg-gradient-to-b from-emerald-500/10 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />

                  <div className="relative h-full p-6 rounded-2xl bg-white/[0.02] border border-white/[0.06] group-hover:border-emerald-500/20 transition-colors duration-300">
                    <div className="w-10 h-10 rounded-xl bg-emerald-500/10 flex items-center justify-center mb-4">
                      <Icon className="w-5 h-5 text-emerald-400" />
                    </div>
                    <h3 className="text-lg font-semibold text-white mb-2">
                      {feature.title}
                    </h3>
                    <p className="text-sm text-gray-400 leading-relaxed">
                      {feature.description}
                    </p>
                  </div>
                </div>
              </StaggerItem>
            );
          })}
        </StaggerContainer>
      </div>
    </section>
  );
}
