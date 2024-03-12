import Loading from '@/app/loading';
import { Metadata } from 'next';
import { ReactNode, Suspense } from 'react';

export const metadata: Metadata = {
    title: 'Star Wars - hero',
    description: 'Page about Star Wars\'s hero',
  };

export default function HeroLayout({ children }: { children: ReactNode }) {
  return (
    <Suspense fallback={<Loading />}>
      <div>
        {children}
      </div>
    </Suspense>
  );
}
