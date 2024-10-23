import { Board, NewsFeed } from '@/components';

const HomePage = () => {
  return (
    <div className="flex">
      <div className="flex-grow">
        <NewsFeed />
      </div>
      <Board />
    </div>
  );
};

export default HomePage;
