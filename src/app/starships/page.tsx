'use client';
import { getStarships } from '@/services/getInfo';
import { Starship } from '@/types/types';
import { useEffect, useState } from 'react';
import { useFetching } from '../../hooks/useFetching';
import { Pagination } from '../../components/Pagination';
import { StarshipLink } from '../../components/StarshipLink';

export default function Starships() {
  const [starships, setStarships] = useState([]);
  const [pageCount, setPageCount] = useState(0);
  const [currentPage, setCurrentPage] = useState(1);

  const [fetchStarships, isLoadingStarships, isErrorStarships] = useFetching(
    async () => {
      const response = await getStarships(currentPage.toString());
      setStarships(response.results);
      const count = response.count;
      const amountOfPages = Math.ceil(count / 10);
      setPageCount(amountOfPages);
    }
  );

  useEffect(() => {
    fetchStarships();
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
      {!isErrorStarships && (
        <div className='h-456'>
          {starships.map((starship: Starship) => (
            <StarshipLink
              key={starship.url}
              starship={starship}
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
