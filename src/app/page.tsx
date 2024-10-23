import { NewsFeed, PersonalProgress } from '@/components';

import { EventsList } from '@/components/EventList';
import { eventData } from '@/data/eventData';

const HomePage = () => {
  return (
    <div className="flex">
      <div className="flex-grow">
        <NewsFeed />
      </div>

      <div className="flex w-1/4 flex-col gap-2">
        <PersonalProgress />
        <EventsList events={eventData} showAllLink />
      </div>
    </div>
  );
};

export default HomePage;
