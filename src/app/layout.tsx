import './globals.css';

import { Footer, Header } from '@/components';

import type { Metadata } from 'next';
import localFont from 'next/font/local';

const geistSans = localFont({
  src: './fonts/GeistVF.woff',
  variable: '--font-geist-sans',
  weight: '100 900',
});
const geistMono = localFont({
  src: './fonts/GeistMonoVF.woff',
  variable: '--font-geist-mono',
  weight: '100 900',
});

export const metadata: Metadata = {
  title: 'Makerble',
  description:
    "Makerble makes it easy for staff to record data, produce case studies and identify areas of good practice. All the data is in one place, so it's great for ...p",
  icons: {
    icon: 'https://688431.fs1.hubspotusercontent-na1.net/hubfs/688431/makerble%20default%20profile%20picture%20icon%20user.png',
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        <div className="flex min-h-screen flex-col">
          <Header />
          <div className="flex-grow">{children}</div>
          <Footer />
        </div>
      </body>
    </html>
  );
}
