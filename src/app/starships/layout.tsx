import { Metadata } from 'next';
import { ReactNode } from 'react';

export const metadata: Metadata = {
  title: 'Star Wars - starships',
  description: "Page about all Star Wars's starships",
};

export default function StarshipsLayout({ children }: { children: ReactNode }) {
  return (
    <>
      {children}
    </>
  );
}
