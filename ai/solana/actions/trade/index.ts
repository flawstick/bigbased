import { SOLANA_TRADE_NAME } from "./name";
import { SOLANA_TRADE_PROMPT } from "./prompt";
import { TradeInputSchema } from "./input-schema";

import type { SolanaTradeResultBodyType, SolanaTradeSchemaType } from "./types";
import type { SolanaAction } from "../solana-action";

export class SolanaTradeAction implements SolanaAction<SolanaTradeSchemaType, SolanaTradeResultBodyType> {
  public name = SOLANA_TRADE_NAME;
  public description = SOLANA_TRADE_PROMPT;
  public argsSchema = TradeInputSchema;
} 