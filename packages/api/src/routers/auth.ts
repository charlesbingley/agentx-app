import { protectedProcedure, publicProcedure, router } from "../index";

export const authRouter = router({
  session: protectedProcedure.query(({ ctx }) => {
    return ctx.session;
  }),
  loginUrl: publicProcedure.query(() => {
    return { url: "/auth/login" };
  }),
  logout: protectedProcedure.mutation(() => {
    return { ok: true };
  }),
});
