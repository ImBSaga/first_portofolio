import clsx from 'clsx';
import type { Metadata } from 'next';
import './globals.css';

// Font
import { Poppins } from 'next/font/google';
const poppins = Poppins({
  subsets: ['latin'],
  weight: ['400', '500', '600', '700', '800'],
  style: ['normal', 'italic'],
  variable: '--font-poppins',
});

export const metadata: Metadata = {
  title: 'First Portfolio',
  description: 'My First Portfolio',
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang='en'>
      <body className={clsx(poppins.variable, 'antialiased')}>{children}</body>
    </html>
  );
}
