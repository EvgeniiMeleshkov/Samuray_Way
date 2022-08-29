import React from 'react';
import styles from './Profile.module.css'
import {MyPostsContainer} from './MyPosts/MyPostsContainer';
import {UserProfileType} from '../../redux/profileReducer';
import ProfileInfo from './ProfileInfo/ProfileInfo';

type ProfilePropsType = {
    data: UserProfileType
    isFetching: boolean
    status: string
    updateStatus: (status: string) => void
}

function Profile(props: ProfilePropsType) {

    return (
        <div className={styles.content}>
            <ProfileInfo updateStatus={props.updateStatus} status={props.status} isFetching={props.isFetching} data={props.data}/>
            <MyPostsContainer/>
        </div>
    )
}
export default Profile
