export default function AnalyticsPage() {
  return (
    <main className="container mx-auto flex w-full max-w-5xl flex-col gap-6 px-4 py-8">
      <header className="space-y-2">
        <p className="text-sm font-semibold text-muted-foreground">Analytics</p>
        <h1 className="text-3xl font-semibold">Usage & Revenue</h1>
        <p className="text-sm text-muted-foreground">
          Track execution volume, subscriber growth, and revenue share.
        </p>
      </header>

      <section className="rounded-lg border p-4 text-sm text-muted-foreground">
        Usage charts, retention, and cohort analysis will live here.
      </section>
    </main>
  );
}
