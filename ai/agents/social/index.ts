import { SOCIAL_AGENT_CAPABILITIES } from "./capabilities";
import { SOCIAL_AGENT_DESCRIPTION } from "./description";
import { SOCIAL_AGENT_NAME } from "./name";
import { SOCIAL_TOOLS } from "./tools";

import type { Agent } from "@/ai/agent";

export const socialAgent: Agent = {
    name: SOCIAL_AGENT_NAME,
    slug: "social",
    systemPrompt: SOCIAL_AGENT_DESCRIPTION,
    capabilities: SOCIAL_AGENT_CAPABILITIES,
    tools: SOCIAL_TOOLS
}