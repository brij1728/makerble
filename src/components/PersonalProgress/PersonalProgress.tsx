import Link from 'next/link';
import { ProgressBar } from '../ProgressBar';
import React from 'react';
import { progressData } from '@/data/progressData';

export const PersonalProgress = () => {
  return (
    <div className="bg-white rounded-lg p-6 shadow">
      <h2 className="mb-4 text-xl font-bold">Personal Progress</h2>

      {progressData.map((item, index) => (
        <ProgressBar
          key={index}
          label={item.label}
          progress={item.progress}
          color={item.color}
        />
      ))}

      {/* Link to view all progress */}
      <Link
        href="/personal-progress"
        className="mt-4 block text-blue-600 hover:underline"
      >
        Show All
      </Link>
    </div>
  );
};
