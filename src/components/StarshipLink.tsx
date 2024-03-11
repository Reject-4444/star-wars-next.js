import React, { FC } from 'react';
import { Hero, Starship } from '@/types/types';
import Link from 'next/link';

interface Props {
  starship: Starship;
}

export const StarshipLink: FC<Props> = ({ starship }) => {
  const id = parseInt(starship?.url?.match(/\d+/)?.[0] ?? '');

  return (
    <Link href={`/starships/${id}`}>
      <h3 className='w-3/4 mx-auto text-center border py-2 my-1 text-1xl hover:bg-purple-800 hover:text-white transition-all duration-300'>
        {starship.name}
      </h3>
    </Link>
  );
};
