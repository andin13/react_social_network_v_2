import React, { useState } from 'react';
import { NavLink } from 'react-router-dom';

import { PaginatorProps } from './types';

import s from './Paginator.module.css';

function Paginator({
  totalItemsCount, currentPage, onPageChanged,
  pageSize, baseUrl, portionSize,
}: PaginatorProps): JSX.Element {
  const pagesCount = Math.ceil(totalItemsCount / pageSize);
  const startPortionNumber = Math.ceil(currentPage !== undefined ? currentPage : 1 / 10);
  const pages: Array<number> = [];
  for (let i = 1; i <= pagesCount; i += 1) {
    pages.push(i);
  }

  const portionCount = Math.ceil(pagesCount / portionSize);
  const [portionNumber, setPortionNumber] = useState<number>(startPortionNumber);
  const leftPortionPageNumber = (portionNumber - 1) * portionSize + 1;
  const rightPortionPageNumber = portionNumber * portionSize;

  return (
    <div className={s.paginator}>

      {portionNumber > 1
            && (
            <button
              onClick={() => { setPortionNumber(portionNumber - 1); }}
              type="button"
            >
              Prev
            </button>
            )}

      {pages
        .filter((p) => p >= leftPortionPageNumber && p <= rightPortionPageNumber)
        .map((p) => (
          <NavLink
            to={baseUrl + p}
            className={(page) => (page.isActive ? s.selectedPage : s.pageNumber)}
            key={p}
            onClick={() => onPageChanged(p)}
          >
            {p}
          </NavLink>
        ))}

      {portionCount > portionNumber
            && (
            <button
              onClick={() => { setPortionNumber(portionNumber + 1); }}
              type="button"
            >
              Next
            </button>
            )}

    </div>
  );
}

export default Paginator;
