import React from "react";
import styles from "./MyPosts.module.css"
import Post from "./Post/Post";

const MyPosts = () => {
    return (
        <div>
            My Posts
            <div className={styles.addPostBody}>
                <div className={styles.tAreaBody}>
                <textarea className={styles.textArea}></textarea>
                </div>
                <div>
                <button className={styles.addPostButton}>Add post</button>
                </div>
            </div>
            <div className={styles.posts}>
                <Post message={'Konitchiwa samurai san!'} likesCount={15}/>
                <Post message={'O genki des ka?'} likesCount={7}/>
                <Post message={'Kore wa samurai netu-worku de gozaimas.'} likesCount={10}/>
            </div>
        </div>
    )
}

export default MyPosts