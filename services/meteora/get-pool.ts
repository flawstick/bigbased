import AmmImpl from '@mercurial-finance/dynamic-amm-sdk';

import { Connection, PublicKey } from '@solana/web3.js';

export const getMeteoraPool = async (address: string) => {
    const pool = await AmmImpl.create(new Connection(process.env.NEXT_PUBLIC_SOLANA_RPC_URL!), new PublicKey(address));
    const poolInfo = pool.poolInfo;
    const lockedLpAmount = await pool.getLockedLpAmount();

    return {
        poolInfo,
        lockedLpAmount,
        lpSupply: pool.poolState.lpSupply,
    };
}