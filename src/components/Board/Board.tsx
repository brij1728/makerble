'use client';

import React, { useState } from 'react';

import { Task } from '@/types/task';

const initialTasks: Task[] = [
  { id: 1, description: 'Complete React project setup', completed: false },
  { id: 2, description: 'Write API integration tests', completed: false },
];

export const Board = () => {
  const [tasks, setTasks] = useState(initialTasks);

  const toggleTaskCompletion = (id: number) => {
    setTasks(
      tasks.map((task) =>
        task.id === id ? { ...task, completed: !task.completed } : task
      )
    );
  };

  return (
    <div className="bg-white w-1/4 border-l p-6">
      <h2 className="mb-4 text-2xl font-bold">Tasks</h2>
      <ul className="space-y-4">
        {tasks.map((task) => (
          <li key={task.id} className="flex items-center space-x-4">
            <input
              type="checkbox"
              checked={task.completed}
              onChange={() => toggleTaskCompletion(task.id)}
              className="h-5 w-5"
            />
            <p
              className={`${task.completed ? 'text-gray-500 line-through' : ''}`}
            >
              {task.description}
            </p>
          </li>
        ))}
      </ul>
    </div>
  );
};
