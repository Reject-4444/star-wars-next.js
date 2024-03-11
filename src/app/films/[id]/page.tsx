'use client';
import { FilmComponent } from '@/app/components/FilmComponent';
import { useFetching } from '@/app/hooks/useFetching';
import { getFilm, getHero } from '@/services/getInfo';
import { Film, Hero } from '@/types/types';
import { useEffect, useState } from 'react';

export default function Hero({ params }: any) {
  const [film, setFilm] = useState<Film | null>(null);
  const { id } = params;

  const [fetchFilm, isLoadingFilm, isErrorFilm] = useFetching(async () => {
    const response = await getFilm(id);
    setFilm(response);
  });

  useEffect(() => {
    fetchFilm();
  }, []); // eslint-disable-line react-hooks/exhaustive-deps

  return film ? <FilmComponent film={film} /> : null;
}
