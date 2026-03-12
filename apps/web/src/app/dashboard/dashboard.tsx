"use client";

import type { Session } from "@supabase/supabase-js";
import { useQuery } from "@tanstack/react-query";

import { trpc } from "@/utils/trpc";

type DashboardProps = {
  session: Session;
};

export default function Dashboard({ session }: DashboardProps) {
  const privateData = useQuery(trpc.privateData.queryOptions());

  return (
    <>
      <p>Signed in as {session.user.email}</p>
      <p>API: {privateData.data?.message}</p>
    </>
  );
}
