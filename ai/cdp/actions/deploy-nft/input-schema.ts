import { z } from "zod";

export const DeployNftInputSchema = z
  .object({
    name: z.string().describe("The name of the NFT collection"),
    symbol: z.string().describe("The symbol of the NFT collection"),
    baseURI: z.string().describe("The base URI for the token metadata"),
  })
  .strip()
  .describe("Instructions for deploying an NFT collection");