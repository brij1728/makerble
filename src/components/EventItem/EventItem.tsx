import { EventItemProps } from '@/types/event';
import { FaC } from 'react-icons/fa6';
import React from 'react';

export const EventItem: React.FC<EventItemProps> = ({
  title,
  date,
  time,
  attendees,
  onClickSettings,
}) => {
  return (
    <div className="bg-white mb-4 flex items-start justify-between rounded-md p-4 shadow-md">
      <div>
        <h3 className="font-semibold text-blue-600">{title}</h3>
        <p className="text-sm text-gray-500">{`${time} ${date}`}</p>
        <p className="text-sm text-gray-600">{attendees}</p>
      </div>
      {onClickSettings && (
        <FaC
          onClick={onClickSettings}
          className="h-5 w-5 cursor-pointer text-gray-400 hover:text-blue-600"
        />
      )}
    </div>
  );
};
