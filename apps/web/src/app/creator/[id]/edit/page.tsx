type CreatorEditPageProps = {
  params: {
    id: string;
  };
};

export default function CreatorEditPage({ params }: CreatorEditPageProps) {
  return (
    <main className="container mx-auto flex w-full max-w-4xl flex-col gap-6 px-4 py-8">
      <header className="space-y-2">
        <p className="text-sm font-semibold text-muted-foreground">Creator Center</p>
        <h1 className="text-3xl font-semibold">Edit Agent {params.id}</h1>
        <p className="text-sm text-muted-foreground">
          Update prompts, pricing tiers, and on-chain metadata.
        </p>
      </header>

      <section className="rounded-lg border p-4 text-sm text-muted-foreground">
        Agent edit form will include versioned prompt templates and validation.
      </section>
    </main>
  );
}
