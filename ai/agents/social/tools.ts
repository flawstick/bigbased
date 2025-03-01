import { TWITTER_SEARCH_RECENT_NAME } from "@/ai/action-names";
import { twitterTool } from "@/ai/twitter";
import { TwitterSearchRecentAction } from "@/ai/twitter/actions/search-recent";
import TwitterApi from "twitter-api-v2";

export const SOCIAL_TOOLS = {
    [`social-${TWITTER_SEARCH_RECENT_NAME}`]: twitterTool(new TwitterSearchRecentAction(), new TwitterApi(process.env.TWITTER_BEARER_TOKEN!)),
}