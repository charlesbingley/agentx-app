import { z } from "zod";

import { protectedProcedure, router } from "../index";

export const adminRouter = router({
  verify: protectedProcedure
    .input(z.object({ agentId: z.string() }))
    .mutation(({ input }) => ({ ok: true, agentId: input.agentId })),
  feature: protectedProcedure
    .input(z.object({ agentId: z.string(), featured: z.boolean() }))
    .mutation(({ input }) => ({ ok: true, ...input })),
  ban: protectedProcedure
    .input(z.object({ userId: z.string() }))
    .mutation(({ input }) => ({ ok: true, userId: input.userId })),
});
