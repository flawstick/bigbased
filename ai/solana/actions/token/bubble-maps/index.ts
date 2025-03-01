import { SOLANA_BUBBLE_MAPS_NAME } from "./name";
import { SOLANA_BUBBLE_MAPS_PROMPT } from "./prompt";
import { BubbleMapsArgumentsSchema } from "./input-schema";

import type { SolanaAction } from "../../solana-action";
import type { BubbleMapsResultBodyType } from "./types";

export class SolanaGetBubbleMapsAction implements SolanaAction<typeof BubbleMapsArgumentsSchema, BubbleMapsResultBodyType> {
  public name = SOLANA_BUBBLE_MAPS_NAME;
  public description = SOLANA_BUBBLE_MAPS_PROMPT;
  public argsSchema = BubbleMapsArgumentsSchema;
} 