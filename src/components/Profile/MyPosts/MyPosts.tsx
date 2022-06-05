import React from 'react';
import styles from './MyPosts.module.css'
import Post from './Post/Post';
import {PostsType} from '../../../redux/state';

type MyPostsPropsType = {
    posts: PostsType
    addPost: (postMessage: string)=>void
    newPostText: string
    updateNewPostText: (newText: string)=>void
}

export function MyPosts({posts, addPost, newPostText, updateNewPostText}: MyPostsPropsType) {
//---------------------------------------------------------------------------
    let postTextRef: any = React.createRef()
//---------------------------------------------------------------------------
    const onButtonHandler = () => {
        addPost(newPostText)
        updateNewPostText('')
    }
    const onTextChange = () => {
        let text = postTextRef.current.value
        console.log(text)
        updateNewPostText(text)
    }

    return (
        <div>
            My Posts
            <div className={styles.addPostBody}>
                <div className={styles.tAreaBody}>
                    <textarea ref={postTextRef} onChange={onTextChange} value={newPostText} className={styles.textArea}></textarea>
                </div>
                <div>{ newPostText !== '' && newPostText.match(/\w/)
                    ? <button className={styles.addPostButton} onClick={onButtonHandler}>Add post</button>
                    : <button disabled={true}>write your post here...</button>
                }</div>
            </div>
            <div className={styles.posts}>
                <Post posts={posts}/>
            </div>
        </div>
    )
}
