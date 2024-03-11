'use client';
import { HeroComponent } from '@/app/components/HeroComponent';
import { useFetching } from '@/app/hooks/useFetching';
import { getHero } from '@/services/getInfo';
import { Hero } from '@/types/types';
import { useEffect, useState } from 'react';

export default function Hero({ params }: any) {
  const [hero, setHero] = useState<Hero | null>(null);
  const { id } = params;

  const [fetchHero, isLoadingHero, isErrorHero] = useFetching(async () => {
    const response = await getHero(id);
    setHero(response);
  });

  useEffect(() => {
    fetchHero();
  });

  return hero ? <HeroComponent hero={hero} /> : null;
}
