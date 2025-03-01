import { BaseAction, BaseActionResult, BaseActionSchemaAny } from "@/ai/base-action";

export type InvokeActionSchemaAny = BaseActionSchemaAny;
export type InvokeActionResult<TBody> = BaseActionResult<TBody>;

/**
 * Represents the structure for Invoke Actions.
 */
export interface InvokeAction<TActionSchema extends InvokeActionSchemaAny, TBody> extends BaseAction<TActionSchema, TBody> {}