import { heliusPath } from "../path";
import { TokenAccountsResponse, TokenAccount } from "../types/token-account";

export const getTokenAccountsByOwner = async (address: string, limit?: number) => {
    try {
        let allTokenAccounts: TokenAccount[] = [];
        let currentPage = 1;
        const PAGE_SIZE = 1000;
        
        while (true) {
            const { result }: { result: TokenAccountsResponse } = await (await fetch(heliusPath, {
                method: 'POST',
                headers: {
                    "Content-Type": "application/json"
                },
                body: JSON.stringify({
                    "jsonrpc": "2.0",
                    "id": 1,
                    "method": "getTokenAccounts",
                    "params": {
                        "owner": address,
                        "page": currentPage,
                        "limit": PAGE_SIZE
                    }
                }),
            })).json();

            const tokenAccounts = result.token_accounts;
            if (!tokenAccounts || tokenAccounts.length === 0) break;
            
            allTokenAccounts = [...allTokenAccounts, ...tokenAccounts];
            
            // If we have a limit and we've reached or exceeded it, slice and break
            if (limit && allTokenAccounts.length >= limit) {
                allTokenAccounts = allTokenAccounts.slice(0, limit);
                break;
            }
            
            // If we got less than PAGE_SIZE results, we've reached the end
            if (tokenAccounts.length < PAGE_SIZE) break;
            
            currentPage++;
        }

        return allTokenAccounts;
    } catch (error) {
        return [];
    }
}

export const getTokenAccountsByMint = async (mint: string, limit?: number) => {
    try {
        let allTokenAccounts: TokenAccount[] = [];
        let currentPage = 1;
        const PAGE_SIZE = 1000;
        
        while (true) {
            const { result }: { result: TokenAccountsResponse } = await (await fetch(heliusPath, {
                method: 'POST',
                headers: {
                    "Content-Type": "application/json"
                },
                body: JSON.stringify({
                    "jsonrpc": "2.0",
                    "id": 1,
                    "method": "getTokenAccounts",
                    "params": {
                        "mint": mint,
                        "page": currentPage,
                        "limit": PAGE_SIZE
                    }
                }),
            })).json();

            const tokenAccounts = result.token_accounts;
            if (!tokenAccounts || tokenAccounts.length === 0) break;
            
            allTokenAccounts = [...allTokenAccounts, ...tokenAccounts];
            
            // If we have a limit and we've reached or exceeded it, slice and break
            if (limit && allTokenAccounts.length >= limit) {
                allTokenAccounts = allTokenAccounts.slice(0, limit);
                break;
            }
            
            // If we got less than PAGE_SIZE results, we've reached the end
            if (tokenAccounts.length < PAGE_SIZE) break;
            
            currentPage++;
        }

        return allTokenAccounts;
    } catch (error) {
        return [];
    }
}