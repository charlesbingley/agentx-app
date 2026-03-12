export default function SettingsPage() {
  return (
    <main className="container mx-auto flex w-full max-w-4xl flex-col gap-6 px-4 py-8">
      <header className="space-y-2">
        <p className="text-sm font-semibold text-muted-foreground">Account Settings</p>
        <h1 className="text-3xl font-semibold">Profile & API Keys</h1>
        <p className="text-sm text-muted-foreground">
          Manage authentication methods, API keys, and notification preferences.
        </p>
      </header>

      <section className="rounded-lg border p-4 text-sm text-muted-foreground">
        Settings forms will align with Supabase Auth and API key management.
      </section>
    </main>
  );
}
