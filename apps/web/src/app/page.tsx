"use client";

import Link from "next/link";

const highlights = [
  {
    title: "Streaming Execution",
    description: "Sub-2s first token delivery with live progress updates.",
  },
  {
    title: "Creator Revenue",
    description: "80% revenue share with automated daily settlements.",
  },
  {
    title: "Multi-Chain Ready",
    description: "Ethereum, Arbitrum, and Base support with wallet gating.",
  },
];

export default function Home() {
  return (
    <main className="container mx-auto flex w-full max-w-6xl flex-col gap-10 px-4 py-10">
      <section className="grid gap-6 rounded-2xl border bg-muted/20 p-6 md:grid-cols-[1.2fr_0.8fr]">
        <div className="space-y-4">
          <p className="text-sm font-semibold text-muted-foreground">AgentX Marketplace</p>
          <h1 className="text-4xl font-semibold tracking-tight">
            Discover, subscribe, and execute AI agents for Web3 trading.
          </h1>
          <p className="text-sm text-muted-foreground">
            Built for low-latency streaming, creator monetization, and multi-chain execution.
          </p>
          <div className="flex flex-wrap gap-3">
            <Link
              className="rounded-md bg-foreground px-4 py-2 text-sm font-semibold text-background"
              href="/agents"
            >
              Browse agents
            </Link>
            <Link
              className="rounded-md border px-4 py-2 text-sm font-semibold"
              href="/creator"
            >
              Creator center
            </Link>
          </div>
        </div>
        <div className="grid gap-4">
          {highlights.map((item) => (
            <div key={item.title} className="rounded-lg border bg-background p-4">
              <h2 className="text-lg font-semibold">{item.title}</h2>
              <p className="mt-2 text-sm text-muted-foreground">{item.description}</p>
            </div>
          ))}
        </div>
      </section>

      <section className="grid gap-4 md:grid-cols-3">
        <div className="rounded-lg border p-4">
          <p className="text-xs font-semibold uppercase text-muted-foreground">Latency</p>
          <p className="mt-2 text-2xl font-semibold">&lt; 2s</p>
          <p className="text-sm text-muted-foreground">P95 first-token response</p>
        </div>
        <div className="rounded-lg border p-4">
          <p className="text-xs font-semibold uppercase text-muted-foreground">Availability</p>
          <p className="mt-2 text-2xl font-semibold">99.9%</p>
          <p className="text-sm text-muted-foreground">API uptime target</p>
        </div>
        <div className="rounded-lg border p-4">
          <p className="text-xs font-semibold uppercase text-muted-foreground">Concurrency</p>
          <p className="mt-2 text-2xl font-semibold">5k+</p>
          <p className="text-sm text-muted-foreground">WebSocket sessions</p>
        </div>
      </section>
    </main>
  );
}
