import useSWR from "swr";

import { getAssociatedTokenAddressSync } from "@solana/spl-token";
import { Connection, LAMPORTS_PER_SOL, PublicKey } from "@solana/web3.js";

export const useTokenBalance = (tokenAddress: string, walletAddress: string) => {
    const { data, isLoading } = useSWR<number>(
        `token-balance-${tokenAddress}-${walletAddress}`,
        async () => {
            const connection = new Connection(process.env.NEXT_PUBLIC_SOLANA_RPC_URL!);
            if(tokenAddress === "So11111111111111111111111111111111111111112") {
                const balance = await connection.getBalance(new PublicKey(walletAddress)) / LAMPORTS_PER_SOL;
                return balance;
            } else {
                const token_address = getAssociatedTokenAddressSync(
                    new PublicKey(tokenAddress), 
                    new PublicKey(walletAddress)
                );
    
                const token_account = await connection.getTokenAccountBalance(token_address);
                return token_account.value.uiAmount ?? 0;
            }
        }
    );

    return {
        balance: data || 0,
        isLoading,
    };
};