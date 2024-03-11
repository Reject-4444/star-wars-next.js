import React, { FC } from 'react';
import { Hero } from '@/types/types';
import Link from 'next/link';

interface Props {
  hero: Hero;
}

export const HeroLink: FC<Props> = ({ hero }) => {
  const id = parseInt(hero?.url?.match(/\d+/)?.[0] ?? '');
  
  return (
    <Link href={`/heroes/${id}`}>
      <h3 className="w-3/4 mx-auto text-center border py-2 my-1 text-1xl hover:bg-purple-800 hover:text-white transition-all duration-300">{hero.name}</h3>
    </Link>
  );
};
