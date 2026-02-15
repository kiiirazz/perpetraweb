import { ArrowRight } from "lucide-react";
import { FadeIn } from "./motion";

export function CTA() {
  return (
    <section className="relative py-28 overflow-hidden">
      {/* Gradient background */}
      <div className="absolute inset-0 bg-gradient-to-b from-emerald-500/[0.06] via-emerald-500/[0.03] to-transparent" />

      {/* Grid */}
      <div
        className="absolute inset-0"
        style={{
          backgroundImage: [
            "linear-gradient(rgba(52,211,153,0.03) 1px, transparent 1px)",
            "linear-gradient(90deg, rgba(52,211,153,0.03) 1px, transparent 1px)",
          ].join(","),
          backgroundSize: "64px 64px",
          maskImage:
            "radial-gradient(ellipse 60% 80% at 50% 30%, black, transparent)",
          WebkitMaskImage:
            "radial-gradient(ellipse 60% 80% at 50% 30%, black, transparent)",
        }}
      />

      {/* Glow orb */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[500px] h-[300px] rounded-full bg-emerald-500/[0.08] blur-[100px] pointer-events-none" />

      <div className="relative mx-auto max-w-3xl px-6 text-center">
        <FadeIn>
          <h2 className="text-4xl sm:text-5xl md:text-6xl font-bold text-white tracking-tight">
            Ready to trade?
          </h2>
        </FadeIn>

        <FadeIn delay={0.1}>
          <p className="mt-5 text-lg text-gray-400 max-w-lg mx-auto leading-relaxed">
            Join the first perpetual DEX on MegaETH. Deep liquidity,
            institutional-grade execution, and full self-custody — from your
            first trade.
          </p>
        </FadeIn>

        <FadeIn delay={0.2}>
          <div className="mt-10 flex flex-col sm:flex-row items-center justify-center gap-4">
            <a
              href="https://app.perpetradex.com"
              className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-10 py-4 bg-emerald-500 hover:bg-emerald-400 text-black font-semibold text-lg rounded-xl transition-all duration-300 hover:shadow-[0_0_40px_rgba(52,211,153,0.3)]"
            >
              Launch App
              <ArrowRight size={20} />
            </a>
            <a
              href="https://docs.perpetradex.com"
              className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-10 py-4 border border-white/10 hover:border-white/20 hover:bg-white/[0.03] text-white font-medium text-lg rounded-xl transition-all duration-300"
            >
              Read Docs
            </a>
          </div>
        </FadeIn>
      </div>
    </section>
  );
}
