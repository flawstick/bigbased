import { z } from "zod";

import { TweetV2, UserV2 } from "twitter-api-v2";

import { TwitterSearchRecentInputSchema } from "./input-schema";
import { TwitterActionResult } from "../twitter-action";

export type TwitterSearchRecentSchemaType = typeof TwitterSearchRecentInputSchema;

export type TwitterSearchRecentArgumentsType = z.infer<TwitterSearchRecentSchemaType>;

export type TwitterSearchRecentResultBodyType = {
    tweets: {
        tweet: TweetV2;
        user: UserV2;
    }[];
}; 

export type TwitterSearchRecentResultType = TwitterActionResult<TwitterSearchRecentResultBodyType>;