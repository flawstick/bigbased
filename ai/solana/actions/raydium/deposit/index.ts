import { SOLANA_DEPOSIT_LIQUIDITY_NAME } from "./name";
import { SOLANA_DEPOSIT_LIQUIDITY_PROMPT } from "./prompt";
import { DepositLiquidityInputSchema } from "./input-schema";

import type { SolanaDepositLiquiditySchemaType, SolanaDepositLiquidityResultBodyType } from "./types";
import type { SolanaAction } from "../../solana-action";

export class SolanaDepositLiquidityAction implements SolanaAction<SolanaDepositLiquiditySchemaType, SolanaDepositLiquidityResultBodyType> {
  public name = SOLANA_DEPOSIT_LIQUIDITY_NAME;
  public description = SOLANA_DEPOSIT_LIQUIDITY_PROMPT;
  public argsSchema = DepositLiquidityInputSchema;
} 