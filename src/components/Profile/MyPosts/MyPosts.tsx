import React, {useState} from 'react';
import styles from './MyPosts.module.css'
import Post from './Post/Post';
import {PostsType} from '../../../redux/state';

type MyPostsPropsType = {
    posts: PostsType
}

export function MyPosts({posts}: MyPostsPropsType) {
//---------------------------------------------------------------------------
    let [value, setValue] = useState('')
//---------------------------------------------------------------------------
    const onTextChange = (e: any) => {
        setValue(e.currentTarget.value)
    }

    return (
        <div>
            My Posts
            <div className={styles.addPostBody}>
                <div className={styles.tAreaBody}>
                    <textarea onChange={onTextChange} className={styles.textArea}></textarea>
                </div>
                <div>{ value !== '' && value.match(/\w/)
                    ? <button className={styles.addPostButton}>Add post</button>
                    : <button disabled={true}>write your post here...</button>
                }</div>
            </div>
            <div className={styles.posts}>
                <Post posts={posts}/>
            </div>
        </div>
    )
}
