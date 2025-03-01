import { LAMPORTS_PER_SOL, PublicKey, Connection } from "@solana/web3.js";


import { getTokenAccountsByOwner } from "@/services/helius";

import type { SolanaActionResult } from "../../solana-action";
import type { AllBalancesArgumentsType, AllBalancesResultBodyType } from "./types";
import { getToken } from "@/db/services";

export async function getAllBalances(
  connection: Connection,
  args: AllBalancesArgumentsType
): Promise<SolanaActionResult<AllBalancesResultBodyType>> {
  try {
    let balances: {
      balance: number;
      token: string;
      name: string;
      logoURI: string;
    }[] = [];

    // Get SOL balance
    const solBalance = await connection.getBalance(new PublicKey(args.walletAddress)) / LAMPORTS_PER_SOL;
    balances.push({
      balance: solBalance,
      token: "SOL",
      name: "Solana",
      logoURI: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTX6PYmAiDpUliZWnmCHKPc3VI7QESDKhLndQ&s"
    });

    // Get all token accounts
    const tokenAccounts = await getTokenAccountsByOwner(args.walletAddress);

    // Get balance for each token account
    for await (const account of tokenAccounts) {
      const token = await getToken(account.mint!);
        if (token) {
          balances.push({
            balance: account.amount! / 10 ** token.decimals,
            token: token.symbol,
            name: token.name,
            logoURI: token.logoURI
          });
        }
    }

    return {
      message: `The user has been shown all of their balances in the UI. You do not need to list the balances again, instead ask what they want to do next.`,
      body: {
        balances: balances
      }
    };
  } catch (error) {
    console.error(error);
    return {
      message: `Error getting balances: ${error}`,
      body: {
        balances: []
      }
    };
  }
} 