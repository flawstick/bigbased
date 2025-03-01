import { tradingAgentInfo } from "./info";
import { tradingAgentGraph } from "./graph";
import { tradingAgentSampleQueries } from "./sample-queries";

import { Agent } from "../../_types/agent";

export const tradingAgent: Agent = {
    info: tradingAgentInfo,
    graph: tradingAgentGraph,
    sampleQueries: tradingAgentSampleQueries,
}