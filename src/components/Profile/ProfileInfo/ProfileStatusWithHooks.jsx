import React, {useEffect, useState} from "react";
import s from './ProfileInfo.module.css';

const ProfileStatusWithHooks = ({status, isOwner, updateStatus}) => {

    const [editMode, setEditMode] = useState(false);
    const [localStatus, setStatus] = useState(status);
    useEffect(() => {
        setStatus(status);
    }, [status]);

    const activateEditMode = () => {
        isOwner && setEditMode(true);
    }
    const deactivateEditMode = () => {
        setEditMode(false);
        updateStatus(localStatus);
    }
    const onStatusChange = (e) => {
        setStatus(e.currentTarget.value)
    }

    return <div className={s.status}>
        {!editMode && <div>
            <span onDoubleClick={activateEditMode}>{status || 'empty'}</span>
        </div>}
        {editMode && <div>
            <input autoFocus={true} onBlur={deactivateEditMode} onChange={onStatusChange} value={localStatus}/>
        </div>}
    </div>
}

export default ProfileStatusWithHooks;