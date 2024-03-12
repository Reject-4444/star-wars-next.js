import Loading from '@/app/loading';
import { Metadata } from 'next';
import { ReactNode, Suspense } from 'react';

export const metadata: Metadata = {
    title: 'Star Wars - film',
    description: 'Page about Star Wars\'s film',
  };

export default function FilmLayout({ children }: { children: ReactNode }) {
  return (
    <Suspense fallback={<Loading />}>
      <div>
        {children}
      </div>
    </Suspense>
  );
}
