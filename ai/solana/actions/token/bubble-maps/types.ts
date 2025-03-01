import { z } from "zod";

import { BubbleMapsArgumentsSchema } from "./input-schema";
import { SolanaActionResult } from "../../solana-action";

export type BubbleMapsSchemaType = typeof BubbleMapsArgumentsSchema;

export type BubbleMapsArgumentsType = z.infer<BubbleMapsSchemaType>;

export type BubbleMapsResultBodyType = {
    success: boolean;
}; 

export type BubbleMapsResultType = SolanaActionResult<BubbleMapsResultBodyType>;