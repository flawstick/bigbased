import { z } from "zod";

export const BubbleMapsArgumentsSchema = z.object({
    contractAddress: z.string().describe("The contract address of the token to get bubble map for."),
});