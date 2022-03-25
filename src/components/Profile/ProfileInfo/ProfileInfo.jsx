import s from './ProfileInfo.module.css';
import Preloader from "../../common/Preloader/Preloader";
import ProfileStatusWithHooks from "./ProfileStatusWithHooks";

const ProfileInfo = ({profile, status, updateStatus}) => {
    if (!profile) {
        return <Preloader/>
    }

    const defaultUserImageUrl = 'https://helpx.adobe.com/content/dam/help/en/photoshop/' +
        'using/convert-color-image-black-white/jcr_content/main-pars/before_and_after/image-before/Landscape-Color.jpg';
    const defaultUserAvatarUrl = 'https://cdn4.iconfinder.com/data/icons/web-app-flat-circular-icons-set/64/Iconos_Redondos_Flat_Usuario_Icn-512.png';
    const userAvatar = profile.photos.large ? profile.photos.large : defaultUserAvatarUrl;
    return <div>
        <div>
            <img
                src={defaultUserImageUrl}
                style={{width: '100%'}}/>
        </div>
        <div className={s.descriptionBlock}>
            <img
                src={userAvatar}
                className={s.userImage}/>
            <ProfileStatusWithHooks status={status} updateStatus={updateStatus}/>
        </div>
    </div>
}

export default ProfileInfo;