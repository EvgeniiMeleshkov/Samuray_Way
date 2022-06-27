import React, {KeyboardEvent} from 'react';
import styles from './MyPosts.module.css'
import Post from './Post/Post';
import {PostsType} from '../../../redux/state';

type MyPostsPropsType = {
    posts: PostsType
    addPost: ()=>void
    newPostText: string
    updateNewPostText: (newText: string)=>void
}

export function MyPosts({posts, addPost, newPostText, updateNewPostText}: MyPostsPropsType) {
//---------------------------------------------------------------------------
    let postTextRef = React.createRef<HTMLTextAreaElement>()
//---------------------------------------------------------------------------
    const onButtonHandler = () => {
        addPost()
    }
    const onTextChange = () => {
        if(postTextRef.current) {
            let text = postTextRef.current.value
            console.log(text)
            updateNewPostText(text)
        }
    }
    const onEnterPressed = (e: KeyboardEvent<HTMLTextAreaElement>) => {
        if(postTextRef.current)
            e.key === 'Enter' && postTextRef.current.value.match(/\w/) && addPost()
    }
    return (
        <div>
            My Posts
            <div className={styles.addPostBody}>
                <div className={styles.tAreaBody}>
                    <textarea onKeyDown={onEnterPressed} ref={postTextRef} onChange={onTextChange} value={newPostText} className={styles.textArea}></textarea>
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
