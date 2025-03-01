export interface JupiterTokenData {
    address: string;
    name: string;
    symbol: string;
    decimals: number;
    tags: string[];
    logoURI: string;
    daily_volume: number;
    freeze_authority: string | null;
    mint_authority: string | null;
    permanent_delegate: string | null;
    extensions: {
        coingeckoId?: string;
    };
}

export interface FetchPriceResponse {
    status: "success" | "error";
    tokenId?: string;
    priceInUSDC?: string;
    message?: string;
    code?: string;
} 