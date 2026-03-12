import { createServerClient } from "@supabase/ssr";
import type { NextRequest } from "next/server";

const supabaseUrl = process.env.NEXT_PUBLIC_SUPABASE_URL ?? "";
const supabaseAnonKey = process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY ?? "";

export const createSupabaseServerClient = (req: NextRequest) => {
  if (!supabaseUrl || !supabaseAnonKey) {
    throw new Error("Missing Supabase environment variables");
  }

  return createServerClient(supabaseUrl, supabaseAnonKey, {
    cookies: {
      getAll: () => req.cookies.getAll(),
      setAll: () => {
        // No-op: route handlers can’t set cookies here.
      },
    },
  });
};

export const getSession = async (req: NextRequest) => {
  const supabase = createSupabaseServerClient(req);
  const { data } = await supabase.auth.getSession();
  return data.session;
};
