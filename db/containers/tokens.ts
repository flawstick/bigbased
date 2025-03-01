import { getContainer } from "@/db/containers/utils";

import { Container } from "@azure/cosmos";

import { Token } from "../types";

export const TOKENS_CONTAINER_ID = "tokens";

let tokensContainer: Container;

export const getTokensContainer = async () => {
    if (!tokensContainer) tokensContainer = await getContainer<Token>(TOKENS_CONTAINER_ID, "id")
    return tokensContainer;
};