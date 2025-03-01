import { StakingRewardsResponse } from "./types";

const STAKING_REWARDS_API_ENDPOINT = "https://api.stakingrewards.com/public/query";

const LIQUID_STAKING_QUERY = (limit: number) => `
    query GetBestLiquidStaking {
        rewardOptions(
            where: {
                inputAsset: { slugs: ["solana"] }
                typeKeys: ["liquid-staking"]
            }
            limit: ${limit}
            order: { metricKey_desc: "reward_rate" }
        ) {
            outputAssets(limit: 1) {
                symbol
                name
                logoUrl
            }
            providers(limit: 1) {
                name
                slug
                isVerified
            }
            metrics(
                where: {
                    metricKeys: [
                        "commission"
                        "staking_wallets"
                        "staked_tokens"
                        "reward_rate"
                        "staking_share"
                        "net_staking_flow_7d"
                    ]
                }
                limit: 6
            ) {
                label
                metricKey
                defaultValue
            }
        }
    }
`;

export const getBestLiquidStaking = async (limit: number = 5): Promise<StakingRewardsResponse> => {
    try {
        const response = await fetch(STAKING_REWARDS_API_ENDPOINT, {
            method: "POST",
            headers: {
                "Content-Type": "application/json",
                "X-API-KEY": process.env.STAKING_REWARDS_API_KEY!,
            },
            body: JSON.stringify({ query: LIQUID_STAKING_QUERY(limit) }),
        });

        if (!response.ok) {
            throw new Error(`HTTP error! status: ${response.status}`);
        }

        const data = await response.json();
        return data;
    } catch (error) {
        console.error("Error fetching liquid staking data:", error);
        throw error;
    }
};
