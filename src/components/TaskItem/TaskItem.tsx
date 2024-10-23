import { FaCircleCheck } from 'react-icons/fa6';
import React from 'react';

interface TaskItemProps {
  task: string;
  completed: boolean;
  onToggleComplete: () => void;
}

export const TaskItem: React.FC<TaskItemProps> = ({
  task,
  completed,
  onToggleComplete,
}) => {
  return (
    <div
      className={`mb-2 flex items-center justify-between rounded-md border-l-4 p-3 ${completed ? 'border-green-500' : 'border-gray-300'}`}
    >
      <p className={`${completed ? 'text-gray-500 line-through' : ''}`}>
        {task}
      </p>
      <button onClick={onToggleComplete}>
        <FaCircleCheck
          className={`${completed ? 'text-green-500' : 'text-gray-400'}`}
        />
      </button>
    </div>
  );
};
