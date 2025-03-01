import { socialAgentInfo } from "./info";
import { socialAgentGraph } from "./graph";
import { socialAgentSampleQueries } from "./sample-queries";

import { Agent } from "../../_types/agent";

export const socialAgent: Agent = {
    info: socialAgentInfo,
    graph: socialAgentGraph,
    sampleQueries: socialAgentSampleQueries,
}