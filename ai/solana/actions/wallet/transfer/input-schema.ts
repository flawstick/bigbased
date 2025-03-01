import { z } from "zod";

export const TransferInputSchema = z.object({
    to: z.string().describe("The recipient's wallet address"),
    amount: z.number().positive().describe("The amount to transfer"),
    mint: z.string().optional().describe("The token's mint address. If not provided, transfers SOL"),
}); 