import { NextRequest, NextResponse } from "next/server";

import { getPrice } from "@/services/birdeye";

export const GET = async (request: NextRequest, { params }: { params: Promise<{ address: string }> }) => {
    const { address } = await params;

    const price = await getPrice(address);
    
    return NextResponse.json(price);
}