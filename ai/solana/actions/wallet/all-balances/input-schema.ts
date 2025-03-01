import { z } from "zod";

export const AllBalancesInputSchema = z.object({
    walletAddress: z.string()
}); 