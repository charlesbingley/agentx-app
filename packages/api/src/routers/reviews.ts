import { z } from "zod";

import { protectedProcedure, publicProcedure, router } from "../index";

export const reviewsRouter = router({
  list: publicProcedure
    .input(z.object({ agentId: z.string() }))
    .query(({ input }) => {
      return { agentId: input.agentId, reviews: [] };
    }),
  create: protectedProcedure
    .input(
      z.object({
        agentId: z.string(),
        rating: z.number().min(1).max(5),
        comment: z.string().optional(),
      })
    )
    .mutation(() => ({ ok: true })),
});
