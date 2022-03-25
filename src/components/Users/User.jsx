import React from 'react';
import {NavLink} from 'react-router-dom';
import s from './Users.module.css';

const User = ({user, followingInProgress, toggleFollowingProgress, follow, unfollow}) => {
    const defaultUserImageUrl = 'https://cdn4.iconfinder.com/data/icons/web-app-flat-circular-icons-set/64/Iconos_Redondos_Flat_Usuario_Icn-512.png';

    return <div>
        <div className={s.container}>
            <div className={s.avatar}>
                <div>
                    <NavLink to={'/profile/' + user.id}>
                        <img
                            src={user.photos.small ? user.photos.small : defaultUserImageUrl}
                            alt='img'
                            className={s.userAvatar}/>
                    </NavLink>
                </div>
                <div>
                    <button disabled={followingInProgress.some(id => id === user.id)}
                            onClick={() => {
                                toggleFollowingProgress(true, user.id);
                                user.followed === true ? unfollow(user.id) : follow(user.id)
                            }}>
                        {user.followed === true ? 'unfollow' : 'follow'}
                    </button>
                </div>
            </div>
            <div className={s.userInfo}>
                <div>
                    <div>{user.name}</div>
                    <div>{user.status}</div>
                </div>
            </div>
        </div>
    </div>
}

export default User;