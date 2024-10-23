import { ProgressBar } from '@/components/ProgressBar';
import React from 'react';
import { progressData } from '@/data/progressData';

const PersonalProgress = () => {
  return (
    <div>
      <h2 className="mb-4 text-xl font-bold">Personal Progress</h2>

      {progressData.map((item, index) => (
        <ProgressBar
          key={index}
          label={item.label}
          progress={item.progress}
          color={item.color}
        />
      ))}
    </div>
  );
};

export default PersonalProgress;
