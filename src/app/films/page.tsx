import { getFilms } from '@/services/getInfo';
import { Film } from '@/types/types';
import { FilmLink } from '../../components/FilmLink';
import { notFound } from 'next/navigation';

export default async function Films() {
  const films = await getFilms();

  if (!films) {
    notFound();
  }

  return (
    <div>
      <h1 className='text-center text-4xl my-10'>Films</h1>
      {films.map((film: Film) => (
        <FilmLink
          key={film.episode_id}
          film={film}
        />
      ))}
    </div>
  );
}
