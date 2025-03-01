import { NextResponse } from 'next/server';

import { getTokenLargestAccounts } from '@/services/helius';

export const GET = async (request: Request, { params }: { params: Promise<{ address: string }> }) => {
    try {
        const { address } = await params;

        const tokenAccounts = (await getTokenLargestAccounts(address));

        return NextResponse.json(tokenAccounts);
    } catch (error) {
        console.error('Error fetching token accounts:', error);
        return NextResponse.json(
            { error: 'Failed to fetch token accounts' },
            { status: 500 }
        );
    }
}