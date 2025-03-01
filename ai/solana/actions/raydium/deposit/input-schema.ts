import { z } from "zod";

export const DepositLiquidityInputSchema = z.object({
    poolId: z.string().describe("The pool ID to deposit liquidity into"),
}); 