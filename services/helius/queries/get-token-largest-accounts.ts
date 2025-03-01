import { heliusPath } from "../path";
import { TokenLargestAccountsResponse } from "../types/token-account";

export const getTokenLargestAccounts = async (
    mintAddress: string
) => {
    try {
        const { result }: { result: TokenLargestAccountsResponse } = await (await fetch(heliusPath, {
            method: 'POST',
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify({
                jsonrpc: "2.0",
                id: 1,
                method: "getTokenLargestAccounts",
                params: [mintAddress],
            }),
        })).json();

        return result.value;
    } catch (error) {
        return [];
    }
};
