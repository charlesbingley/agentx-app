import { getSession } from "@agentx-app/auth";
import type { NextRequest } from "next/server";

export async function createContext(req: NextRequest) {
  const session = await getSession(req);
  return {
    session,
  };
}

export type Context = Awaited<ReturnType<typeof createContext>>;
