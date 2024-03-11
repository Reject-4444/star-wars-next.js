'use client';
import { getHeroes } from '@/services/getInfo';
import { Hero } from '@/types/types';
import { useEffect, useState } from 'react';
import { useFetching } from '../hooks/useFetching';
import { HeroLink } from '../components/HeroLink';
import { Pagination } from '../components/Pagination';

export default function Heroes() {
  const [heroes, setHeroes] = useState([]);
  const [pageCount, setPageCount] = useState(0);
  const [currentPage, setCurrentPage] = useState(1);

  const [fetchHeroes, isLoadingHeroes, isErrorHeroes] = useFetching(
    async () => {
      const response = await getHeroes(currentPage.toString());
      setHeroes(response.results);
      const count = response.count;
      const amountOfPages = Math.ceil(count / 10);
      setPageCount(amountOfPages);
    }
  );

  useEffect(() => {
    fetchHeroes();
  }, [currentPage]); // eslint-disable-line react-hooks/exhaustive-deps

  const handlePageClick = (page: number) => {
    setCurrentPage(page);
  };

  const handlePagePrevClick = () => {
    if (currentPage > 1) {
      setCurrentPage((prev) => prev - 1);
    }
  };

  const handlePageNextClick = () => {
    if (currentPage < pageCount) {
      setCurrentPage((prev) => prev + 1);
    }
  };

  return (
    <>
      <h1 className='text-center text-4xl my-10'>Heroes</h1>
      {!isErrorHeroes && (
        <div className='h-456'>
          {heroes.map((hero: Hero) => (
            <HeroLink
              key={hero.url}
              hero={hero}
            />
          ))}
        </div>
      )}
      <Pagination
        handlePagePrevClick={handlePagePrevClick}
        handlePageNextClick={handlePageNextClick}
        handlePageClick={handlePageClick}
        currentPage={currentPage}
        pageCount={pageCount}
      />
    </>
  );
}
