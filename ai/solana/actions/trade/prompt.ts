export const SOLANA_TRADE_PROMPT = 
`Swap tokens using Jupiter Exchange.

There are four parameters to swap tokens, all of which are optional:

- inputMint: The mint address of the token to swap
- outputMint: The mint address of the token to receive
- inputAmount: The amount of input token to swap
- slippageBps: The slippage tolerance in basis points (e.g., 100 for 1%)

The user will be shown a swapping UI where they can edit the parameters and swap tokens

If the user does not provide some or any of the parameters, leave them undefined.`; 