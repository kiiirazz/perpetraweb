import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";

const inter = Inter({
  subsets: ["latin"],
  display: "swap",
  variable: "--font-inter",
});

export const metadata: Metadata = {
  title: "Perpetra — The First Perpetual DEX on MegaETH",
  description:
    "Institutional-grade perpetuals trading with deep liquidity, CEX-level execution, and full self-custody. Built on Orderly's unified orderbook infrastructure on MegaETH.",
  keywords: [
    "perpetual DEX",
    "MegaETH",
    "DeFi",
    "perpetual futures",
    "decentralized exchange",
    "Orderly",
    "self-custody",
    "crypto trading",
    "leverage trading",
  ],
  openGraph: {
    title: "Perpetra — The First Perpetual DEX on MegaETH",
    description:
      "Trade perpetual futures with up to 100x leverage, deep liquidity, and full self-custody on MegaETH.",
    url: "https://perpetra.xyz",
    siteName: "Perpetra",
    type: "website",
    locale: "en_US",
  },
  twitter: {
    card: "summary_large_image",
    title: "Perpetra — The First Perpetual DEX on MegaETH",
    description:
      "Trade perpetual futures with up to 100x leverage, deep liquidity, and full self-custody on MegaETH.",
    creator: "@perpetra",
  },
  robots: { index: true, follow: true },
  metadataBase: new URL("https://perpetra.xyz"),
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={inter.variable}>
      <body className="font-sans antialiased">{children}</body>
    </html>
  );
}
