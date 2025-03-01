import React from 'react'

import AgentHeader from './agent-header'

import { Agent } from '../_types/agent'
import SampleQueries from './sample-queries'
import AgentGraph from './agent-graph'

interface Props {
    agent: Agent
}

const AgentPage: React.FC<Props> = ({ agent }) => {
    return (
        <div className="h-full w-full max-w-2xl mx-auto flex flex-col gap-4">
            <AgentHeader
                {...agent.info}
            />
            <SampleQueries sampleQueries={agent.sampleQueries} />
            <div className="rounded-md border border-neutral-200 dark:border-neutral-700 h-full w-full">
                <AgentGraph
                    {...agent.graph}
                />
            </div>
        </div>
    )
}

export default AgentPage