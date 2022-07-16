import React, {KeyboardEvent} from 'react';
import styles from './MyPosts.module.css'
import Post from './Post/Post';
import {PostsType} from '../../../redux/store';

type MyPostsPropsType = {
    updateNewPostText: (text: string) => void
    addPost: () => void
    addLike: (id: number) => void
    posts: PostsType
    newPostText: string
}

export function MyPosts({
                            posts,
                            addPost,
                            addLike,
                            newPostText,
                            updateNewPostText
                        }: MyPostsPropsType) {
//---------------------------------------------------------------------------
    let postTextRef = React.createRef<HTMLTextAreaElement>()
//---------------------------------------------------------------------------

    const onButtonHandler = () => {
        addPost()
    }
    const onTextChange = () => {
        if (postTextRef.current) {
            let text = postTextRef.current.value
            updateNewPostText(text)
        }
    }
    const onEnterPressed = (e: KeyboardEvent<HTMLTextAreaElement>) => {
        if (postTextRef.current)
            e.key === 'Enter' &&
            postTextRef.current.value.match(/\w/) &&
            addPost()
    }
    const addLikeHandler = (id: number) => {
        addLike(id)
    }
    return (
        <div>
            My Posts
            <div className={styles.addPostBody}>
                <div className={styles.tAreaBody}>
                    <textarea onKeyDown={onEnterPressed}
                              ref={postTextRef}
                              onChange={onTextChange}
                              value={newPostText}
                              className={styles.textArea}></textarea>
                </div>
                <div>{newPostText !== '' && newPostText.match(/\w/)
                    ? <button className={styles.addPostButton} onClick={onButtonHandler}>Add post</button>
                    : <button disabled={true}>write your post here...</button>
                }</div>
            </div>
            <div className={styles.posts}>
                <Post addLike={addLikeHandler} posts={posts}/>
            </div>
        </div>
    )
}
