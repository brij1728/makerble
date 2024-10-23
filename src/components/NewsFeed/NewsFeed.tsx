import React from 'react';
import { newsData } from '@/data/newsData';

export const NewsFeed = () => {
  return (
    <div className="rounded-lg bg-gray-50 p-6 shadow-md">
      <h2 className="mb-4 text-2xl font-bold">NewsFeed</h2>
      <div className="space-y-4">
        {newsData.map((item) => (
          <div key={item.id} className="bg-white rounded p-4 shadow-md">
            <div className="flex items-center space-x-4">
              <div className="h-10 w-10 rounded-full bg-gray-400"></div>{' '}
              {/* Placeholder for user avatar */}
              <div>
                <p className="font-semibold">{item.user}</p>
                <p className="text-sm text-gray-500">{item.message}</p>
              </div>
            </div>
            <p className="mt-2 text-xs text-gray-400">{item.time}</p>
          </div>
        ))}
      </div>
    </div>
  );
};
