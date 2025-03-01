import { z } from "zod";

import type { CdpActionResult } from "../cdp-action";
import type { DeployTokenInputSchema } from "./input-schema";

export type DeployTokenSchemaType = typeof DeployTokenInputSchema;

export type DeployTokenArgumentsType = z.infer<DeployTokenSchemaType>;

export type DeployTokenResultBodyType = {
    transactionHash: string;
    contractAddress: string;
}

export type DeployTokenActionResultType = CdpActionResult<DeployTokenResultBodyType>; 