import { Node } from '@xyflow/react';

import styles from '@/app/styles.module.css';

export const nodes: Node[] = [
    {
      id: 'root',
      position: { x: 0, y: 0 },
      data: { 
          icon: 'ChartCandlestick',
          name: 'Market Agent'
       },
      className: styles.node,
      type: 'central',
    },
    {
      id: 'trending',
      position: { x: 0, y: -280 },
      data: { 
          icon: 'Activity',
          name: 'Trending Coins'
       },
      className: styles.node,
      type: 'agent',
    },
    {
      id: 'token-data',
      position: { x: 200, y: 200 },
      data: { 
          icon: 'ChartLine',
          name: 'Price Feed'
      },
      className: styles.node,
      type: 'agent',
    },
    {
      id: 'token-data-2',
      position: { x: -200, y: 200 },
      data: { 
          icon: 'Link',
          name: 'On-Chain Data'
       },
      className: styles.node,
      type: 'agent',
    },
];
