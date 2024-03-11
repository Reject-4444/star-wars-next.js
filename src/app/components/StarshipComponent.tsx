import { Hero, Starship } from '@/types/types';
import { FC } from 'react';

interface Props {
  starship: Starship;
}

export const StarshipComponent: FC<Props> = ({ starship }) => {
  const { name, model, manufacturer, length, passengers } = starship;
  return (
    <section>
      <h2 className='text-center text-4xl my-10'>{name}</h2>
      <p className='text-center text-2xl my-1 py-3 border w-3/4 mx-auto'>
        Model: {model}
      </p>
      <p className='text-center text-2xl my-1 py-3 border w-3/4 mx-auto'>
        Manufacturer: {manufacturer}
      </p>
      <p className='text-center text-2xl my-1 py-3 border w-3/4 mx-auto'>
        Length: {length}
      </p>
      <p className='text-center text-2xl my-1 py-3 border w-3/4 mx-auto'>
        Passengers: {passengers}
      </p>
    </section>
  );
};
