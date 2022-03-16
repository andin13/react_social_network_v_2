import React from 'react';
import {NavLink} from 'react-router-dom';
import s from './Users.module.css';

const Users = (props) => {

    const pagesCount = Math.ceil(props.totalUsersCount / props.pageSize);

    const pages = [];
    for (let i = 1; i <= pagesCount; i++) {
        pages.push(i);
    }

    const defaultUserImageUrl = 'https://cdn4.iconfinder.com/data/icons/web-app-flat-circular-icons-set/64/Iconos_Redondos_Flat_Usuario_Icn-512.png';

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
                            <NavLink to={'/profile/' + u.id}>
                                <img
                                    src={u.photos.small ? u.photos.small : defaultUserImageUrl}
                                    alt='img'
                                    className={s.userAvatar}/>
                            </NavLink>
                        </div>
                        <div>
                            <button disabled={props.followingInProgress.some(id => id === u.id)} onClick={() => {
                                props.toggleFollowingProgress(true, u.id);
                                u.followed === true ? props.unfollow(u.id) : props.follow(u.id) }}>
                                {u.followed === true ? 'unfollow' : 'follow'}
                            </button>
                        </div>
                    </div>
                    <div className={s.userInfo}>
                        <div>
                            <div>{u.name}</div>
                            <div>{u.status}</div>
                        </div>
                    </div>
                </div>
            </div>)
        }
    </div>
}

export default Users;