import { z } from "zod";

export const BalanceInputSchema = z.object({
    walletAddress: z.string().describe("The wallet address to check balance for. If not provided, returns SOL balance"),
    tokenAddress: z.string().optional().describe("The token address to check balance for. If not provided, returns SOL balance"),
}); 