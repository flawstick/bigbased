import { z } from "zod";

import type { CdpActionResult } from "../cdp-action";
import type { DeployNftInputSchema } from "./input-schema";

export type DeployNftSchemaType = typeof DeployNftInputSchema;

export type DeployNftArgumentsType = z.infer<DeployNftSchemaType>;

export type DeployNftResultBodyType = {
    transactionHash: string;
    contractAddress: string;
}

export type DeployNftActionResultType = CdpActionResult<DeployNftResultBodyType>;
