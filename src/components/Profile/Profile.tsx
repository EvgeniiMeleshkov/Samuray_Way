import React from 'react';
import styles from './Profile.module.css'
import {ProfileInfo} from './ProfileInfo/ProfileInfo';
import {MyPosts} from './MyPosts/MyPosts';
import {PostsType} from '../../redux/state';

type ProfilePropsType ={
    posts: PostsType
}

function Profile({posts}: ProfilePropsType) {
    return (
        <div className={styles.content}>
            <ProfileInfo/>
            <MyPosts posts={posts}/>
        </div>
    )
}
export default Profile