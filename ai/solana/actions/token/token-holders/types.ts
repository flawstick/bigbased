import { z } from "zod";

import { TokenHoldersInputSchema } from "./input-schema";
import { SolanaActionResult } from "../../solana-action";
import { TokenLargestAccount } from "@/services/helius";

export type TokenHoldersSchemaType = typeof TokenHoldersInputSchema;

export type TokenHoldersArgumentsType = z.infer<TokenHoldersSchemaType>;

export type TokenHoldersResultBodyType = {
    numHolders: number;
}; 

export type TokenHoldersResultType = SolanaActionResult<TokenHoldersResultBodyType>;