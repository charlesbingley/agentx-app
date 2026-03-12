import SignInForm from "@/components/sign-in-form";

export default function AuthLoginPage() {
  return (
    <main className="container mx-auto flex w-full max-w-lg flex-col gap-6 px-4 py-8">
      <header className="space-y-2">
        <p className="text-sm font-semibold text-muted-foreground">Authentication</p>
        <h1 className="text-3xl font-semibold">Login</h1>
        <p className="text-sm text-muted-foreground">
          Use email or wallet sign-in to access your dashboard.
        </p>
      </header>
      <SignInForm />
    </main>
  );
}
