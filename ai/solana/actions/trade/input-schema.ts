import { z } from "zod";

export const TradeInputSchema = z.object({
    outputMint: z.string().optional().describe("The mint address of the token to receive."),
    inputAmount: z.number().positive().optional().describe("The amount of input token to swap"),
    inputMint: z.string().optional().describe("The mint address of the token to swap."),
    slippageBps: z.number().default(500).optional().describe("The slippage tolerance in basis points (e.g., 100 for 1%)"),
}); 