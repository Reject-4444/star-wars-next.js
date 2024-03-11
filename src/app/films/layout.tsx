import { Metadata } from 'next';
import { ReactNode } from 'react';

export const metadata: Metadata = {
    title: 'Star Wars - films',
    description: 'Page about all Star Wars\'s films',
  };

export default function FilmsLayout({ children }: { children: ReactNode }) {
  return (
    <>
      <div>
        <h1 className='text-center text-4xl my-10'>Films</h1>
        {children}
      </div>
    </>
  );
}
