import { z } from "zod";

export const RequestFaucetFundsInputSchema = z
  .object({
    assetId: z.string().optional().describe("The optional asset ID to request from faucet"),
  })
  .strip()
  .describe("Instructions for requesting faucet funds"); 