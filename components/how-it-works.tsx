import { Wallet, CircleDollarSign, ArrowUpDown } from "lucide-react";
import { FadeIn, StaggerContainer, StaggerItem } from "./motion";

const STEPS = [
  {
    icon: Wallet,
    number: "01",
    title: "Connect Wallet",
    description:
      "Use MetaMask, Rabby, or any EVM-compatible wallet. MegaETH is EVM-native — your existing setup works out of the box.",
  },
  {
    icon: CircleDollarSign,
    number: "02",
    title: "Deposit USDC",
    description:
      "Fund your account with USDC as collateral. One-time registration, then you're ready for gasless trading with session keys.",
  },
  {
    icon: ArrowUpDown,
    number: "03",
    title: "Start Trading",
    description:
      "Open positions with up to 100x leverage. Market, limit, stop-loss, and take-profit orders — all with one-click execution.",
  },
] as const;

export function HowItWorks() {
  return (
    <section id="how-it-works" className="relative py-24">
      <div className="mx-auto max-w-6xl px-6">
        <FadeIn className="text-center mb-16">
          <p className="text-sm text-emerald-400 font-medium uppercase tracking-widest mb-3">
            Get started
          </p>
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-white tracking-tight">
            Trading in three steps
          </h2>
          <p className="mt-4 text-gray-400 text-lg max-w-xl mx-auto">
            From wallet to first trade in under five minutes.
          </p>
        </FadeIn>

        <StaggerContainer className="grid grid-cols-1 md:grid-cols-3 gap-6 md:gap-5">
          {STEPS.map((step, i) => {
            const Icon = step.icon;
            return (
              <StaggerItem key={step.number}>
                <div className="relative h-full p-8 rounded-2xl border border-white/[0.06] bg-white/[0.02]">
                  {/* Step number */}
                  <span className="absolute top-6 right-6 text-5xl font-bold text-white/[0.04] select-none">
                    {step.number}
                  </span>

                  <div className="relative">
                    <div className="w-12 h-12 rounded-xl bg-emerald-500/10 border border-emerald-500/20 flex items-center justify-center mb-5">
                      <Icon className="w-6 h-6 text-emerald-400" />
                    </div>
                    <h3 className="text-xl font-semibold text-white mb-2">
                      {step.title}
                    </h3>
                    <p className="text-sm text-gray-400 leading-relaxed">
                      {step.description}
                    </p>
                  </div>

                  {/* Connector line — hidden on mobile, visible on md+ except last */}
                  {i < STEPS.length - 1 && (
                    <div className="hidden md:block absolute top-1/2 -right-3 w-6 h-px bg-gradient-to-r from-emerald-500/30 to-transparent" />
                  )}
                </div>
              </StaggerItem>
            );
          })}
        </StaggerContainer>
      </div>
    </section>
  );
}
