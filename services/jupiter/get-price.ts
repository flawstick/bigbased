import { FetchPriceResponse } from "solana-agent-kit";

/**
 * Get the USDC price for a token using Jupiter's price API
 * @param tokenId The token's mint address
 * @returns Price response with USDC price if successful
 */
export async function getPrices(tokenIds: string[]) {
  try {
    const response = await fetch(
      `https://api.jup.ag/price/v2?ids=${tokenIds.join(",")}`
    );

    if (!response.ok) {
      throw new Error(`API request failed with status ${response.status}`);
    }

    const data = await response.json();

    if (!data.data) {
      return Object.fromEntries(tokenIds.map((tokenId) => [tokenId, { price: 0 }]));
    }

    return data.data;

  } catch (error) {
    return Object.fromEntries(tokenIds.map((tokenId) => [tokenId, { price: 0 }]));
  }
}

export const getPrice = async (tokenId: string) => {
    const prices = await getPrices([tokenId]);
    return prices[tokenId].price;
}