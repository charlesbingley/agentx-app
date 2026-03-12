
import { redirect } from "next/navigation";

import { createSupabaseServerClient } from "@/lib/supabase/server";

import Dashboard from "./dashboard";

export default async function DashboardPage() {
  const supabase = createSupabaseServerClient();
  const { data } = await supabase.auth.getSession();

  if (!data.session?.user) {
    redirect("/auth/login");
  }

  return (
    <div>
      <h1>Dashboard</h1>
      <p>Welcome {data.session.user.email}</p>
      <Dashboard session={data.session} />
    </div>
  );
}
