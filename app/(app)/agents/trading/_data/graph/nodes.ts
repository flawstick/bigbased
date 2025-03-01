import { Node } from '@xyflow/react';

import styles from '@/app/styles.module.css';

export const nodes: Node[] = [
    {
      id: 'root',
      position: { x: 0, y: 0 },
      data: { 
          icon: 'ArrowLeftRight',
          name: 'Trading Agent'
       },
      className: styles.node,
      type: 'central',
    },
    {
      id: 'market-agent',
      position: { x: 0, y: -280 },
      data: { 
          icon: 'ChartCandlestick',
          name: 'Market Agent'
       },
      className: styles.node,
      type: 'agent',
    },
    {
      id: 'social-agent',
      position: { x: 200, y: 200 },
      data: { 
          icon: 'ContactRound',
          name: 'Social Agent'
      },
      className: styles.node,
      type: 'agent',
    },
    {
      id: 'jupiter',
      position: { x: -200, y: 200 },
      data: { 
          icon: 'Waypoints',
          name: 'DEX Aggregator'
       },
      className: styles.node,
      type: 'agent',
    },
];
