import { FaRegUser } from 'react-icons/fa6';
import Image from 'next/image';
import { IoMdNotificationsOutline } from 'react-icons/io';
import Link from 'next/link';

export const Header = () => {
  return (
    <header className="bg-gray-800 p-4 shadow-md">
      <div className="mx-auto flex max-w-screen-xl items-center justify-between">
        {/* Logo with Link */}
        <Link href="/">
          <Image
            src="https://images.squarespace-cdn.com/content/v1/5aafcd3a4eddeccf69eae084/50316180-ada6-4bc7-ba98-5fb825380184/White+logo+with+lockup+icon+3.png?format=1500w"
            alt="Logo"
            width={167}
            height={50}
            className="cursor-pointer"
          />
        </Link>

        {/* Navigation Links */}
        <nav className="hidden space-x-6 md:flex">
          <Link href="/" className="text-white-100 hover:text-blue-400">
            Home
          </Link>
          <Link href="/explore" className="text-white-100 hover:text-blue-400">
            Explore
          </Link>
          <Link href="/projects" className="text-white-100 hover:text-blue-400">
            Projects
          </Link>
        </nav>

        {/* Search and Icons */}
        <div className="flex items-center space-x-4">
          <input
            type="text"
            placeholder="Search..."
            className="rounded border border-gray-300 p-2 focus:border-blue-500 focus:outline-none"
          />
          <IoMdNotificationsOutline className="h-6 w-6 text-white-100" />
          <FaRegUser className="h-6 w-6 text-white-100" />
        </div>
      </div>
    </header>
  );
};
