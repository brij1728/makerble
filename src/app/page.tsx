import { NewsFeed, PersonalProgress } from '@/components';

const HomePage = () => {
  return (
    <div className="flex">
      {/* Main Content (NewsFeed) */}
      <div className="flex-grow">
        <NewsFeed />
      </div>

      {/* Sidebar Content (PersonalProgress) */}
      <div className="w-1/4 p-4">
        <PersonalProgress />
      </div>
    </div>
  );
};

export default HomePage;
