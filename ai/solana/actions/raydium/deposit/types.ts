import { z } from "zod";
import { DepositLiquidityInputSchema } from "./input-schema";
import { SolanaActionResult } from "../../solana-action";

export type SolanaDepositLiquiditySchemaType = typeof DepositLiquidityInputSchema;

export type SolanaDepositLiquidityArgumentsType = z.infer<SolanaDepositLiquiditySchemaType>;

export type SolanaDepositLiquidityResultBodyType = {
    transaction: string;
} 

export type SolanaDepositLiquidityResultType = SolanaActionResult<SolanaDepositLiquidityResultBodyType>;