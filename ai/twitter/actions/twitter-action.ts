import type { TwitterApi } from "twitter-api-v2";
import { BaseAction, BaseActionResult, BaseActionSchemaAny } from "@/ai/base-action";

export type TwitterActionSchemaAny = BaseActionSchemaAny;
export type TwitterActionResult<TBody> = BaseActionResult<TBody>;

/**
 * Represents the structure for Twitter Actions.
 */
export interface TwitterAction<TActionSchema extends TwitterActionSchemaAny, TBody> extends BaseAction<TActionSchema, TBody, TwitterApi> {}