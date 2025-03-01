import { z } from "zod";

export const TokenHoldersInputSchema = z.object({
    tokenAddress: z.string().describe("The token address to check holders for."),
    threshold: z.number().describe("The threshold to check holders for.").optional(),
}); 
