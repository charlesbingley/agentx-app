import { protectedProcedure, publicProcedure, router } from "../index";
import { adminRouter } from "./admin";
import { agentsRouter } from "./agents";
import { analyticsRouter } from "./analytics";
import { authRouter } from "./auth";
import { creatorRouter } from "./creator";
import { exchangeRouter } from "./exchange";
import { reviewsRouter } from "./reviews";
import { subscriptionsRouter } from "./subscriptions";
import { userRouter } from "./user";

export const appRouter = router({
  auth: authRouter,
  agents: agentsRouter,
  reviews: reviewsRouter,
  subscriptions: subscriptionsRouter,
  user: userRouter,
  creator: creatorRouter,
  analytics: analyticsRouter,
  exchange: exchangeRouter,
  admin: adminRouter,
  healthCheck: publicProcedure.query(() => {
    return "OK";
  }),
  privateData: protectedProcedure.query(({ ctx }) => {
    return {
      message: "This is private",
      user: ctx.session.user,
    };
  }),
});
export type AppRouter = typeof appRouter;
