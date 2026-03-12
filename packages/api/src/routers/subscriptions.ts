import { z } from "zod";

import { protectedProcedure, router } from "../index";

export const subscriptionsRouter = router({
  create: protectedProcedure
    .input(z.object({ agentId: z.string(), plan: z.string() }))
    .mutation(({ input }) => ({ ok: true, ...input })),
  cancel: protectedProcedure
    .input(z.object({ subscriptionId: z.string() }))
    .mutation(({ input }) => ({ ok: true, subscriptionId: input.subscriptionId })),
  portal: protectedProcedure.query(() => ({ url: "/settings" })),
});
