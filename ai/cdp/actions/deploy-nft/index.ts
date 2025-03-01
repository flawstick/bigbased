

import { DEPLOY_NFT_NAME } from "./name";
import { DEPLOY_NFT_PROMPT } from "./prompt";
import { DeployNftInputSchema } from "./input-schema";
import { deployNft } from "./function";

import type { DeployNftSchemaType, DeployNftResultBodyType } from "./types";
import type { CdpAction } from "../cdp-action";

export class DeployNftAction implements CdpAction<DeployNftSchemaType, DeployNftResultBodyType> {
  public name = DEPLOY_NFT_NAME;
  public description = DEPLOY_NFT_PROMPT;
  public argsSchema = DeployNftInputSchema;
  public func = deployNft;
}
