import s from './ProfileInfo.module.css';
import Preloader from "../../common/Preloader/Preloader";
import ProfileStatus from "./ProfileStatus";

const ProfileInfo = (props) => {
    if (!props.profile) {
        return <Preloader/>
    }

    //const defaultUserImageUrl = 'https://helpx.adobe.com/content/dam/help/en/photoshop/using/convert-color-image-black-white/jcr_content/main-pars/before_and_after/image-before/Landscape-Color.jpg'
    const userAvatar = props.profile.photos.large ? props.profile.photos.large : 'https://cdn4.iconfinder.com/data/icons/web-app-flat-circular-icons-set/64/Iconos_Redondos_Flat_Usuario_Icn-512.png'
    return <div>
        {/*<div>
            <img
                src={defaultUserImageUrl}
                style={{width: '100%'}}/>response.data
        </div>*/}
        <div className={s.descriptionBlock}>
            <img
                src={userAvatar}
                style={{width: '150px'}}/>
            <ProfileStatus status={props.status} updateStatus={props.updateStatus}/>
        </div>
    </div>
}

export default ProfileInfo;