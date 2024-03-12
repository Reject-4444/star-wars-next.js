import Loading from '@/app/loading';
import { Metadata } from 'next';
import { ReactNode, Suspense } from 'react';

export const metadata: Metadata = {
    title: 'Star Wars - starship',
    description: 'Page about Star Wars\'s starship',
  };

export default function StarshipLayout({ children }: { children: ReactNode }) {
  return (
    <Suspense fallback={<Loading />}>
      <div>
        {children}
      </div>
    </Suspense>
  );
}
