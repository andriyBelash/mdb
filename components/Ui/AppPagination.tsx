
'use client'

import '@/styles/components/pagination.scss';
import React from 'react';
import Link from 'next/link';
import { usePathname, useSearchParams } from 'next/navigation';
type PropsType = {
  pages: number;
  currentPage: number
};


// Import statements...

const AppPagination = ({ pages, currentPage }: PropsType) => {
  const MAX_VISIBLE_PAGES = 5;
  const pathName = usePathname();

  const params = useSearchParams()
  const q = Object.fromEntries(params.entries())

  const getVisiblePages = (): Array<number | string> => {
    if (pages <= MAX_VISIBLE_PAGES) {
      return Array.from({ length: pages }, (_, index) => index + 1);
    }

    const visiblePages: Array<number | string> = [1, 2]; // Always show the first two pages

    if (currentPage > 4) {
      visiblePages.push('...'); // Add ellipsis if current page is greater than 4
    }

    // Calculate the range of visible pages around the current page
    const startPage = Math.max(3, currentPage - 2);
    const endPage = Math.min(pages - 2, currentPage + 2);

    for (let i = startPage; i <= endPage; i++) {
      visiblePages.push(i);
    }

    if (currentPage < pages - 3) {
      visiblePages.push('...'); // Add ellipsis if current page is less than pages - 3
    }

    // Always show the last two pages
    visiblePages.push( pages);

    return visiblePages;
  };

  const visiblePages = getVisiblePages();

  return (
    <div className="pagination">
      <Link href={{ pathname: pathName, query: { ...q,page: currentPage === 1 ? 1 : currentPage - 1 } }} className="btn">
        {/* First Page */}
        <svg
          xmlns="http://www.w3.org/2000/svg"
          className="btn-icon"
          fill="none"
          viewBox="0 0 24 24"
          stroke="currentColor"
          strokeWidth="2"
        >
          <path strokeLinecap="round" strokeLinejoin="round" d="M15 19l-7-7 7-7" />

        </svg>
      </Link>

      {visiblePages.map((page, index) => {
        const isEllipsis = page === '...';

        return (
          <React.Fragment key={index}>
            {!isEllipsis && (
              <Link  href={{ pathname: pathName, query: { ...q,page: page } }} className={`page-link ${currentPage === page ? 'page-link--current' : ''}`}>
                {page}
              </Link>
            )}
            {isEllipsis && ' ... '}
          </React.Fragment>
        );
      })}

      <Link  href={{ pathname: pathName, query: { ...q,page: currentPage === pages ? pages : currentPage + 1 } }}className="btn">
        {/* Last Page */}
        <svg
          xmlns="http://www.w3.org/2000/svg"
          className="btn-icon"
          fill="none"
          viewBox="0 0 24 24"
          stroke="currentColor"
          strokeWidth="2"
        >
          <path strokeLinecap="round" strokeLinejoin="round" d="M9 5l7 7-7 7" />
        </svg>
      </Link>
    </div>
  );
};

export default AppPagination;



