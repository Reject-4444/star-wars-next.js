'use client';
import { StarshipComponent } from '@/app/components/StarshipComponent';
import { useFetching } from '@/app/hooks/useFetching';
import { getStarship } from '@/services/getInfo';
import { Hero, Starship } from '@/types/types';
import { useEffect, useState } from 'react';

export default function Starship({ params }: any) {
  const [starship, setHero] = useState<Starship | null>(null);
  const { id } = params;

  const [fetchStarship, isLoadingStarship, isErrorStarship] = useFetching(async () => {
    const response = await getStarship(id);
    setHero(response);
  });

  useEffect(() => {
    fetchStarship();
  }, []); // eslint-disable-line react-hooks/exhaustive-deps

  return starship ? <StarshipComponent starship={starship} /> : null;
}
