import React from 'react';
import s from './Paginator.module.css';

const Paginator = (props) => {

    const pagesCount = Math.ceil(props.totalUsersCount / props.pageSize);

    const pages = [];
    for (let i = 1; i <= pagesCount; i++) {
        pages.push(i);
    }

    return <div>
        {pages.map(p => {
            return <span className={props.currentPage === p ? s.selectedPage : undefined}
                         key={p}
                         onClick={() => props.onPageChanged(p)}>{p} </span>
        })}
    </div>
}

export default Paginator;