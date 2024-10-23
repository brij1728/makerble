'use client';

import React, { useState } from 'react';

import Link from 'next/link';
import { Task } from '@/types/task';
import { TaskItem } from '../TaskItem';

interface TaskListProps {
  tasks: Task[];
  tasksToShowInitially?: number;
  showAllLink?: boolean;
}

export const TaskList: React.FC<TaskListProps> = ({
  tasks,
  tasksToShowInitially = 5,
  showAllLink = false,
}) => {
  const [newTask, setNewTask] = useState('');
  const [taskList, setTaskList] = useState(tasks);

  const handleAddTask = () => {
    if (newTask.trim()) {
      const newTaskItem: Task = {
        id: taskList.length + 1,
        description: newTask,
        completed: false,
      };
      setTaskList([newTaskItem, ...taskList]);
      setNewTask('');
    }
  };

  // Only show the initial few tasks unless "Show All" is enabled
  const tasksToDisplay = taskList.slice(0, tasksToShowInitially);

  return (
    <div className="bg-white rounded-lg p-6 shadow-md">
      <h2 className="mb-4 text-lg font-semibold">Tasks</h2>

      {/* Add New Task */}
      <div className="mb-4 flex">
        <input
          type="text"
          value={newTask}
          onChange={(e) => setNewTask(e.target.value)}
          placeholder="Add your next task"
          className="flex-grow rounded-l-md border border-gray-300 p-2 focus:outline-none"
        />
        <button
          onClick={handleAddTask}
          className="text-white rounded-r-md bg-red-500 p-2"
        >
          Save Task
        </button>
      </div>

      {/* Render Task Items */}
      {tasksToDisplay.map((task) => (
        <TaskItem
          key={task.id}
          task={task.description}
          completed={task.completed}
          onToggleComplete={() =>
            setTaskList(
              taskList.map((t) =>
                t.id === task.id ? { ...t, completed: !t.completed } : t
              )
            )
          }
        />
      ))}

      {/* Show All / Link to Full Tasks Page */}
      {showAllLink && (
        <div className="mt-4">
          <Link href="/tasks" className="text-blue-600 hover:underline">
            Show All
          </Link>
        </div>
      )}
    </div>
  );
};
