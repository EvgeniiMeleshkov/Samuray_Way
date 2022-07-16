import React from 'react';
import styles from './Profile.module.css'
import {ProfileInfo} from './ProfileInfo/ProfileInfo';
import {MyPosts} from './MyPosts/MyPosts';
import {ActionsTypes, PostsType} from '../../redux/store';

type ProfilePropsType ={
    posts: PostsType
    newPostText: string
    dispatch: (action: ActionsTypes) => void
}

function Profile({posts, newPostText, dispatch}: ProfilePropsType) {
    return (
        <div className={styles.content}>
            <ProfileInfo/>
            <MyPosts dispatch={dispatch}
                     newPostText={newPostText}
                     posts={posts}/>
        </div>
    )
}
export default Profile