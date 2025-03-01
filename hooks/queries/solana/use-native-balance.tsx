"use client";

import useSWR from 'swr';

import { Connection, LAMPORTS_PER_SOL, PublicKey } from '@solana/web3.js';

export const useNativeBalance = (address: string) => {

  const { data, isLoading, error, mutate } = useSWR(
    `native-balance/${address}`,
    async () => {
        try {
            const connection = new Connection(process.env.NEXT_PUBLIC_SOLANA_RPC_URL!);
            const balance = await connection.getBalance(new PublicKey(address));
            return balance / LAMPORTS_PER_SOL;
        } catch (error) {
            console.error('Error fetching SOL balance:', error);
            throw error;
        }
    }
  );

  return { data: data ?? 0, isLoading, error, mutate };
};