import { ApiV3PoolInfoItem } from "@raydium-io/raydium-sdk-v2";

type ResponseType = {
    id: string;
    success: boolean;
    data: ApiV3PoolInfoItem[]
}

export const getPoolFromLpMint = async (lpMint: string): Promise<ApiV3PoolInfoItem | null> => {
    const response = await fetch(`https://api-v3.raydium.io/pools/info/lps?lps=${lpMint}`, {
        headers: {
            'accept': 'application/json'
        }
    });

    if(!response.ok) {
        return null;
    }

    const data: ResponseType = await response.json();

    if(data.success) {
        return data.data[0] || null;
    }

    return null;
}