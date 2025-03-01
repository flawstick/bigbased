import { z } from "zod";

import type { CdpActionResult } from "../cdp-action";
import type { RequestFaucetFundsInputSchema } from "./input-schema";

export type RequestFaucetFundsSchemaType = typeof RequestFaucetFundsInputSchema;

export type RequestFaucetFundsArgumentsType = z.infer<RequestFaucetFundsSchemaType>;

export type RequestFaucetFundsResultBodyType = {
  transactionLink: string;
};

export type RequestFaucetFundsActionResultType = CdpActionResult<RequestFaucetFundsResultBodyType>; 