import { getHeroes } from '@/services/getInfo';
import { Hero } from '@/types/types';
import { Fragment, Suspense } from 'react';
import { HeroLink } from '@/components/HeroLink';
import { Pagination } from '@/components/Pagination';
import { notFound } from 'next/navigation';
import { Loader } from '@/components/Loader';

const INITIAL_PAGE = 1;

export default async function Heroes({ searchParams }: any) {
  const currentPage = Number(searchParams.page) || INITIAL_PAGE;

  const data = await getHeroes(currentPage.toString());

  if (!data) {
    notFound();
  }

  const { count, results: heroes } = data;
  const pageCount = Math.ceil(count / 10);

  return (
    <Fragment>
      <h1 className='text-center text-4xl my-10'>Heroes</h1>
      {
        <div className='h-456'>
          {heroes.map((hero: Hero) => (
            <HeroLink
              key={hero.url}
              hero={hero}
            />
          ))}
        </div>
      }
      <Pagination
        currentPage={currentPage}
        pageCount={pageCount}
      />
    </Fragment>
  );
}
