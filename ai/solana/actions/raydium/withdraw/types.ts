import { z } from "zod";
import { WithdrawLiquidityInputSchema } from "./input-schema";
import { SolanaActionResult } from "../../solana-action";

export type SolanaWithdrawLiquiditySchemaType = typeof WithdrawLiquidityInputSchema;

export type SolanaWithdrawLiquidityArgumentsType = z.infer<SolanaWithdrawLiquiditySchemaType>;

export type SolanaWithdrawLiquidityResultBodyType = {
    transaction: string;
} 

export type SolanaWithdrawLiquidityResultType = SolanaActionResult<SolanaWithdrawLiquidityResultBodyType>;