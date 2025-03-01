import { marketAgentInfo } from "./info";
import { marketAgentGraph } from "./graph";
import { marketAgentSampleQueries } from "./sample-queries";

import { Agent } from "../../_types/agent";

export const marketAgent: Agent = {
    info: marketAgentInfo,
    graph: marketAgentGraph,
    sampleQueries: marketAgentSampleQueries,
}