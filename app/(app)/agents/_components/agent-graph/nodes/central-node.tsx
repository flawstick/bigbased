import { Handle, Position } from '@xyflow/react';

import { Icon } from '@/components/ui';

import { IconName } from '@/types';

interface CentralNodeProps {
  data: {
    name: string;
    icon: IconName;
  };
}

const CentralNode = ({ data }: CentralNodeProps) => {
  return (
    <div className="h-52 w-52 rounded-full border-2 border-brand-600 bg-[#f6ebd4] dark:bg-[#4f3e17] z-[100] shadow-brand-600/40 shadow-lg">
      <Handle type="source" position={Position.Right} className="w-3 h-3 bg-violet-500" />
      <div className="h-full w-full flex flex-col items-center justify-center text-brand-600">
        <Icon name={data.icon} className="w-24 h-24" />
        <p className="text-lg font-bold">{data.name}</p>
      </div>
      <Handle type="target" position={Position.Left} />
    </div>
  );
};

export default CentralNode; 