import { FaRegUser } from 'react-icons/fa6';
import { IoMdNotificationsOutline } from 'react-icons/io';
import Link from 'next/link';

export const Header = () => {
  return (
    <header className="flex items-center justify-between bg-[#2f405b] p-4 shadow-md">
      <img
        src="https://images.squarespace-cdn.com/content/v1/5aafcd3a4eddeccf69eae084/50316180-ada6-4bc7-ba98-5fb825380184/White+logo+with+lockup+icon+3.png?format=1500w"
        alt="Logo"
        className="mr-4 h-[50px] w-[167px] md:h-[53px] md:w-[175px]"
      />
      <div className="flex items-center">
        <nav className="hidden space-x-6 md:flex">
          <Link href="/" className="text-white hover:text-blue-600">
            Home
          </Link>
          <Link href="/explore" className="text-white hover:text-blue-600">
            Explore
          </Link>
          <Link href="/projects" className="text-white hover:text-blue-600">
            Projects
          </Link>
        </nav>
      </div>
      <div className="flex items-center space-x-4">
        <input
          type="text"
          className="rounded border p-2"
          placeholder="Search..."
        />
        {/* Render the notification icon directly */}
        <IoMdNotificationsOutline className="h-6 w-6 text-white" />
        <div className="relative">
          <FaRegUser className="h-6 w-6 text-white" />
        </div>
      </div>
    </header>
  );
};
