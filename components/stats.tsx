"use client";

import { CountUp, FadeIn, StaggerContainer, StaggerItem } from "./motion";

const STATS = [
  { value: 100, suffix: "x", label: "Max Leverage" },
  { prefix: "<", value: 10, suffix: "ms", label: "Block Time" },
  { value: 0.03, suffix: "%", label: "Taker Fees", decimals: 2 },
  { value: 30, suffix: "+", label: "Trading Pairs" },
] as const;

export function Stats() {
  return (
    <section className="relative py-20">
      <div className="mx-auto max-w-5xl px-6">
        <StaggerContainer className="grid grid-cols-2 md:grid-cols-4 gap-6 md:gap-4">
          {STATS.map((stat) => (
            <StaggerItem key={stat.label}>
              <div className="relative text-center p-6 rounded-2xl border border-white/[0.06] bg-white/[0.015]">
                <p className="text-3xl sm:text-4xl md:text-[2.75rem] font-bold text-white tracking-tight">
                  <CountUp
                    end={stat.value}
                    suffix={stat.suffix}
                    prefix={"prefix" in stat ? stat.prefix : ""}
                    decimals={"decimals" in stat ? stat.decimals : 0}
                  />
                </p>
                <p className="mt-1.5 text-sm text-gray-500 font-medium">
                  {stat.label}
                </p>
              </div>
            </StaggerItem>
          ))}
        </StaggerContainer>
      </div>
    </section>
  );
}
