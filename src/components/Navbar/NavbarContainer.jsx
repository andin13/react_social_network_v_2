import Navbar from "./Navbar";
import connect from "react-redux/lib/connect/connect";

let mapStateToProps = (state) => {
    return {
        NavbarItems: state.sidebar.NavbarItems,
        FriendsList: state.sidebar.FriendsList
    }
}

let mapDispatchToProps = (dispatch) => {
    return {}
}

const NavbarContainer = connect(mapStateToProps, mapDispatchToProps)(Navbar);

export default NavbarContainer;