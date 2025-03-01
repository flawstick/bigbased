import { NextResponse, NextRequest } from "next/server";

import { getRaydiumPoolById } from "@/services/raydium";

export const GET = async (req: NextRequest, { params }: { params: Promise<{ poolId: string }> }) => {
    const { poolId } = await params;

    const poolInfo = await getRaydiumPoolById(poolId);

    return NextResponse.json(poolInfo);
}