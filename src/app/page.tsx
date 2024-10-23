import { EventsList, NewsFeed, PersonalProgress, TaskList } from '@/components';

import { eventData } from '@/data/eventData';
import { taskData } from '@/data/taskData';

const HomePage = () => {
  return (
    <div className="flex gap-2">
      <div className="flex-grow">
        <div className="flex flex-col gap-2">
          <TaskList tasks={taskData} tasksToShowInitially={5} showAllLink />
          <NewsFeed />
        </div>
      </div>

      <div className="flex w-1/4 flex-col gap-2">
        <PersonalProgress />
        <EventsList events={eventData} showAllLink />
      </div>
    </div>
  );
};

export default HomePage;
