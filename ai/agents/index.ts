import { marketAgent } from "./market";
import { stakingAgent } from "./staking";
import { walletAgent } from "./wallet";
import { knowledgeAgent } from "./knowledge";
import { tradingAgent } from "./trading";
import { tokenAnalysisAgent } from "./token-analysis";
import { liquidityAgent } from "./liquidity";

export const agents = [
    walletAgent,
    stakingAgent,
    marketAgent,
    tradingAgent,
    knowledgeAgent,
    tokenAnalysisAgent,
    liquidityAgent
]