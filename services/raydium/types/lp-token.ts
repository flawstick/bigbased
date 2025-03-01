import { ApiV3PoolInfoItem } from "@raydium-io/raydium-sdk-v2";

export type LpToken = {
    pool: ApiV3PoolInfoItem;
    mint: string;
    amount: number;
    decimals: number;
}