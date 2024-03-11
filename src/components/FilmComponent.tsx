import { Film } from '@/types/types';
import Link from 'next/link';
import { FC } from 'react';

interface Props {
  film: Film;
}

export const FilmComponent: FC<Props> = ({ film }) => {
  const { title, director, producer, release_date, opening_crawl, starships } =
    film;
  return (
    <section>
      <h2 className='text-center text-4xl my-10'>{title}</h2>
      <p className='text-center text-2xl my-1 py-3 border w-3/4 mx-auto'>
        Director: {director}
      </p>
      <p className='text-center text-2xl my-1 py-3 border w-3/4 mx-auto'>
        Producer: {producer}
      </p>
      <p className='text-center text-2xl my-1 py-3 border w-3/4 mx-auto'>
        Release date: {release_date}
      </p>
      <p className='text-center text-2xl my-1 py-3 border w-3/4 mx-auto px-5'>
        Opening crawl: {opening_crawl}
      </p>
      <div className='flex gap-5 justify-center text-2xl my-1 py-3 border w-3/4 mx-auto flex-wrap'>
        <span>Starships: </span>
        {starships.map((starship) => (
          <Link
            className='bg-purple-800 text-white px-2 hover:scale-110 transition-transform duration-300'
            key={starship}
            href={`/starships/${starship}`}
          >
            starship - {starship}
          </Link>
        ))}
      </div>
    </section>
  );
};
