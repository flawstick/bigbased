import { z } from "zod";

import type { Amount } from "@coinbase/coinbase-sdk";

export const DeployTokenInputSchema = z
  .object({
    name: z.string().describe("The name of the token"),
    symbol: z.string().describe("The symbol of the token"),
    totalSupply: z.custom<Amount>().describe("The total supply of tokens to mint"),
  })
  .strip()
  .describe("Instructions for deploying a token"); 