import { protectedProcedure, router } from "../index";

export const creatorRouter = router({
  dashboard: protectedProcedure.query(() => ({
    agents: [],
    pendingReviews: 0,
  })),
  earnings: protectedProcedure.query(() => ({
    total: 0,
    available: 0,
  })),
  withdraw: protectedProcedure.mutation(() => ({ ok: true })),
});
