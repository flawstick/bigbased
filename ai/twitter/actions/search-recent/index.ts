import { TWITTER_SEARCH_RECENT_NAME } from "./name";
import { TWITTER_SEARCH_RECENT_PROMPT } from "./prompt";
import { TwitterSearchRecentInputSchema } from "./input-schema";
import { TwitterSearchRecentResultBodyType } from "./types";
import { searchRecent } from "./function";

import { TwitterAction } from "../twitter-action";

export class TwitterSearchRecentAction implements TwitterAction<typeof TwitterSearchRecentInputSchema, TwitterSearchRecentResultBodyType> {
  public name = TWITTER_SEARCH_RECENT_NAME;
  public description = TWITTER_SEARCH_RECENT_PROMPT;
  public argsSchema = TwitterSearchRecentInputSchema;
  public func = searchRecent;
} 