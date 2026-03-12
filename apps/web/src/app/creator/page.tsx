export default function CreatorHubPage() {
  return (
    <main className="container mx-auto flex w-full max-w-5xl flex-col gap-6 px-4 py-8">
      <header className="space-y-2">
        <p className="text-sm font-semibold text-muted-foreground">Creator Center</p>
        <h1 className="text-3xl font-semibold">Manage Your Agents</h1>
        <p className="text-sm text-muted-foreground">
          Track earnings, update prompts, and manage on-chain listings.
        </p>
      </header>

      <section className="grid gap-4 md:grid-cols-2">
        <article className="rounded-lg border p-4">
          <h2 className="text-lg font-semibold">Revenue Snapshot</h2>
          <p className="mt-2 text-sm text-muted-foreground">
            80% creator share, payouts settled daily.
          </p>
        </article>
        <article className="rounded-lg border p-4">
          <h2 className="text-lg font-semibold">Pending Reviews</h2>
          <p className="mt-2 text-sm text-muted-foreground">
            2 agents awaiting approval and on-chain verification.
          </p>
        </article>
      </section>
    </main>
  );
}
