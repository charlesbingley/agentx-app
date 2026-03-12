import { protectedProcedure, router } from "../index";

export const analyticsRouter = router({
  usage: protectedProcedure.query(() => ({
    totalExecutions: 0,
    activeUsers: 0,
  })),
  revenue: protectedProcedure.query(() => ({
    totalRevenue: 0,
    creatorShare: 0,
  })),
});
