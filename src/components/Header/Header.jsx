import classes from './Header.module.css';
import {NavLink} from "react-router-dom";

const Header = (props) => {
    return <header className={classes.header}>
            <NavLink className={classes.logo} to='/'>
                <img src='https://cdn.dribbble.com/users/10882/screenshots/15172621/media/cd2246d5d0f54f9a4316bd4d276764b2.png?compress=1&resize=400x300'/>
            </NavLink>
        </header>
}

export default Header;