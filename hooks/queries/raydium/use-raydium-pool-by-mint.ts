import useSWR from "swr";

import type { ApiV3PoolInfoItem } from "@raydium-io/raydium-sdk-v2";

export const useRaydiumPoolByMint = (mint: string) => {
    const { data, isLoading, error } = useSWR<ApiV3PoolInfoItem>(
        `/api/raydium/pool/mint/${mint}`,
        () => fetch(`/api/raydium/pool/mint/${mint}`).then(res => res.json()),
        { refreshInterval: 5000 }
    );

    return { data, isLoading, error };
}