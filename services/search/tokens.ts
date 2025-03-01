import { tokensSearchClient } from "./client";

import type { Token } from "@/db/types";

export const searchForTokens = async (q: string): Promise<Token[]> => {
    return tokensSearchClient.search(`${q}*`, { top: 10 })
        .then(async res => {
            const hits: Token[] = [];
            for await (const result of res.results) {
                hits.push(result.document as Token);
            }
            return hits;
        })
        .catch(err => {
            return [] as Token[];
        });
}