const agents = [
  {
    id: "agent-quant-001",
    name: "Quant Momentum Scout",
    category: "Trading",
    price: "$19/mo",
    rating: 4.8,
  },
  {
    id: "agent-defi-002",
    name: "DeFi Yield Curator",
    category: "DeFi",
    price: "$29/mo",
    rating: 4.6,
  },
  {
    id: "agent-risk-003",
    name: "Risk Sentinel",
    category: "Portfolio",
    price: "$24/mo",
    rating: 4.7,
  },
];

export default function AgentsPage() {
  return (
    <main className="container mx-auto flex w-full max-w-6xl flex-col gap-8 px-4 py-8">
      <header className="space-y-2">
        <p className="text-sm font-semibold text-muted-foreground">Agent Marketplace</p>
        <h1 className="text-3xl font-semibold">Discover AI Agents</h1>
        <p className="text-sm text-muted-foreground">
          Browse curated agents for trading, DeFi, portfolio monitoring, and analytics.
        </p>
      </header>

      <section className="grid gap-4 md:grid-cols-3">
        {agents.map((agent) => (
          <article key={agent.id} className="rounded-lg border p-4 shadow-sm">
            <div className="flex items-center justify-between">
              <span className="text-xs font-semibold uppercase text-muted-foreground">
                {agent.category}
              </span>
              <span className="text-xs text-muted-foreground">{agent.price}</span>
            </div>
            <h2 className="mt-3 text-lg font-semibold">{agent.name}</h2>
            <p className="mt-2 text-sm text-muted-foreground">
              Rating {agent.rating} · Streaming responses · Verified creator
            </p>
          </article>
        ))}
      </section>
    </main>
  );
}
