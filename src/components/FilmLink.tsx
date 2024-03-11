import React, { FC } from 'react';
import { Film } from '@/types/types';
import Link from 'next/link';

interface Props {
  film: Film;
}

export const FilmLink: FC<Props> = ({ film }) => {
    const id = parseInt(film?.url?.match(/\d+/)?.[0] ?? '');

  return (
    <Link href={`/films/${id}`}>
      <h3 className='w-3/4 mx-auto text-center border py-2 my-1 text-1xl hover:bg-purple-800 hover:text-white transition-all duration-300'>
        {film.title}
      </h3>
    </Link>
  );
};
