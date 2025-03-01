import { z } from "zod";

export const TwitterSearchRecentInputSchema = z.object({
    keyword: z.string().describe("The keyword to search for in recent tweets"),
}); 