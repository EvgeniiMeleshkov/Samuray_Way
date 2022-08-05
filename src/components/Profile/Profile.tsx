import React from 'react';
import styles from './Profile.module.css'
import {ProfileInfo} from './ProfileInfo/ProfileInfo';
import {MyPostsContainer} from './MyPosts/MyPostsContainer';
import {UserProfileType} from '../../redux/profileReducer';

type ProfilePropsType = {
    data: UserProfileType
    isFetching: boolean
}

function Profile(props: ProfilePropsType) {
    return (
        <div className={styles.content}>
            <ProfileInfo isFetching={props.isFetching} data={props.data}/>
            <MyPostsContainer/>
        </div>
    )
}
export default Profile