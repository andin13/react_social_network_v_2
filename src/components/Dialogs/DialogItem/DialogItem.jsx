import s from './DialogItem.module.css';
import {NavLink} from "react-router-dom";

const DialogItem = (props) => {
    let path = "/dialogs/";

    return (
        <div className={s.item}>
            <img src="https://cdn4.iconfinder.com/data/icons/web-app-flat-circular-icons-set/64/Iconos_Redondos_Flat_Usuario_Icn-512.png" />
            <NavLink to={path} >{props.name}</NavLink>
        </div>
    )
}

export default DialogItem;