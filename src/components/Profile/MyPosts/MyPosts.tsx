import React, {KeyboardEvent} from 'react';
import styles from './MyPosts.module.css'
import Post from './Post/Post';
import {MyPostsPropsType} from './MyPostsContainer';

export function MyPosts({
                            profilePage,
                            addPost,
                            addLike,
                            onTextChange
                        }: MyPostsPropsType) {
//---------------------------------------------------------------------------
    let postTextRef = React.createRef<HTMLTextAreaElement>()
//---------------------------------------------------------------------------

    const onButtonHandler = () => {
        addPost()
    }
    const onTextChangeHandler = () => {
        if (postTextRef.current) {
            let text = postTextRef.current.value
            onTextChange(text)
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
            <div className={styles.addPostBody}>
                <div className={styles.tAreaBody}>
                    <textarea onKeyDown={onEnterPressed}
                              ref={postTextRef}
                              onChange={onTextChangeHandler}
                              value={profilePage.newPostText}
                              className={styles.textArea}></textarea>
                </div>
                <div>{profilePage.newPostText !== '' && profilePage.newPostText.match(/\w/)
                    ? <button className={styles.addPostButton} onClick={onButtonHandler}>Add post</button>
                    : <button disabled={true}>write your post here...</button>
                }</div>
            </div>
            <div className={styles.posts}>
                <Post userPhoto={profilePage.profileData?.photos?.small} addLike={addLikeHandler} posts={profilePage.posts}/>
            </div>
        </div>
    )
}
