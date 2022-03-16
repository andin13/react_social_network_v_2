import Navbar from "./Navbar";
import connect from "react-redux/lib/connect/connect";

let mapStateToProps = (state) => {
    return {
        NavbarItems: state.sidebar.NavbarItems,
        FriendsList: state.sidebar.FriendsList
    }
}

const NavbarContainer = connect(mapStateToProps)(Navbar);

export default NavbarContainer;