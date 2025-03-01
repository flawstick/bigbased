import { Connection } from "@solana/web3.js";

import { SolanaGetTokenAddressAction, SolanaTradeAction } from "@/ai/solana/actions";

import { SOLANA_GET_TOKEN_ADDRESS_NAME, SOLANA_TRADE_NAME } from "@/ai/action-names";
import { solanaTool } from "@/ai/solana";

export const TRADING_TOOLS = {
    [`trading-${SOLANA_TRADE_NAME}`]: solanaTool(new SolanaTradeAction(), new Connection(process.env.NEXT_PUBLIC_SOLANA_RPC_URL!)),
    [`trading-${SOLANA_GET_TOKEN_ADDRESS_NAME}`]: solanaTool(new SolanaGetTokenAddressAction(), new Connection(process.env.NEXT_PUBLIC_SOLANA_RPC_URL!)),
}