import s from './Profile.module.css';
import ProfileInfo from "./ProfileInfo/ProfileInfo";
import { useDispatch, useSelector } from 'react-redux';
import { useParams, Navigate } from 'react-router-dom';
import { getProfile, getStatus, updateStatus, savePhoto } from '../../Redux/profile-reducer';
import MyPosts from "./MyPosts/MyPosts";
import { useEffect } from 'react';

const Profile = () => {

    const profile = useSelector(state => state.profilePage.profile);
    let userId = useSelector(state => state.auth.userId);
    const isAuth = useSelector(state => state.auth.isAuth);
    const status = useSelector(state => state.profilePage.status);
    const {userIdUrl} = useParams();
    userId = userIdUrl ? userIdUrl : userId;

    const dispatch = useDispatch();
    const getProfileFn = (userId) => dispatch(getProfile(userId));
    const getStatusFn = (userId) => dispatch(getStatus(userId));
    const updateStatusFn = (status) => dispatch(updateStatus(status));
    const savePhotoFn = (file) => dispatch(savePhoto(file));

    const setProfile = () => {
        if (userId) {
            getProfileFn(userId);
            getStatusFn(userId);
        }  
    }

    useEffect(() => setProfile(), [userId]);


    if (!isAuth && !userIdUrl) return <Navigate to={'/login'}/>;
    if (profile) {
        return <div className={s.profileDiv}>
        <ProfileInfo profile={profile}
                     isOwner={!userIdUrl}
                     savePhoto={savePhotoFn}
                     status={status}
                     updateStatus={updateStatusFn}/>
        <MyPosts/>
    </div>
    } else return <div/>
}

export default Profile;