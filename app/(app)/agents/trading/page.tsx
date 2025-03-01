import React from 'react'

import AgentPage from '../_components';

import { tradingAgent } from './_data';

const TradingAgentPage: React.FC = () => {
    return (
        <AgentPage
            agent={tradingAgent}
        />
    )
}

export default TradingAgentPage;