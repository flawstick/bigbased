import "server-only";

import { add, del, find, get } from "./base";

import { getTokensContainer } from "../containers";

import { Token } from "../types";

// CREATE

/**
 * **DATABASE SERVICE**
 * 
 * Adds a new chat to the database.
 * 
 * @param {Token} token - The token data to be added.
 * @returns {Promise<Token | null>} The newly created token or null if creation failed.
 */
export const addToken = async (token: Token): Promise<Token | null> => {
    return add<Token, Token>(await getTokensContainer(), token);
};

// READ

/**
 * **DATABASE SERVICE**
 * 
 * Retrieves a token by its ID.
 * 
 * @param {Token["id"]} id - The ID of the token to retrieve.
 * @returns {Promise<Token | null>} The retrieved token or null if not found.
 */
export const getToken = async (id: Token["id"]): Promise<Token | null> => {
    return get(await getTokensContainer(), id, id);
};

/**
 * **DATABASE SERVICE**
 * 
 * Finds all tokens.
 * 
 * @returns {Promise<Token[]>} An array of tokens.
 */
export const findTokens = async (): Promise<Token[]> => {
    return find(
        await getTokensContainer(), 
        `SELECT * FROM c ORDER BY c._ts DESC`
    );
};

/**
 * **DATABASE SERVICE**
 * 
 * Finds all tokens by a symbol.
 * 
 * @param {string} symbol - The symbol to search for.
 * @returns {Promise<Token[]>} An array of tokens.
 */
export const findTokensBySymbol = async (symbol: string): Promise<Token[]> => {
    return find(await getTokensContainer(), `SELECT * FROM c WHERE LOWER(c.symbol) = LOWER(@symbol)`, [{ name: "@symbol", value: symbol }]);
};

export const getTokenBySymbol = async (symbol: string): Promise<Token | null> => {
    const tokens = await findTokensBySymbol(symbol);
    if (!tokens || tokens.length === 0) return null;
    if (tokens.length === 1) {
        return tokens[0];
    } else {
        let verifiedToken = tokens.find(token => token.tags.includes("verified"));
        if(verifiedToken) {
            return verifiedToken;
        } else {
            let communityToken = tokens.find(token => token.tags.includes("community"));
            if(communityToken) {
                return communityToken;
            } else {
                return tokens[0];
            }
        }
    }
};

// DELETE

/**
 * **DATABASE SERVICE**
 * 
 * Deletes a token from the database.
 * 
 * @param {Token["id"]} id - The ID of the token to delete.
 * @returns {Promise<boolean>} True if the deletion was successful, false otherwise.
 */
export const deleteToken = async (id: Token["id"]): Promise<boolean> => {
    return del(await getTokensContainer(), id, id);
};