import { z } from "zod";

import { GetTokenAddressArgumentsSchema } from "./input-schema";
import { SolanaActionResult } from "../../solana-action";

export type GetTokenAddressSchemaType = typeof GetTokenAddressArgumentsSchema;

export type GetTokenAddressArgumentsType = z.infer<GetTokenAddressSchemaType>;

export type GetTokenAddressResultBodyType = {
    address: string;
}; 

export type GetTokenAddressResultType = SolanaActionResult<GetTokenAddressResultBodyType>;