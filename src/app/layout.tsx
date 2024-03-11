import type { Metadata } from 'next';
import { Lobster } from 'next/font/google';
import './globals.css';
import { Header } from '../components/Header';

const lobster = Lobster({ weight: ['400'], subsets: ['latin'] });

export const metadata: Metadata = {
  title: 'Star Wars',
  description: 'Website for funs Star Wars',
};
export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang='en'>
      <body className={lobster.className}>
        <Header />
        <main>{children}</main>
      </body>
    </html>
  );
}
