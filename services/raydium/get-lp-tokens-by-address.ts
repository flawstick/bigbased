import { getMint } from "@solana/spl-token";
import { Connection, PublicKey } from "@solana/web3.js";

import { raydiumAuthorityAddress } from "./addresses";
import { getPoolFromLpMint } from "./get-pool-from-lp-mint";

import { getTokenAccountsByOwner } from "../helius"

import type { LpToken } from "./types";

export const getLpTokensByAddress = async (address: string): Promise<LpToken[]> => {
    const tokenAccounts = await getTokenAccountsByOwner(address);

    const mintData = await Promise.all(tokenAccounts.map(async (tokenAccount) => {
        const token = await getMint(new Connection(process.env.NEXT_PUBLIC_SOLANA_RPC_URL!), new PublicKey(tokenAccount.mint));
        return token;
    }));

    const lpTokens = tokenAccounts.map((tokenAccount, index) => ({
        tokenAccount,
        mintData: mintData[index]
    })).filter((token) => token.mintData.mintAuthority?.toBase58() === raydiumAuthorityAddress);

    return (await Promise.all(lpTokens.map(async (lpToken) => {
        const pool = await getPoolFromLpMint(lpToken.tokenAccount.mint);
        return pool ? {
            pool,
            mint: lpToken.tokenAccount.mint,
            amount: lpToken.tokenAccount.amount,
            decimals: lpToken.mintData.decimals,
        } : null;
    }))).filter((item): item is LpToken => item !== null);
}