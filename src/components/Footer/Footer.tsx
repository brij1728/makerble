import { FaInstagram, FaLinkedin, FaXTwitter } from 'react-icons/fa6';

import Link from 'next/link';

export const Footer = () => {
  return (
    <footer className="bg-gray-800 p-4">
      <div className="text-white mx-auto flex max-w-screen-xl items-center justify-between">
        {/* Terms and Privacy Links */}
        <div className="space-x-4">
          <Link href="/terms-conditions" className="hover:text-blue-400">
            Terms & Conditions
          </Link>
          <Link href="/privacy" className="hover:text-blue-400">
            Privacy Policy
          </Link>
        </div>

        {/* Social Icons */}
        <div className="flex space-x-4">
          <Link href="https://www.instagram.com" aria-label="Instagram">
            <FaInstagram className="h-6 w-6 hover:text-blue-400" />
          </Link>
          <Link href="https://www.linkedin.com" aria-label="LinkedIn">
            <FaLinkedin className="h-6 w-6 hover:text-blue-400" />
          </Link>
          <Link href="https://www.twitter.com" aria-label="Twitter">
            <FaXTwitter className="h-6 w-6 hover:text-blue-400" />
          </Link>
        </div>
      </div>
    </footer>
  );
};
