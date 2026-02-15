const PRODUCT_LINKS = [
  { label: "Trade", href: "https://docs.perpetradex.com/trading/overview" },
  { label: "Documentation", href: "https://docs.perpetradex.com" },
  { label: "Fees", href: "https://docs.perpetradex.com/reference/fees" },
  { label: "Markets", href: "https://docs.perpetradex.com/reference/markets" },
] as const;

const COMMUNITY_LINKS = [
  { label: "X (Twitter)", href: "https://x.com/perpetra_dex" },
  { label: "Telegram", href: "https://t.me/PerpetraTG" },
] as const;

const ECOSYSTEM_LINKS = [
  { label: "MegaETH", href: "https://megaeth.com" },
  { label: "Orderly Network", href: "https://orderly.network" },
] as const;

function LinkColumn({
  title,
  links,
}: {
  title: string;
  links: ReadonlyArray<{ label: string; href: string }>;
}) {
  return (
    <div>
      <h4 className="text-sm font-semibold text-white mb-4">{title}</h4>
      <ul className="space-y-2.5">
        {links.map((link) => (
          <li key={link.label}>
            <a
              href={link.href}
              target="_blank"
              rel="noopener noreferrer"
              className="text-sm text-gray-500 hover:text-gray-300 transition-colors duration-200"
            >
              {link.label}
            </a>
          </li>
        ))}
      </ul>
    </div>
  );
}

export function Footer() {
  return (
    <footer className="border-t border-white/[0.06]">
      <div className="mx-auto max-w-7xl px-6 pt-14 pb-8">
        {/* Top section */}
        <div className="flex flex-col lg:flex-row items-start justify-between gap-12 lg:gap-8">
          {/* Brand */}
          <div className="max-w-xs">
            <img src="/logo.svg" alt="Perpetra" className="h-7 w-auto mb-4" />
            <p className="text-sm text-gray-500 leading-relaxed">
              The first perpetual DEX on MegaETH, built on Orderly&apos;s
              infrastructure for deep liquidity and CEX-grade execution.
            </p>
          </div>

          {/* Links */}
          <div className="grid grid-cols-2 sm:grid-cols-3 gap-10 lg:gap-16">
            <LinkColumn title="Product" links={PRODUCT_LINKS} />
            <LinkColumn title="Community" links={COMMUNITY_LINKS} />
            <LinkColumn title="Ecosystem" links={ECOSYSTEM_LINKS} />
          </div>
        </div>

        {/* Bottom bar */}
        <div className="mt-14 pt-6 border-t border-white/[0.06] flex flex-col sm:flex-row items-center justify-between gap-4">
          <p className="text-xs text-gray-600">
            &copy; {new Date().getFullYear()} Perpetra. All rights reserved.
          </p>
          <div className="flex items-center gap-5">
            {/* Twitter / X */}
            <a
              href="https://x.com/perpetra_dex"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="X (Twitter)"
              className="text-gray-600 hover:text-gray-400 transition-colors"
            >
              <svg
                width="16"
                height="16"
                viewBox="0 0 24 24"
                fill="currentColor"
              >
                <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z" />
              </svg>
            </a>
            {/* Telegram */}
            <a
              href="https://t.me/PerpetraTG"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Telegram"
              className="text-gray-600 hover:text-gray-400 transition-colors"
            >
              <svg
                width="17"
                height="17"
                viewBox="0 0 24 24"
                fill="currentColor"
              >
                <path d="M11.944 0A12 12 0 0 0 0 12a12 12 0 0 0 12 12 12 12 0 0 0 12-12A12 12 0 0 0 12 0a12 12 0 0 0-.056 0zm4.962 7.224c.1-.002.321.023.465.14a.506.506 0 0 1 .171.325c.016.093.036.306.02.472-.18 1.898-.962 6.502-1.36 8.627-.168.9-.499 1.201-.82 1.23-.696.065-1.225-.46-1.9-.902-1.056-.693-1.653-1.124-2.678-1.8-1.185-.78-.417-1.21.258-1.91.177-.184 3.247-2.977 3.307-3.23.007-.032.014-.15-.056-.212s-.174-.041-.249-.024c-.106.024-1.793 1.14-5.061 3.345-.479.33-.913.49-1.302.48-.428-.008-1.252-.241-1.865-.44-.752-.245-1.349-.374-1.297-.789.027-.216.325-.437.893-.663 3.498-1.524 5.83-2.529 6.998-3.014 3.332-1.386 4.025-1.627 4.476-1.635z" />
              </svg>
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
}
