import { z } from "zod";

export const GetLpTokensInputSchema = z.object({
    address: z.string().describe("The address of the wallet to get lp tokens for"),
});