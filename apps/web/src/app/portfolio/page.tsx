export default function PortfolioPage() {
  return (
    <main className="container mx-auto flex w-full max-w-5xl flex-col gap-6 px-4 py-8">
      <header className="space-y-2">
        <p className="text-sm font-semibold text-muted-foreground">Trading Module</p>
        <h1 className="text-3xl font-semibold">Portfolio Tracker</h1>
        <p className="text-sm text-muted-foreground">
          Real-time P&amp;L, exposure, and risk metrics from connected exchanges.
        </p>
      </header>

      <section className="rounded-lg border p-4 text-sm text-muted-foreground">
        Charts powered by TradingView Lightweight Charts will appear here.
      </section>
    </main>
  );
}
