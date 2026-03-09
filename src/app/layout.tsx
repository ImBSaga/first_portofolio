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
  title: 'Imam Bayu Saga | Frontend Developer Portfolio',
  description:
    'Portfolio of Imam Bayu Saga — Frontend Developer with 3+ years of experience building modern web applications using React.js, Next.js, TypeScript, and Tailwind CSS. Based in Bogor, West Java, Indonesia.',
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
