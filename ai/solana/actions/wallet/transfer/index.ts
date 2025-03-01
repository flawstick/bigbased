import { SOLANA_TRANSFER_NAME } from "./name";
import { SOLANA_TRANSFER_PROMPT } from "./prompt";
import { TransferInputSchema } from "./input-schema";

import type { SolanaTransferResultBodyType } from "./types";
import type { SolanaAction } from "../../solana-action";

export class SolanaTransferAction implements SolanaAction<typeof TransferInputSchema, SolanaTransferResultBodyType> {
  public name = SOLANA_TRANSFER_NAME;
  public description = SOLANA_TRANSFER_PROMPT;
  public argsSchema = TransferInputSchema;
} 