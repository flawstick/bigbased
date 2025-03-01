import { LIQUIDITY_AGENT_CAPABILITIES } from "./capabilities";
import { LIQUIDITY_AGENT_DESCRIPTION } from "./description";
import { LIQUIDITY_AGENT_NAME } from "./name";
import { LIQUIDITY_TOOLS } from "./tools";

import type { Agent } from "@/ai/agent";

export const liquidityAgent: Agent = {
    name: LIQUIDITY_AGENT_NAME,
    slug: "liquidity",
    systemPrompt: LIQUIDITY_AGENT_DESCRIPTION,
    capabilities: LIQUIDITY_AGENT_CAPABILITIES,
    tools: LIQUIDITY_TOOLS
}