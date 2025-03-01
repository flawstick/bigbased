import { z } from "zod";

import { GetLpTokensInputSchema } from "./input-schema";

import type { SolanaActionResult } from "../../solana-action";
import type { LpToken } from "@/services/raydium/types";

export type GetLpTokensSchemaType = typeof GetLpTokensInputSchema;

export type GetLpTokensArgumentsType = z.infer<GetLpTokensSchemaType>;

export type GetLpTokensResultBodyType = {
    lpTokens: LpToken[];
}; 

export type GetLpTokensResultType = SolanaActionResult<GetLpTokensResultBodyType>;