import Link from 'next/link';

export const Footer = () => {
  return (
    <footer className="text-white mt-10 bg-gray-100 p-4">
      <div className="mx-auto flex max-w-7xl justify-between">
        <div className="space-y-2">
          <Link href="/terms" className="text-white-100 hover:underline">
            Terms & Conditions
          </Link>
          <Link href="/privacy" className="text-white-100 hover:underline">
            Privacy Policy
          </Link>
        </div>
        <div className="flex space-x-4">
          <img src="/linkedin.svg" alt="LinkedIn" className="h-6 w-6" />
          <img src="/twitter.svg" alt="Twitter" className="h-6 w-6" />
          <img src="/instagram.svg" alt="Instagram" className="h-6 w-6" />
        </div>
      </div>
    </footer>
  );
};
