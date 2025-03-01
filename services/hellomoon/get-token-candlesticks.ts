import axios from "axios";
import { getMint } from "@solana/spl-token";
import { Connection, PublicKey } from "@solana/web3.js";
import {
  CandlestickGranularity,
  TokenPriceCandlestick,
  TokenPriceCandlestickBirdeye,
} from "./types";

export const getTokenCandlesticks = async (
  mint: string,
  granularity: CandlestickGranularity,
  numDays: number,
  limit: number = 1000,
): Promise<TokenPriceCandlestick[]> => {
  const connection = new Connection(process.env.NEXT_PUBLIC_SOLANA_RPC_URL!);

  // Get token decimals
  let decimals: number;
  try {
    const mintInfo = await getMint(connection, new PublicKey(mint));
    decimals = mintInfo.decimals;
  } catch (error) {
    console.error("Failed to fetch mint info:", error);
    throw new Error(`Invalid mint address: ${mint}`);
  }
  console.log("Decimals:", decimals);

  // Calculate time range
  const timeTo = Math.floor(Date.now() / 1000);
  const timeFrom = timeTo - numDays * 86400;
  const birdeyeInterval = mapGranularityToBirdeye(granularity);

  // Fetch data from Birdeye API
  const response = await axios.get("https://public-api.birdeye.so/defi/ohlcv", {
    headers: {
      "X-API-KEY": process.env.BIRDEYE_API_KEY,
      "x-chain": "solana",
      accept: "application/json",
    },
    params: {
      address: mint,
      type: birdeyeInterval,
      currency: "usd",
      time_from: timeFrom,
      time_to: timeTo,
    },
  });

  if (!response.data.data?.items) {
    throw new Error("Birdeye API returned no data");
  }

  const rawItems = response.data.data.items;
  if (rawItems.length === 0) {
    console.warn("No candlestick data available for this token and timeframe.");
    return [];
  }

  const sortedItems = rawItems.sort(
    (a: TokenPriceCandlestickBirdeye, b: TokenPriceCandlestickBirdeye) =>
      a.unixTime - b.unixTime,
  );
  const adjustedData = sortedItems.map(
    (candle: TokenPriceCandlestickBirdeye) => ({
      timestamp: candle.unixTime as number,
      open: candle.o,
      high: candle.h,
      low: candle.l,
      close: candle.c,
      volume: candle.v,
    }),
  );

  return adjustedData.slice(0, limit);
};

// Map granularity to Birdeye intervals
function mapGranularityToBirdeye(granularity: CandlestickGranularity): string {
  switch (granularity) {
    case "ONE_MIN":
      return "1m";
    case "FIVE_MIN":
      return "5m";
    case "ONE_HOUR":
      return "1h";
    case "ONE_DAY":
      return "1d";
    default:
      throw new Error(`Unsupported granularity: ${granularity}`);
  }
}
