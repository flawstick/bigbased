import { TOKEN_ANALYSIS_AGENT_CAPABILITIES } from "./capabilities";
import { TOKEN_ANALYSIS_AGENT_DESCRIPTION } from "./description";
import { TOKEN_ANALYSIS_AGENT_NAME } from "./name";
import { TOKEN_ANALYSIS_TOOLS } from "./tools";

import type { Agent } from "@/ai/agent";

export const tokenAnalysisAgent: Agent = {
    name: TOKEN_ANALYSIS_AGENT_NAME,
    slug: "token-analysis",
    systemPrompt: TOKEN_ANALYSIS_AGENT_DESCRIPTION,
    capabilities: TOKEN_ANALYSIS_AGENT_CAPABILITIES,
    tools: TOKEN_ANALYSIS_TOOLS
}