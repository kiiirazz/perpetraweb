import { ArrowRight } from "lucide-react";
import { FadeIn } from "./motion";
import { HeroAnimation } from "./hero-animation";

export function Hero() {
  return (
    <section className="relative min-h-[100svh] flex flex-col items-center justify-center overflow-hidden pt-20 pb-8">
      {/* ── Background layers ── */}
      <div className="absolute inset-0 bg-[#050A08]" />

      {/* Grid */}
      <div
        className="absolute inset-0"
        style={{
          backgroundImage: [
            "linear-gradient(rgba(52,211,153,0.04) 1px, transparent 1px)",
            "linear-gradient(90deg, rgba(52,211,153,0.04) 1px, transparent 1px)",
          ].join(","),
          backgroundSize: "64px 64px",
          maskImage:
            "radial-gradient(ellipse 80% 60% at 50% 40%, black, transparent)",
          WebkitMaskImage:
            "radial-gradient(ellipse 80% 60% at 50% 40%, black, transparent)",
        }}
      />

      {/* Glow orbs */}
      <div className="absolute top-1/4 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[700px] h-[500px] rounded-full bg-emerald-500/[0.07] blur-[120px] pointer-events-none" />
      <div className="absolute bottom-1/3 right-1/4 w-[400px] h-[400px] rounded-full bg-teal-500/[0.04] blur-[100px] pointer-events-none" />

      {/* ── Content ── */}
      <div className="relative z-10 mx-auto max-w-5xl px-6 text-center">
        {/* Badge */}
        <FadeIn>
          <div className="inline-flex items-center gap-2.5 px-4 py-1.5 rounded-full border border-emerald-500/20 bg-emerald-500/[0.06] mb-8">
            <span className="relative flex h-2 w-2">
              <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-emerald-400 opacity-75" />
              <span className="relative inline-flex h-2 w-2 rounded-full bg-emerald-400" />
            </span>
            <span className="text-sm text-emerald-400 font-medium tracking-wide">
              Live on MegaETH
            </span>
          </div>
        </FadeIn>

        {/* Heading */}
        <FadeIn delay={0.1}>
          <h1 className="text-5xl sm:text-6xl md:text-7xl lg:text-[5.25rem] font-bold tracking-tight leading-[1.05]">
            <span className="text-white">The First Perpetual&nbsp;DEX</span>
            <br />
            <span className="bg-gradient-to-r from-emerald-400 via-emerald-300 to-teal-400 bg-clip-text text-transparent">
              on MegaETH
            </span>
          </h1>
        </FadeIn>

        {/* Subheading */}
        <FadeIn delay={0.2}>
          <p className="mt-6 text-lg md:text-xl text-gray-400 max-w-2xl mx-auto leading-relaxed">
            Institutional-grade perpetuals trading with deep liquidity,
            CEX-level execution, and full self-custody. Powered by Orderly&apos;s
            unified orderbook.
          </p>
        </FadeIn>

        {/* CTAs */}
        <FadeIn delay={0.3}>
          <div className="mt-10 flex flex-col sm:flex-row items-center justify-center gap-4">
            <a
              href="https://app.perpetradex.com"
              className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-8 py-3.5 bg-emerald-500 hover:bg-emerald-400 text-black font-semibold text-base rounded-xl transition-all duration-300 hover:shadow-[0_0_30px_rgba(52,211,153,0.25)]"
            >
              Launch App
              <ArrowRight size={18} />
            </a>
            <a
              href="https://docs.perpetradex.com"
              className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-8 py-3.5 border border-white/10 hover:border-white/20 hover:bg-white/[0.03] text-white font-medium text-base rounded-xl transition-all duration-300"
            >
              Read Docs
            </a>
          </div>
        </FadeIn>

        {/* Animated trading chart */}
        <HeroAnimation />
      </div>

      {/* Bottom fade */}
      <div className="absolute bottom-0 left-0 right-0 h-40 bg-gradient-to-t from-[#050A08] to-transparent pointer-events-none" />
    </section>
  );
}
