import { z } from "zod";

export const WithdrawLiquidityInputSchema = z.object({
    mint: z.string().describe("The mint address of the LP token to withdraw liquidity with"),
}); 