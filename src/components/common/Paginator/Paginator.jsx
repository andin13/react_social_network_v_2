import React, {useState} from 'react';
import s from './Paginator.module.css';
import {NavLink} from "react-router-dom";

const Paginator = ({totalItemsCount, currentPage, onPageChanged, pageSize, portionSize = 10, baseUrl}) => {

    const pagesCount = Math.ceil(totalItemsCount / pageSize);
    currentPage = currentPage !== undefined ? currentPage : 1;
    const startPortionNumber = Math.ceil(currentPage / 10);
    const pages = [];
    for (let i = 1; i <= pagesCount; i++) {
        pages.push(i);
    }

    let portionCount = Math.ceil(pagesCount / portionSize);
    let [portionNumber, setPortionNumber] = useState(startPortionNumber);
    let leftPortionPageNumber = (portionNumber - 1) * portionSize + 1;
    let rightPortionPageNumber = portionNumber * portionSize;

    return <div className={s.paginator}>
        {portionNumber > 1 &&
            <button onClick={() => {setPortionNumber(portionNumber - 1)}}>Prev</button>}
        {pages
            .filter(p => p >= leftPortionPageNumber && p <= rightPortionPageNumber)
            .map(p => {
                return <NavLink to={baseUrl+p}
                                className={page => page.isActive ? s.selectedPage : s.pageNumber}
                             key={p}
                             onClick={() => onPageChanged(p)}>{p}</NavLink>
            })}
        {portionCount > portionNumber &&
            <button onClick={() => {setPortionNumber(portionNumber + 1)}}>Next</button>}

    </div>
}

export default Paginator;