import { z } from "zod";

import { protectedProcedure, router } from "../index";

export const userRouter = router({
  profile: protectedProcedure.query(({ ctx }) => ({ user: ctx.session.user })),
  update: protectedProcedure
    .input(z.object({ name: z.string().optional(), email: z.string().optional() }))
    .mutation(({ input }) => ({ ok: true, ...input })),
  apiKeys: protectedProcedure.query(() => ({ keys: [] as string[] })),
});
