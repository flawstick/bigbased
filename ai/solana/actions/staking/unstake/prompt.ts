export const SOLANA_UNSTAKE_PROMPT = 
`Unstake SOL from a liquid staking pool.

Takes two parameters: 
1. Amount of of liquid staking tokens to unstake. (optional)
2. The contract address of the liquid staking provider to use.

If a user asks to unstake and provides a symbol, use the get-token-data tool to get the contract address of the liquid staking provider to use.
If a user asks to unstake and provides a name, ask them for the symbol first.

If the user does not provide an amount, leave the amount parameter empty.`; 