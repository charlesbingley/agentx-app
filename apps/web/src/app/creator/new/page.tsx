export default function CreatorNewAgentPage() {
  return (
    <main className="container mx-auto flex w-full max-w-4xl flex-col gap-6 px-4 py-8">
      <header className="space-y-2">
        <p className="text-sm font-semibold text-muted-foreground">Creator Center</p>
        <h1 className="text-3xl font-semibold">Publish New Agent</h1>
        <p className="text-sm text-muted-foreground">
          Upload prompts, set pricing, and configure streaming responses.
        </p>
      </header>

      <section className="rounded-lg border p-4 text-sm text-muted-foreground">
        Agent creation form will align with Prompt Manager and pricing rules.
      </section>
    </main>
  );
}
