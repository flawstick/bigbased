import { Wallet } from "@coinbase/coinbase-sdk";
import { RequestFaucetFundsArgumentsType, RequestFaucetFundsActionResultType } from "./types";

export async function requestFaucetFunds(
  wallet: Wallet,
  args: RequestFaucetFundsArgumentsType,
): Promise<RequestFaucetFundsActionResultType> {
  try {
    // Request funds from the faucet
    const faucetTx = await wallet.faucet(args.assetId || undefined);

    // Wait for the faucet transaction to be confirmed
    const result = await faucetTx.wait();

    return {
      message: `Received ${args.assetId || "ETH"} from the faucet. Transaction: ${result.getTransactionLink()}`,
      body: {
        transactionLink: result.getTransactionLink()
      }
    };
  } catch (error) {
    return {
      message: `Error requesting faucet funds: ${error}`,
    };
  }
} 