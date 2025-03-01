import { z } from "zod";

export const TopHoldersInputSchema = z.object({
    tokenAddress: z.string().describe("The token address to check top holders for."),
}); 