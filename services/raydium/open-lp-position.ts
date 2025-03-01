import { raydiumTransactionClient } from "./client"
import { BN } from "@project-serum/anchor"

import { Percent, ApiV3PoolInfoStandardItem, TokenAmount, toTokenAmount, createLogger, toToken, TxVersion, AmmV4Keys, AmmV5Keys, Raydium } from "@raydium-io/raydium-sdk-v2"
import { getRaydiumPoolById } from "./get-pools"
import Decimal from "decimal.js"

export const openStandardLPPosition = async ({
    poolId,
    address,
    inputAmount,
    baseIn,
    slippage,
}: {
    poolId: string,
    address: string,
    inputAmount: string,
    baseIn: boolean,
    slippage: Percent,
}) => {
    try {        
        const poolInfo = await getRaydiumPoolById(poolId);

        if (!poolInfo) {
            throw new Error("Pool not found");
        }

        if(poolInfo.type !== "Standard") {
            throw new Error("Pool is not a standard pool");
        }

        const transactionClient = await raydiumTransactionClient(address);

        const { minAnotherAmount, maxAnotherAmount, anotherAmount } = transactionClient.liquidity.computePairAmount({
            poolInfo: poolInfo as ApiV3PoolInfoStandardItem,
            amount: inputAmount,
            slippage,
            baseIn,
        });

        const { execute, transaction } = await transactionClient.liquidity.addLiquidity({
            poolInfo: poolInfo as ApiV3PoolInfoStandardItem,
            amountInA: new TokenAmount(
                toToken(poolInfo.mintA),
                new Decimal(inputAmount).mul(10 ** poolInfo.mintA.decimals).toFixed(0)
            ),
            amountInB: new TokenAmount(
                toToken(poolInfo.mintB),
                new Decimal(anotherAmount.toExact()).mul(10 ** poolInfo.mintB.decimals).toFixed(0)
            ),
            otherAmountMin: minAnotherAmount,
            fixedSide: "a",
            txVersion: TxVersion.V0
        });

        // Optional: Execute the transaction
        // const { txId } = await execute({ sendAndConfirm: true });
        
        return { execute, transaction };
    } catch (error) {
        console.error("Error in openStandardLPPosition:", error);
        throw error;
    }
}