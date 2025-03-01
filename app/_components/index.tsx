'use client'

import { useCallback } from 'react';

import {
  ReactFlow,
  ProOptions,
  ReactFlowProvider,
  useNodesState,
  useEdgesState,
  NodeOrigin,
  addEdge,
  OnConnect,
  Background,
} from '@xyflow/react';
import '@xyflow/react/dist/style.css';

import CentralNode from './nodes/CentralNode';
import AgentNode from './nodes/AgentNode';

import useForceLayout from '../_hooks/use-force-layout';

import { initialNodes, initialEdges } from '../_data/initial-elements';

const proOptions: ProOptions = { account: 'paid-pro', hideAttribution: true };

type ExampleProps = {
  strength?: number;
  distance?: number;
};

const nodeOrigin: NodeOrigin = [0.5, 0.5];

const defaultEdgeOptions = { style: { stroke: '#d19900', strokeWidth: 2 } };

const nodeTypes = {
  central: CentralNode,
  agent: AgentNode,
};

function ReactFlowPro({ strength = -500, distance = 150 }: ExampleProps = {}) {
  const useNodesResult = useNodesState(initialNodes);
  const [edges, setEdges, onEdgesChange] = useEdgesState(initialEdges);

  useForceLayout({ strength, distance });

  const onConnect: OnConnect = useCallback(
    (params) => setEdges((eds) => addEdge(params, eds)),
    [setEdges]
  );

  return (
    <ReactFlow
      nodes={useNodesResult[0]}
      edges={edges}
      nodeTypes={nodeTypes}
      onNodesChange={useNodesResult[2]}
      onEdgesChange={onEdgesChange}
      proOptions={proOptions}
      onConnect={onConnect}
      onNodeDragStart={() => {}}
      onNodeDrag={() => {}}
      onNodeDragStop={() => {}}
      nodeOrigin={nodeOrigin}
      defaultEdgeOptions={defaultEdgeOptions}
      panOnDrag={false}
      zoomOnDoubleClick={false}
      zoomOnScroll={false}
      fitView
    >
      <Background />
    </ReactFlow>
  );
}

function GraphComponent() {

  return (
    <ReactFlowProvider>
      <ReactFlowPro />
    </ReactFlowProvider>
  );
}

export default GraphComponent;
