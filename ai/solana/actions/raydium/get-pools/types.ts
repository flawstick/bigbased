import { z } from "zod";

import { GetPoolsInputSchema } from "./input-schema";

import type { SolanaActionResult } from "../../solana-action";
import type { ApiV3PoolInfoItem } from "@raydium-io/raydium-sdk-v2";
import type { DexScreenerPair } from "@/services/dexscreener/types";

export type GetPoolsSchemaType = typeof GetPoolsInputSchema;

export type GetPoolsArgumentsType = z.infer<GetPoolsSchemaType>;

export type GetPoolsResultBodyType = {
    pools: {
        pair: DexScreenerPair;
        pool: ApiV3PoolInfoItem
    }[];
}; 

export type GetPoolsResultType = SolanaActionResult<GetPoolsResultBodyType>;