import React from "react";
import classes from './ProfileInfo.module.css'
import Preloader from "../../common/Preloader/Preloader";
import {imagePathGenerator} from "../../../utils/general";
import ProfileStatus from "./ProfileStatus";


const ProfileInfo = ({ currentUserProfile: profile,...props}) => {
    if (!profile.userID) {
        return <Preloader/>
    }

    return (
        <div className={classes.profileInfo}>
            <div>
                <ProfileStatus status={props.status} updateStatus={props.updateStatus} />
            </div>
            <img className={classes.profileAva} key={profile.id} src={imagePathGenerator(profile.photos.large)}/>
            <div>
                {profile.fullName}
            </div>
            <div>Work Place:
                <span className={classes.workStatus}>
            {profile.lookingForAJob ? profile.lookingForAJobDescription : profile.palaceOfWork}
                </span>

            </div>
            <div className={classes.description}>About me: <span className={classes.workStatus}>{profile.aboutMe}</span></div>
        </div>
    )
}


export default ProfileInfo;