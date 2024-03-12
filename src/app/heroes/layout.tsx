import { Metadata } from 'next';
import { ReactNode } from 'react';

export const metadata: Metadata = {
  title: 'Star Wars - heroes',
  description: "Page about all Star Wars's heroes",
};

export default function HeroesLayout({ children }: { children: ReactNode }) {
  return (
    <>
      {children}
    </>
  );
}
