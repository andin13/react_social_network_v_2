import React, {useEffect, useState} from "react";
import s from './ProfileInfo.module.css';

const ProfileStatusWithHooks = (props) => {

    const [editMode, setEditMode] = useState(false);
    const [status, setStatus] = useState(props.status);
    useEffect(() => {
        setStatus(props.status);
    }, [props.status]);

    const activateEditMode = () => {
        setEditMode(true);
    }
    const deactivateEditMode = () => {
        setEditMode(false);
        props.updateStatus(status);
    }
    const onStatusChange = (e) => {
        setStatus(e.currentTarget.value)
    }

    return <div className={s.status}>
        {!editMode && <div>
            <span onDoubleClick={activateEditMode}>{props.status || 'empty'}</span>
        </div>}
        {editMode && <div>
            <input autoFocus={true} onBlur={deactivateEditMode} onChange={onStatusChange} value={status}/>
        </div>}
    </div>
}

export default ProfileStatusWithHooks;