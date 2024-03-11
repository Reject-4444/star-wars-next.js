import { Hero } from '@/types/types';
import Link from 'next/link';
import { FC } from 'react';

interface Props {
  hero: Hero;
}

export const HeroComponent: FC<Props> = ({ hero }) => {
  const { name, gender, hair_color, eye_color, height, films } = hero;
  return (
    <section>
      <h2 className='text-center text-4xl my-10'>{name}</h2>
      <p className='text-center text-2xl my-1 py-3 border w-3/4 mx-auto'>
        Gender: {gender}
      </p>
      <p className='text-center text-2xl my-1 py-3 border w-3/4 mx-auto'>
        Hair color: {hair_color}
      </p>
      <p className='text-center text-2xl my-1 py-3 border w-3/4 mx-auto'>
        Eye color: {eye_color}
      </p>
      <p className='text-center text-2xl my-1 py-3 border w-3/4 mx-auto'>
        Height: {height}
      </p>
      <div className='flex gap-5 justify-center text-2xl my-1 py-3 border w-3/4 mx-auto flex-wrap'>
        <span>Films: </span>
        {films.map((film) => (
          <Link
            className='bg-purple-800 text-white px-2 hover:scale-110 transition-transform duration-300'
            key={film}
            href={`/films/${film}`}
          >
            film - {film}
          </Link>
        ))}
      </div>
    </section>
  );
};
