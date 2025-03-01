import { fetchSplashPool, PoolInfo } from "@orca-so/whirlpools";
import { Connection } from '@solana/web3.js';

export const getSplashPoolById = async (id: string): Promise<PoolInfo> => {
    const pool = await fetchSplashPool(new Connection(process.env.NEXT_PUBLIC_SOLANA_RPC_URL!), id, {
        fetchAccountsConfig: {
            commitment: "confirmed",
        },
    });

    if (!pool) {
        throw new Error("Pool not found");
    }

    return pool;
}