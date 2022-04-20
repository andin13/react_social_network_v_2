import s from './Header.module.css';
import {NavLink} from "react-router-dom";
import { useDispatch, useSelector } from 'react-redux';
import { logout } from '../../Redux/auth-reducer';

function Header() {

    const isAuth = useSelector(state => state.auth.isAuth);
    const login = useSelector(state => state.auth.login);
    const dispatch = useDispatch();
    const logoutFn = () => dispatch(logout());
    const logoUrl = 'https://cdn.dribbble.com/users/10882/screenshots/15172621/media/cd2246d5d0f54f9a4316bd4d276764b2.png?compress=1&resize=400x300';

    return <header className={s.header}>
            <NavLink className={s.logo} to='/'>
                <img src={logoUrl} alt=''/>
            </NavLink>
        <div className={s.loginBlock}>
            { isAuth
                ? <div>
                    {login}
                    <button onClick={logoutFn}>Logout</button>
                </div>
                : <NavLink to={'/login'}>Login</NavLink>}
        </div>
        </header>
}

export default Header;