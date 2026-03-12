import SignUpForm from "@/components/sign-up-form";

export default function AuthSignupPage() {
  return (
    <main className="container mx-auto flex w-full max-w-lg flex-col gap-6 px-4 py-8">
      <header className="space-y-2">
        <p className="text-sm font-semibold text-muted-foreground">Authentication</p>
        <h1 className="text-3xl font-semibold">Create Account</h1>
        <p className="text-sm text-muted-foreground">
          Join AgentX to publish, subscribe, and run AI agents.
        </p>
      </header>
      <SignUpForm />
    </main>
  );
}
