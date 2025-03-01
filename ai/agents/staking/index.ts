import { STAKING_AGENT_CAPABILITIES } from "./capabilities";
import { STAKING_AGENT_DESCRIPTION } from "./description";
import { STAKING_AGENT_NAME } from "./name";
import { STAKING_TOOLS } from "./tools";

import type { Agent } from "@/ai/agent";

export const stakingAgent: Agent = {
    name: STAKING_AGENT_NAME,
    slug: "staking",
    systemPrompt: STAKING_AGENT_DESCRIPTION,
    capabilities: STAKING_AGENT_CAPABILITIES,
    tools: STAKING_TOOLS
}