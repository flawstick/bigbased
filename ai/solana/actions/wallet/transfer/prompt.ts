export const SOLANA_TRANSFER_PROMPT = `Transfer tokens or SOL to another address (also called as wallet address).

Required parameters:
- to: The recipient's wallet address (e.g., "8x2dR8Mpzuz2YqyZyZjUbYWKSWesBo5jMx2Q9Y86udVk")
- amount: The amount to transfer (e.g., 1 or 0.01)

Optional parameters:
- mint: The token's mint address (e.g., "So11111111111111111111111111111111111111112"). If not provided, transfers SOL.`; 