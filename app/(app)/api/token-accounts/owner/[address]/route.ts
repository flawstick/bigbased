import { NextResponse } from 'next/server';

import { getTokenAccountsByOwner } from '@/services/helius';
import { getToken } from '@/db/services';
import { getPrices } from '@/services/jupiter';
import { Token } from '@/db/types';

export const GET = async (request: Request, { params }: { params: Promise<{ address: string }> }) => {
    try {
        const { address } = await params;

        const tokenAccounts = await getTokenAccountsByOwner(address);

        const tokenDatas: (Token | null)[] = [];
        for (let i = 0; i < tokenAccounts.length; i += 100) {
            const chunk = tokenAccounts.slice(i, i + 100);
            const chunkData = await Promise.all(chunk.map(async (tokenAccount) => {
                return getToken(tokenAccount.mint!);
            }));
            tokenDatas.push(...chunkData);
        }

        const tokenAccountsWithData = tokenAccounts.map((tokenAccount, index) => {
            return {
                ...tokenAccount,
                token_data: tokenDatas[index]
            };
        }).filter((tokenAccount) => tokenAccount.token_data !== null);

        const sortedTokenAccountsWithData = tokenAccountsWithData
            .sort((a, b) => b.amount / (10 ** a.token_data!.decimals) - a.amount / (10 ** b.token_data!.decimals))
            .filter((tokenAccount) => {
                const tags = tokenAccount.token_data?.tags || [];
                return tags.includes("community") || tags.includes("verified");
            });

        const priceChunks = [];
        for (let i = 0; i < tokenAccountsWithData.length; i += 25) {
            const chunk = tokenAccountsWithData.slice(i, i + 25);
            const chunkPrices = await getPrices(chunk.map(account => account.mint));
            priceChunks.push(chunkPrices);
        }
        const prices = priceChunks.reduce((acc, chunk) => ({...acc, ...chunk}), {});

        const response = sortedTokenAccountsWithData.map((tokenAccount) => {
            return {
                ...tokenAccount,
                price: prices[tokenAccount.mint!]?.price ?? 0
            };
        }).sort((a, b) => b.amount / (10 ** a.token_data!.decimals) * b.price - a.amount / (10 ** a.token_data!.decimals) * a.price);

        return NextResponse.json(response);
    } catch (error) {
        console.error('Error fetching token accounts:', error);
        return NextResponse.json(
            { error: 'Failed to fetch token accounts' },
            { status: 500 }
        );
    }
}