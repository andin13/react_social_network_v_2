import React, { useState } from 'react';
import { NavLink } from 'react-router-dom';

import s from './Paginator.module.css';

interface PaginatorProps {
  totalItemsCount: number;
  currentPage: number | undefined;
  onPageChanged: (pageNumber: number) => void;
  pageSize: number;
  baseUrl: string;
  portionSize: number,
}

function Paginator({
  totalItemsCount, currentPage, onPageChanged,
  pageSize, baseUrl, portionSize,
}: PaginatorProps): JSX.Element {
  const pagesCount = Math.ceil(totalItemsCount / pageSize);
  const startPortionNumber = Math.ceil(currentPage !== undefined ? currentPage * (1 / 10) : 1);
  const portionCount = Math.ceil(pagesCount / portionSize);
  const [portionNumber, setPortionNumber] = useState<number>(startPortionNumber);
  const leftPortionPageNumber = (portionNumber - 1) * portionSize + 1;
  const rightPortionPageNumber = portionNumber * portionSize;
  const pages: Array<number> = [];
  for (let i = 1; i <= pagesCount; i += 1) {
    pages.push(i);
  }

  const handlePrev = () => setPortionNumber(portionNumber - 1);
  const handleNext = () => setPortionNumber(portionNumber + 1);

  const prevButton = () => {
    if (portionNumber > 1) {
      return (
        <button
          onClick={handlePrev}
          type="button"
        >
          Prev
        </button>
      );
    }
    return null;
  };

  const nextButton = () => {
    if (portionCount > portionNumber) {
      return (
        <button
          onClick={handleNext}
          type="button"
        >
          Next
        </button>
      );
    }
    return null;
  };

  const pagePickers = () => pages
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
    ));

  return (
    <div className={s.paginator}>
      {prevButton()}
      {pagePickers()}
      {nextButton()}
    </div>
  );
}

export default Paginator;
