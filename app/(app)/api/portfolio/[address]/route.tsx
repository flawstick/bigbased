import { NextRequest, NextResponse } from "next/server";

import { getPortfolio } from "@/services/birdeye";

export const GET = async (_: NextRequest, { params }: { params: Promise<{ address: string }> }) => {
  const { address } = await params;

  const portfolio = await getPortfolio(address);

  return NextResponse.json(portfolio);
}