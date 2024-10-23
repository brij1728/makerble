import Link from 'next/link';
import React from 'react';

export const Sidebar = () => {
  return (
    <div className="text-white w-1/4 bg-gray-100 p-6">
      <h2 className="mb-4 text-2xl font-bold">Sidebar</h2>
      <nav>
        <ul className="space-y-4">
          <li>
            <Link href="/projects" className="hover:text-blue-400">
              Projects
            </Link>
          </li>
          <li>
            <Link href="/albums" className="hover:text-blue-400">
              Albums
            </Link>
          </li>
          <li>
            <Link href="/organizations" className="hover:text-blue-400">
              Organizations
            </Link>
          </li>
          <li>
            <Link href="/followers" className="hover:text-blue-400">
              Followers
            </Link>
          </li>
        </ul>
      </nav>
    </div>
  );
};
