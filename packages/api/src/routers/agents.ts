import { z } from "zod";

import { protectedProcedure, publicProcedure, router } from "../index";

export const agentsRouter = router({
  list: publicProcedure.query(() => {
    return [] as Array<{ id: string; name: string; category: string }>;
  }),
  byId: publicProcedure.input(z.string()).query(({ input }) => {
    return { id: input, name: "Agent", category: "trading" };
  }),
  execute: protectedProcedure
    .input(
      z.object({
        agentId: z.string().optional(),
        prompt: z.string().optional(),
      })
    )
    .mutation(({ input }) => {
      return { ok: true, agentId: input.agentId ?? "unknown" };
    }),
});
