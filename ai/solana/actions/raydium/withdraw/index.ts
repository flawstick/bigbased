import { SOLANA_WITHDRAW_LIQUIDITY_NAME } from "./name";
import { SOLANA_WITHDRAW_LIQUIDITY_PROMPT } from "./prompt";
import { WithdrawLiquidityInputSchema } from "./input-schema";

import type { SolanaWithdrawLiquiditySchemaType, SolanaWithdrawLiquidityResultBodyType } from "./types";
import type { SolanaAction } from "../../solana-action";

export class SolanaWithdrawLiquidityAction implements SolanaAction<SolanaWithdrawLiquiditySchemaType, SolanaWithdrawLiquidityResultBodyType> {
  public name = SOLANA_WITHDRAW_LIQUIDITY_NAME;
  public description = SOLANA_WITHDRAW_LIQUIDITY_PROMPT;
  public argsSchema = WithdrawLiquidityInputSchema;
} 