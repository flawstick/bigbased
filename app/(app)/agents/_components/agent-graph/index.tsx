'use client'

import {
  ReactFlow,
  ProOptions,
  ReactFlowProvider,
  useNodesState,
  useEdgesState,
  NodeOrigin,
  Background,
  Node,
  Edge,
  addEdge,
  OnConnect,
} from '@xyflow/react';

import '@xyflow/react/dist/style.css';

import CentralNode from './nodes/central-node';
import AgentNode from './nodes/agent-node';

import useForceLayout from '@/app/_hooks/use-force-layout';
import { useCallback } from 'react';

const proOptions: ProOptions = { account: 'paid-pro', hideAttribution: true };

const nodeOrigin: NodeOrigin = [0.5, 0.5];

const defaultEdgeOptions = { style: { stroke: '#d19900', strokeWidth: 2, zIndex: 1000 } };

const nodeTypes = {
  central: CentralNode,
  agent: AgentNode,
};

interface Props {
  strength?: number;
  distance?: number;
  nodes: Node[];
  edges: Edge[];
}

const AgentGraphComponent: React.FC<Props> = ({ strength = -500, distance = 150, nodes: initialNodes, edges: initialEdges }) => {
  const useNodesResult = useNodesState(initialNodes);
  const [edges, setEdges, onEdgesChange] = useEdgesState(initialEdges);

  const onConnect: OnConnect = useCallback(
    (params) => setEdges((eds) => addEdge(params, eds)),
    [setEdges]
  );

  const dragEvents = useForceLayout({ 
    strength,
    distance,
    oscillationStrength: 0.1
  });

  return (
    <ReactFlow
      nodes={useNodesResult[0]}
      edges={edges}
      nodeTypes={nodeTypes}
      onNodesChange={useNodesResult[2]}
      onEdgesChange={onEdgesChange}
      proOptions={proOptions}
      onConnect={onConnect}
      onNodeDragStart={dragEvents.start}
      onNodeDrag={dragEvents.drag}
      onNodeDragStop={dragEvents.stop}
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

const AgentGraph: React.FC<Props> = ({ strength = -500, distance = 150, nodes, edges }) => {
  return (
    <ReactFlowProvider>
      <AgentGraphComponent
        strength={strength}
        distance={distance}
        nodes={nodes}
        edges={edges}
      />
    </ReactFlowProvider>
  );
}

export default AgentGraph;