import React from 'react';
import { TaskList } from '@/components/TaskList';
import { taskData } from '@/data/taskData';

const TasksPage = () => {
  return (
    <div>
      <TaskList tasks={taskData} />
    </div>
  );
};

export default TasksPage;
