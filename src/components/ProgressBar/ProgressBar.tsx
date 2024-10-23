import { ProgressItem } from '@/types/progress';
import React from 'react';

export const ProgressBar: React.FC<ProgressItem> = ({
  label,
  progress,
  color,
}) => {
  return (
    <div className="mb-4">
      <p className="mb-1 text-gray-600">{label}</p>
      <div className="h-4 w-full rounded-full bg-gray-200">
        <div
          className="text-white h-full rounded-full text-center text-xs"
          style={{
            width: `${progress}%`,
            backgroundColor: color,
          }}
        >
          {progress}%
        </div>
      </div>
    </div>
  );
};
