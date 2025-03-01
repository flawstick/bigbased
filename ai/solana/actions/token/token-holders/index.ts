import { SOLANA_TOKEN_HOLDERS_NAME } from "./name";
import { SOLANA_TOKEN_HOLDERS_PROMPT } from "./prompt";
import { TokenHoldersInputSchema } from "./input-schema";
import { TokenHoldersResultBodyType } from "./types";
import { getNumHolders } from "./function";

import type { SolanaAction } from "../../solana-action";

export class SolanaTokenHoldersAction implements SolanaAction<typeof TokenHoldersInputSchema, TokenHoldersResultBodyType> {
  public name = SOLANA_TOKEN_HOLDERS_NAME;
  public description = SOLANA_TOKEN_HOLDERS_PROMPT;
  public argsSchema = TokenHoldersInputSchema;
  public func = getNumHolders;
} 