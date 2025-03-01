import { z } from "zod";
import { StakeInputSchema } from "./input-schema";
import { SolanaActionResult } from "../../solana-action";

export type StakeSchemaType = typeof StakeInputSchema;

export type StakeArgumentsType = z.infer<StakeSchemaType>;

export type StakeResultBodyType = {
    tx: string;
    symbol: string;
} 

export type StakeResultType = SolanaActionResult<StakeResultBodyType>;