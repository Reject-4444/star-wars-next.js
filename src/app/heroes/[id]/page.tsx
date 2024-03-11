import { HeroComponent } from '@/components/HeroComponent';
import { getHero } from '@/services/getInfo';
import { Hero } from '@/types/types';
import { notFound } from 'next/navigation';

export default async function Hero({ params }: any) {
  const { id } = params;
  const hero = await getHero(id);

  if (!hero) {
    notFound();
  }


  return hero ? <HeroComponent hero={hero} /> : null;
}
