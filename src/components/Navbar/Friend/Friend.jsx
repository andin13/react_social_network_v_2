import {NavLink} from "react-router-dom";
import s from './Friend.module.css';

const Friend = ({name}) => {

    const defaultAvatarIconUrl = "https://cdn4.iconfinder.com/data/icons/web-app-flat-circular-icons-set/64/Iconos_Redondos_Flat_Usuario_Icn-512.png";

    return (
        <div className={s.item}>
            <img src={defaultAvatarIconUrl} alt=''/>
            <NavLink to={'/dialogs'} >{name}</NavLink>
        </div>
    )
}

export default Friend;