import { Connection } from "@solana/web3.js";

import { SolanaAllBalancesAction, SolanaBalanceAction, SolanaGetTokenAddressAction, SolanaGetWalletAddressAction, SolanaTransferAction } from "@/ai/solana/actions";

import { SOLANA_ALL_BALANCES_NAME, SOLANA_BALANCE_NAME, SOLANA_GET_TOKEN_ADDRESS_NAME, SOLANA_GET_WALLET_ADDRESS_NAME, SOLANA_TRANSFER_NAME } from "@/ai/action-names";
import { solanaTool } from "@/ai/solana";

export const WALLET_TOOLS = {
    [`wallet-${SOLANA_GET_WALLET_ADDRESS_NAME}`]: solanaTool(new SolanaGetWalletAddressAction(), new Connection(process.env.NEXT_PUBLIC_SOLANA_RPC_URL!)),
    [`wallet-${SOLANA_BALANCE_NAME}`]: solanaTool(new SolanaBalanceAction(), new Connection(process.env.NEXT_PUBLIC_SOLANA_RPC_URL!)),
    [`wallet-${SOLANA_ALL_BALANCES_NAME}`]: solanaTool(new SolanaAllBalancesAction(), new Connection(process.env.NEXT_PUBLIC_SOLANA_RPC_URL!)),
    [`wallet-${SOLANA_GET_TOKEN_ADDRESS_NAME}`]: solanaTool(new SolanaGetTokenAddressAction(), new Connection(process.env.NEXT_PUBLIC_SOLANA_RPC_URL!)),
    [`wallet-${SOLANA_TRANSFER_NAME}`]: solanaTool(new SolanaTransferAction(), new Connection(process.env.NEXT_PUBLIC_SOLANA_RPC_URL!)),
}