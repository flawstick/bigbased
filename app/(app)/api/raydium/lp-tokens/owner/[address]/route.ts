import { getLpTokensByAddress } from "@/services/raydium";
import { NextResponse } from "next/server";
import { NextRequest } from "next/server";

export const GET = async (request: NextRequest, { params }: { params: Promise<{ address: string }> }) => {
    const { address } = await params;
    const lpTokens = await getLpTokensByAddress(address);
    return NextResponse.json(lpTokens);
}