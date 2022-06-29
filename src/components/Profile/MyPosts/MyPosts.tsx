import React, {KeyboardEvent} from 'react';
import styles from './MyPosts.module.css'
import Post from './Post/Post';
import {
    ActionsTypes,
    addPostActionCreator,
    AddPostActionType,
    PostsType,
    updatePostActionCreator
} from '../../../redux/state';

type MyPostsPropsType = {
    posts: PostsType
    newPostText: string
    dispatch: (action: ActionsTypes) => void
}

export function MyPosts({posts, newPostText, dispatch}: MyPostsPropsType) {
//---------------------------------------------------------------------------
    let postTextRef = React.createRef<HTMLTextAreaElement>()
//---------------------------------------------------------------------------




    const onButtonHandler = () => {
        dispatch(addPostActionCreator())
    }
    const onTextChange = () => {
        if(postTextRef.current) {
            let text = postTextRef.current.value
            dispatch(updatePostActionCreator(text))
        }
    }
    const onEnterPressed = (e: KeyboardEvent<HTMLTextAreaElement>) => {
        if(postTextRef.current)
            e.key === 'Enter' &&
            postTextRef.current.value.match(/\w/) &&
            dispatch(addPostActionCreator())
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
