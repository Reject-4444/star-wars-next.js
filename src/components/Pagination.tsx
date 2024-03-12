'use client';
import { FC } from 'react';
import cn from 'classnames';
import { usePathname, useRouter } from 'next/navigation';

interface Props {
  pageCount: number;
  currentPage: number;
}

export const Pagination: FC<Props> = ({ pageCount, currentPage }) => {
  const pages = [];
  for (let i = 1; i <= pageCount; i++) {
    pages.push(i);
  }
  const router = useRouter();
  const pathname = usePathname();

  const handlePagePrevClick = () => {
    if (currentPage > 1) {
      router.push(`${pathname}?page=${currentPage - 1}`);
    }
  };

  const handlePageNextClick = () => {
    if (currentPage < pageCount) {
      router.push(`${pathname}?page=${currentPage + 1}`);
    }
  };

  const handlePageClick = (page: number) => {
    router.push(`${pathname}?page=${page}`);
  };

  return (
    <div className='w-3/4 mx-auto my-10 flex justify-center gap-5'>
      <button
        disabled={currentPage === 1}
        onClick={handlePagePrevClick}
        className='w-10 h-10 border hover:scale-110 transition-transform duration-300'
      >
        prev
      </button>
      {pages.map((page) => (
        <button
          onClick={() => handlePageClick(page)}
          key={page}
          className={cn(
            'w-10 h-10 border hover:scale-110 transition-transform duration-300',
            {
              'bg-purple-800 text-white': currentPage === page,
            }
          )}
        >
          {page}
        </button>
      ))}
      <button
        disabled={currentPage === pageCount}
        onClick={handlePageNextClick}
        className='w-10 h-10 border hover:scale-110 transition-transform duration-300'
      >
        next
      </button>
    </div>
  );
};
