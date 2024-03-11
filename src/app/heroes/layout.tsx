import { Metadata } from 'next';
import { ReactNode } from 'react';

export const metadata: Metadata = {
  title: 'Star Wars - heroes',
  description: "Page about all Star Wars's heroes",
};

export default function HeroesLayout({ children }: { children: ReactNode }) {
  return (
    <>
      <h1 className='text-center text-4xl my-10'>Heroes</h1>
      {children}
    </>
  );
}
