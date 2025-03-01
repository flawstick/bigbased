import { z } from "zod";

import { TopHoldersInputSchema } from "./input-schema";
import { SolanaActionResult } from "../../solana-action";
import { TokenLargestAccount } from "@/services/helius";

export type TopHoldersSchemaType = typeof TopHoldersInputSchema;

export type TopHoldersArgumentsType = z.infer<TopHoldersSchemaType>;

export type TopHoldersResultBodyType = {
    topHolders: (TokenLargestAccount & { owner: string, percentageOwned: number })[];
    percentageOwned: number;
}; 

export type TopHoldersResultType = SolanaActionResult<TopHoldersResultBodyType>;
