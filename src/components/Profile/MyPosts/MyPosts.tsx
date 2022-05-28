import React, {useState} from 'react';
import styles from './MyPosts.module.css'
import Post from './Post/Post';

export function MyPosts() {
//---------------------------------------------------------------------------
    let [posts, setPosts] = useState( [
        {id: 1, message: 'Konitchiwa samurai san!', likesCount: 12, time: ''},
        {id: 2, message: 'Kore wa samurai netu-worku de gozaimas.', likesCount: 19, time: ''}
    ])
    let [value, setValue] = useState('')
//---------------------------------------------------------------------------
    const onTextChange = (e: any) => {
        setValue(e.currentTarget.value)
    }
    const onButtonHandler = () => {
        setPosts([
            ...posts,
            {id: new Date().getTime(), message: value, likesCount: 0, time: new Date().toLocaleDateString()}
        ])
        setValue('')
    }
    // const onLikesPressed = () => {
    //     setPosts([
    //         ...posts,
    //
    //     ])
    // }
    return (
        <div>
            My Posts
            <div className={styles.addPostBody}>
                <div className={styles.tAreaBody}>
                    <textarea value={value} onChange={onTextChange} className={styles.textArea}></textarea>
                </div>
                <div>{value !== '' && value.match(/\w/)
                    ? <button onClick={onButtonHandler} className={styles.addPostButton}>Add post</button>
                    : <button disabled={true}>write your post here...</button>
                }</div>
            </div>
            <div className={styles.posts}>
                <Post posts={posts}/>
            </div>
        </div>
    )
}
