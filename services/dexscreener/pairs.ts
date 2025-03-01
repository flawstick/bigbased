import { DexScreenerResponse, DexScreenerPair } from "./types";

export async function getTokenPairsFromAddress(mintAddress: string): Promise<DexScreenerPair[]> {
    try {
      const response = await fetch(
        `https://api.dexscreener.com/latest/dex/tokens/${mintAddress}`
      );
      const data: DexScreenerResponse = await response.json();
  
      if (!data.pairs || data.pairs.length === 0) {
        return [];
      }
  
      // Filter for Solana pairs only and sort by FDV
      const solanaPairs = data.pairs
        .filter((pair: DexScreenerPair) => pair.chainId === "solana")
        .sort((a: DexScreenerPair, b: DexScreenerPair) => (b.liquidity?.usd || 0) - (a.liquidity?.usd || 0));
  
      return solanaPairs;
    } catch (error) {
      console.error(error);
      return [];
    }
  }