import classes from './Navbar.module.css';
import {NavLink} from "react-router-dom";
import Friend from "./Friend/Friend";

const Navbar = (props) => {

    let NavbarItems = props.NavbarItems
        .map(ni => <NavLink to={ni.url}
                            key={ni.name}
                            className={navData => navData.isActive ? classes.active : classes.item}>{ni.name}</NavLink>)
    //let FriendsList = props.FriendsList.map(fl => <Friend name={fl.name}/>)

    return <nav className={classes.nav}>
        {NavbarItems}
        <div className={classes.FL}>
            { /*FriendsList */}
        </div>
    </nav>
}

export default Navbar;