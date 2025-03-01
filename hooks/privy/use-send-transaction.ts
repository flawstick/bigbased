import { Connection, VersionedTransaction, AddressLookupTableAccount, TransactionMessage } from "@solana/web3.js";

import { usePrivy } from "@privy-io/react-auth";

import { useSolanaWallets } from "@privy-io/react-auth/solana";

export const useSendTransaction = () => {

    const { user } = usePrivy();

    const { wallets } = useSolanaWallets();

    const wallet = wallets.find(wallet => wallet.address === user?.wallet?.address);

    const sendTransaction = async (transaction: VersionedTransaction) => {
        if(!wallet) throw new Error("No wallets found");

        const connection = new Connection(process.env.NEXT_PUBLIC_SOLANA_RPC_URL!);

        return wallet.sendTransaction(transaction, connection, {
            skipPreflight: true,
        });
    }

    return {
        sendTransaction,
        wallet
    }
}