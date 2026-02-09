import { FadeIn } from "./motion";

const PARTNERS = [
  {
    name: "MegaETH",
    role: "Blockchain",
    description: "Real-time L2 with sub-10 ms blocks and 100 k+ TPS",
    href: "https://megaeth.com",
  },
  {
    name: "Orderly Network",
    role: "Infrastructure",
    description: "Unified orderbook with institutional-grade liquidity",
    href: "https://orderly.network",
  },
] as const;

export function TrustBar() {
  return (
    <section className="relative py-20 border-y border-white/[0.04]">
      <div className="mx-auto max-w-5xl px-6">
        <FadeIn>
          <p className="text-center text-sm text-gray-500 uppercase tracking-widest font-medium mb-10">
            Built on leading infrastructure
          </p>
        </FadeIn>

        <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 max-w-2xl mx-auto">
          {PARTNERS.map((p) => (
            <FadeIn key={p.name}>
              <a
                href={p.href}
                target="_blank"
                rel="noopener noreferrer"
                className="group flex flex-col items-center text-center p-6 rounded-2xl border border-white/[0.06] bg-white/[0.02] hover:border-emerald-500/20 hover:bg-emerald-500/[0.03] transition-all duration-300"
              >
                <span className="text-xs text-emerald-400/80 uppercase tracking-wider font-medium mb-1">
                  {p.role}
                </span>
                <span className="text-lg font-semibold text-white mb-1.5">
                  {p.name}
                </span>
                <span className="text-sm text-gray-500 leading-relaxed">
                  {p.description}
                </span>
              </a>
            </FadeIn>
          ))}
        </div>
      </div>
    </section>
  );
}
