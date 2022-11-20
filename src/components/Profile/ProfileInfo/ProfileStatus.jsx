import React, {useEffect, useState} from "react";


const ProfileStatus = ({status, updateStatus}) => {

    const [editMode, setEditMod] = useState(false);
    const [localStatus, setStatusLocal] = useState(status);

    useEffect(() => {
        setStatusLocal(status)

    }, [status])

    const activateEditMode = () => {
        setEditMod(true);
    }
    const deActivateEditMode = () => {
        setEditMod(false);
        updateStatus(localStatus)
    }
    const onEditOrChangeStatus = (e) => {
        setStatusLocal(e.target.value)
    }
    const onEnter = (e) => {
        if (e.key === 'Enter') {
            deActivateEditMode()
        }
    }
    return (
        <div>
            {!editMode && <div>
                <span onDoubleClick={activateEditMode}>{!localStatus ?'Status':status}</span>
            </div>}
            {editMode &&
                <div>
                    <input onChange={onEditOrChangeStatus} autoFocus={true} onClick={onEditOrChangeStatus}
                           onBlur={deActivateEditMode} value={localStatus} onKeyDown={onEnter}/>
                </div>}
        </div>
    )
}


export default ProfileStatus;