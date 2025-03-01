import { SOLANA_TOP_HOLDERS_NAME } from "./name";
import { SOLANA_TOP_HOLDERS_PROMPT } from "./prompt";
import { TopHoldersInputSchema } from "./input-schema";
import { TopHoldersResultBodyType } from "./types";
import { getTopHolders } from "./function";

import type { SolanaAction } from "../../solana-action";

export class SolanaTopHoldersAction implements SolanaAction<typeof TopHoldersInputSchema, TopHoldersResultBodyType> {
  public name = SOLANA_TOP_HOLDERS_NAME;
  public description = SOLANA_TOP_HOLDERS_PROMPT;
  public argsSchema = TopHoldersInputSchema;
  public func = getTopHolders;
} 