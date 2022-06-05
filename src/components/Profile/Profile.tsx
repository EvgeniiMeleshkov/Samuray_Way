import React from 'react';
import styles from './Profile.module.css'
import {ProfileInfo} from './ProfileInfo/ProfileInfo';
import {MyPosts} from './MyPosts/MyPosts';
import {PostsType} from '../../redux/state';

type ProfilePropsType ={
    posts: PostsType
    addPost: (postMessage: string)=>void
    newPostText: string
    updateNewPostText: (newText: string)=>void
}

function Profile({posts, addPost, newPostText, updateNewPostText}: ProfilePropsType) {
    return (
        <div className={styles.content}>
            <ProfileInfo/>
            <MyPosts updateNewPostText={updateNewPostText} newPostText={newPostText} addPost={addPost} posts={posts}/>
        </div>
    )
}
export default Profile