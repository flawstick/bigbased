export interface TokenAccount {
    address: string;
    mint: string;
    owner: string;
    amount: number;
    delegated_amount: number;
    frozen: boolean;
}

export interface TokenAccountsResponse {
    total: number;
    limit: number;
    cursor: string;
    token_accounts: TokenAccount[];
}

export interface TokenLargestAccountsResponse {
    context: {
        slot: number;
    };
    value: TokenLargestAccount[];
}

export interface TokenLargestAccount {
    address: string;
    amount: number;
    decimals: number;
    uiAmount: number;
    uiAmountString: string;
}