import { z } from "zod";
import { UnstakeInputSchema } from "./input-schema";
import { SolanaActionResult } from "../../solana-action";

export type UnstakeSchemaType = typeof UnstakeInputSchema;

export type UnstakeArgumentsType = z.infer<UnstakeSchemaType>;

export type UnstakeResultBodyType = {
    tx: string;
    inputAmount: number;
    symbol: string;
} 

export type UnstakeResultType = SolanaActionResult<UnstakeResultBodyType>;