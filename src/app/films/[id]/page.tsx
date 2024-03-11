import { FilmComponent } from '@/components/FilmComponent';
import { getFilm } from '@/services/getInfo';
import { notFound } from 'next/navigation';

export default async function Hero({ params }: any) {
  const { id } = params;

  const film = await getFilm(id);

  if (!film) {
    notFound();
  }

  return film ? <FilmComponent film={film} /> : null;
}
