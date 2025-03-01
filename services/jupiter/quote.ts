import { QuoteGetRequest } from "@jup-ag/api";

import { jupiterQuoteApi } from "./client";
  
export const getQuote = async (inputMint: string, outputMint: string, amount: number) => {

	const params: QuoteGetRequest = {
		inputMint,
		outputMint,
		amount,
		maxAccounts: 20,
		slippageBps: 300,
	};

	// get quote
	const quote = await jupiterQuoteApi.quoteGet(params);

	if (!quote) {
		throw new Error("unable to quote");
	}
	
	return quote;
}