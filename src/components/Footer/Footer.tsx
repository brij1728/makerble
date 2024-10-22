import { FaInstagram, FaLinkedin, FaXTwitter } from 'react-icons/fa6';

import Link from 'next/link';

export const Footer = () => {
  return (
    <footer className="text-white mt-10 bg-gray-100 p-4">
      <div className="mx-auto flex max-w-7xl justify-between">
        <div className="space-x-4">
          <Link href="/terms" className="text-white-100 hover:underline">
            Terms & Conditions
          </Link>
          <Link href="/privacy" className="text-white-100 hover:underline">
            Privacy Policy
          </Link>
        </div>
        <div className="flex gap-2 space-x-4">
          <Link href="https://www.instagram.com" className="text-white-100">
            <FaInstagram className="h-6 w-6" />
          </Link>
          <Link href="https://www.linkedin.com" className="text-white-100">
            <FaLinkedin className="h-6 w-6" />
          </Link>
          <Link href="https://www.twitter.com" className="text-white-100">
            <FaXTwitter className="h-6 w-6" />
          </Link>
        </div>
      </div>
    </footer>
  );
};
