import { SOLANA_GET_LP_TOKENS_NAME } from "../names";

export const SOLANA_WITHDRAW_LIQUIDITY_PROMPT = 
`Withdraw liquidity from a Raydium pool.

Required parameters:
- lpMintAddress: The LP mint address to withdraw liquidity from

Optional parameters:
- amount: The amount of liquidity to withdraw

You can call the ${SOLANA_GET_LP_TOKENS_NAME} action to get all of the LP tokens a user has.`; 