import classes from './Navbar.module.css';
import {NavLink} from "react-router-dom";
import { useSelector } from 'react-redux';
//import Friend from "./Friend/Friend";

const Navbar = () => {

    const navbarItems = useSelector(state => state.sidebar.NavbarItems);
    //const friendsList = useSelector(state => state.sidebar.FriendsList);

    const NavbarItemsComponents = navbarItems
        .map(ni => <NavLink to={ni.url}
                            key={ni.name}
                            className={
                                navData => navData.isActive ? classes.active : classes.item
                                }>{ni.name}</NavLink>)
    //const FriendsList = friendsList.map(fl => <Friend name={fl.name} key={fl.name}/>)

    return <nav className={classes.nav}>
        {NavbarItemsComponents}
        <div className={classes.FL}>
            {/* { FriendsList } */}
        </div>
    </nav>
}

export default Navbar;