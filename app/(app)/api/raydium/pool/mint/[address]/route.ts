import { NextRequest, NextResponse } from "next/server";

import { getPoolFromLpMint } from "@/services/raydium";

export const GET = async (request: NextRequest, { params }: { params: Promise<{ address: string }> }) => {
    const { address } = await params;
    const pool = await getPoolFromLpMint(address);    
    return NextResponse.json(pool);
}