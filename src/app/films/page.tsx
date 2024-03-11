'use client';
import { getFilms, getHeroes } from '@/services/getInfo';
import { Film, Hero } from '@/types/types';
import { useEffect, useState } from 'react';
import { useFetching } from '../hooks/useFetching';
import { FilmLink } from '../components/FilmLink';

export default function Films() {
  const [films, setFilms] = useState<Film[]>([]);

  const [fetchFilms, isLoadingFilms, isErrorFilms] = useFetching(async () => {
    const response = await getFilms();
    setFilms(response);
  });

  useEffect(() => {
    fetchFilms();
  }, []) // eslint-disable-line react-hooks/exhaustive-deps

  return (
    <>
      <div>
        <h1 className='text-center text-4xl my-10'>Films</h1>
        <div>
          {films.map((film: Film) => (
            <FilmLink
              key={film.episode_id}
              film={film}
            />
          ))}
        </div>
      </div>
    </>
  );
}
