import './App.css';
import {Routes, Route} from "react-router-dom";
import News from "./components/News/News";
import Music from "./components/Music/Music";
import Settings from "./components/Settings/Settings";
import React, {Component, Suspense} from "react";
import connect from "react-redux/lib/connect/connect";
import {initializeApp} from "./Redux/app-reducer";
import Preloader from "./components/common/Preloader/Preloader";
import NavbarContainer from "./components/Navbar/NavbarContainer";
import HeaderContainer from "./components/Header/HeaderContainer";
const DialogsContainer = React.lazy(() => import('./components/Dialogs/DialogsContainer'));
const UsersContainer = React.lazy(() => import('./components/Users/UsersContainer'));
const ProfileContainer = React.lazy(() => import('./components/Profile/ProfileContainer'));
const LoginContainer = React.lazy(() => import('./components/Login/LoginContainer'));

class App extends Component {
    componentDidMount() {
        this.props.initializeApp();
    }
    render() {
        if (!this.props.initialized) {
            return <Preloader/>
        }
        return (
            <div className='app-wrapper'>
                <HeaderContainer/>
                <div className='main-content'>
                    <NavbarContainer/>
                    <div className='app-wrapper-content'>
                        <Suspense fallback={<Preloader/>}>
                        <Routes>
                            <Route path="/dialogs/*" element={<DialogsContainer/>}/>
                            <Route path="/profile" element={<ProfileContainer/>}>
                                <Route path=":userId" element={<ProfileContainer/>}/>
                            </Route>
                            <Route path="/users" element={<UsersContainer/>}>
                                <Route path=":currentPage" element={<UsersContainer/>}/>
                            </Route>
                            <Route path="/news/*" element={<News/>}/>
                            <Route path="/music/*" element={<Music/>}/>
                            <Route path="/settings/*" element={<Settings/>}/>
                            <Route path="/login/*" element={<LoginContainer/>}/>
                        </Routes>
                        </Suspense>
                    </div>
                </div>

            </div>
        );
    }
}

const mapStateToProps = (state) => ({
    initialized: state.app.initialized
})

export default connect(mapStateToProps, {initializeApp}) (App);