export const REQUEST_FAUCET_FUNDS_PROMPT = `
This tool will request test tokens from the faucet for the default address in the wallet. It takes the wallet and asset ID as input.
If no asset ID is provided the faucet defaults to ETH. Faucet is only allowed on 'base-sepolia' and can only provide asset ID 'eth' or 'usdc'.
You are not allowed to faucet with any other network or asset ID. If you are on another network, suggest that the user sends you some ETH
from another wallet and provide the user with your wallet details.
`; 