import React from 'react';
import styles from './Profile.module.css'
import {ProfileInfo} from './ProfileInfo/ProfileInfo';
import {ActionsTypes, PostsType} from '../../redux/store';
import {MyPostsContainer} from './MyPosts/MyPostsContainer';

type ProfilePropsType ={
    posts: PostsType
    newPostText: string
    dispatch: (action: ActionsTypes) => void
}

function Profile({posts, newPostText, dispatch}: ProfilePropsType) {
    return (
        <div className={styles.content}>
            <ProfileInfo/>
            <MyPostsContainer dispatch={dispatch}
                     newPostText={newPostText}
                     posts={posts}/>
        </div>
    )
}
export default Profile