import { SOLANA_GET_LP_TOKENS_NAME } from "./name";
import { SOLANA_GET_LP_TOKENS_PROMPT } from "./prompt";
import { GetLpTokensInputSchema } from "./input-schema";
import { getLpTokens } from "./function";

import type { SolanaAction } from "../../solana-action";
import type { GetLpTokensResultBodyType } from "./types";

export class SolanaGetLpTokensAction implements SolanaAction<typeof GetLpTokensInputSchema, GetLpTokensResultBodyType> {
  public name = SOLANA_GET_LP_TOKENS_NAME;
  public description = SOLANA_GET_LP_TOKENS_PROMPT;
  public argsSchema = GetLpTokensInputSchema;
  public func = getLpTokens;
} 