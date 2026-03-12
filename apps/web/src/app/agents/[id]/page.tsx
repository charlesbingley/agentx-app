type AgentDetailPageProps = {
  params: {
    id: string;
  };
};

export default function AgentDetailPage({ params }: AgentDetailPageProps) {
  return (
    <main className="container mx-auto flex w-full max-w-4xl flex-col gap-6 px-4 py-8">
      <header className="space-y-2">
        <p className="text-sm font-semibold text-muted-foreground">Agent Detail</p>
        <h1 className="text-3xl font-semibold">Agent {params.id}</h1>
        <p className="text-sm text-muted-foreground">
          Live execution, streaming output, and pricing insights will live here.
        </p>
      </header>

      <section className="grid gap-4 rounded-lg border p-4">
        <div className="flex items-center justify-between">
          <span className="text-sm font-medium">Execution status</span>
          <span className="rounded-full bg-emerald-100 px-2 py-0.5 text-xs font-semibold text-emerald-700">
            Ready
          </span>
        </div>
        <div className="text-sm text-muted-foreground">
          Configure prompt templates, choose a model, and stream results in real time.
        </div>
      </section>
    </main>
  );
}
