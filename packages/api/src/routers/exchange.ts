import { z } from "zod";

import { protectedProcedure, publicProcedure, router } from "../index";

export const exchangeRouter = router({
  prices: publicProcedure
    .input(z.object({ symbol: z.string() }))
    .query(({ input }) => ({ symbol: input.symbol, price: 0 })),
  alerts: protectedProcedure.query(() => ({ alerts: [] })),
});
