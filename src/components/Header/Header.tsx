import { FaRegUser } from 'react-icons/fa6';
import Image from 'next/image';
import { IoMdNotificationsOutline } from 'react-icons/io';
import Link from 'next/link';

export const Header = () => {
  return (
    <header className="flex items-center justify-between bg-gray-100 p-4 shadow-md">
      <Image
        src="https://images.squarespace-cdn.com/content/v1/5aafcd3a4eddeccf69eae084/50316180-ada6-4bc7-ba98-5fb825380184/White+logo+with+lockup+icon+3.png?format=1500w"
        alt="Logo"
        width={167} // Set default width
        height={50} // Set default height
        // sizes="(max-width: 640px) 50vw, (max-width: 1024px) 25vw, 167px"
        className="mr-4 md:h-[53px] md:w-[175px]"
      />
      <div className="flex items-center">
        <nav className="hidden space-x-6 md:flex">
          <Link
            href="/"
            className="text-white-100 transition duration-300 hover:text-blue-700"
          >
            Home
          </Link>
          <Link
            href="/explore"
            className="text-white-100 transition duration-300 hover:text-blue-700"
          >
            Explore
          </Link>
          <Link
            href="/projects"
            className="text-white-100 transition duration-300 hover:text-blue-700"
          >
            Projects
          </Link>
        </nav>
      </div>
      <div className="flex items-center space-x-4">
        <input
          type="text"
          className="rounded border border-gray-300 p-2 transition duration-300 focus:border-blue-600 focus:outline-none"
          placeholder="Search..."
        />
        <IoMdNotificationsOutline className="h-6 w-6 text-white-100" />
        <div className="relative">
          <FaRegUser className="h-6 w-6 text-white-100" />
        </div>
      </div>
    </header>
  );
};
