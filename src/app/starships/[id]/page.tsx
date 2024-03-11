import { StarshipComponent } from '@/components/StarshipComponent';
import { getStarship } from '@/services/getInfo';
import { Starship } from '@/types/types';
import { notFound } from 'next/navigation';

export default async function Starship({ params }: any) {
  const { id } = params;
  const starship = await getStarship(id);

  if (!starship) {
    notFound();
  }

  return starship ? <StarshipComponent starship={starship} /> : null;
}
