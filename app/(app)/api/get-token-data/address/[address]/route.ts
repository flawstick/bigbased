import { NextResponse } from "next/server";

import { NextRequest } from "next/server";
import { getToken } from "@/db/services";

interface Params {
    address: string;
}

export const GET = async (request: NextRequest, { params }: { params: Promise<Params> }) => {
    const address = (await params).address;
    try {
        const tokenData = await getToken(address);
        return NextResponse.json(tokenData);
    } catch (e) {
        console.error(e);
        return NextResponse.json(null, { status: 500 });
    }
}