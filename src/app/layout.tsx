import type { Metadata } from 'next';
import { Lobster } from 'next/font/google';
import './globals.css';
import { Header } from '../components/Header';
import { Suspense } from 'react';
import Loading from './loading';
import Error from './error';
import { ErrorBoundary } from 'next/dist/client/components/error-boundary';

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
        <ErrorBoundary errorComponent={Error}>
          <Suspense fallback={<Loading />}>
            <main>{children}</main>
          </Suspense>
        </ErrorBoundary>
      </body>
    </html>
  );
}
