import React from 'react';
import s from './Users.module.css';

const Users = (props) => {

    const pagesCount = Math.ceil(props.totalUsersCount / props.pageSize);

    const pages = [];
    for (let i = 1; i <= pagesCount; i++) {
        pages.push(i);
    }

    return <div>
            <div>
                {pages.map(p => {
                    return <span className={props.currentPage === p && s.selectedPage}
                                 onClick={() => props.onPageChanged(p)}>{p} </span>
                })}
            </div>
            {
                props.users.map(u => <div key={u.id}>
                    <div className={s.container}>
                        <div className={s.avatar}>
                            <div>
                                <img
                                    src={'https://cdn4.iconfinder.com/data/icons/web-app-flat-circular-icons-set/64/Iconos_Redondos_Flat_Usuario_Icn-512.png'}
                                    alt='img'
                                    className={s.userAvatar}/>
                            </div>
                            <div>
                                <button onClick={() => props.follow(u.id)}>
                                    {u.followed === true ? 'unfollow' : 'follow'}
                                </button>
                            </div>
                        </div>
                        <div className={s.userInfo}>
                            <div>
                                <div>{u.name}</div>
                                <div>{u.status}</div>
                            </div>
                            <div>
                                <div>{'u.location.country'}</div>
                                <div>{'u.location.city'}</div>
                            </div>
                        </div>
                    </div>
                </div>)
            }
        </div>
}

export default Users;