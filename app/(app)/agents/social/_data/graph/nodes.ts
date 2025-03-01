import { Node } from '@xyflow/react';

import styles from '@/app/styles.module.css';

export const nodes: Node[] = [
    {
      id: 'root',
      position: { x: 0, y: 0 },
      data: { 
          icon: 'ContactRound',
          name: 'Social Agent'
       },
      className: styles.node,
      type: 'central',
    },
    {
      id: 'sentiment-analyzer',
      position: { x: 0, y: -280 },
      data: { 
          icon: 'ChartBar',
          name: 'Sentiment Analyzer'
       },
      className: styles.node,
      type: 'agent',
    },
    {
      id: 'x-scraper',
      position: { x: 200, y: 200 },
      data: { 
          icon: 'Twitter',
          name: 'X Scraper'
      },
      className: styles.node,
      type: 'agent',
    },
    {
      id: 'telegram-scraper',
      position: { x: -200, y: 200 },
      data: { 
          icon: 'MessagesSquare',
          name: 'Telegram Scraper'
       },
      className: styles.node,
      type: 'agent',
    },
];
