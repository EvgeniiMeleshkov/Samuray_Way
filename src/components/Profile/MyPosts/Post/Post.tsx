import React from 'react';
import styles from './Post.module.css'
import smallLogo from '../../../../assets/images/samurai_small_logo.png'
import {PostsType, PostType} from '../../../../redux/profileReducer';

type PostPropsType = {
    posts: PostsType
    addLike: (id: number) => void
    userPhoto: string | null | undefined
}

function Post({posts, addLike, userPhoto}: PostPropsType) {
    return (
        <>
            {posts.map((p: PostType) => {
                return (
                    <div key={p.id} className={styles.post}>
                        <img alt={''} className={styles.smallLogo} src={userPhoto ? userPhoto : smallLogo}/>
                        <div className={styles.postMessage}>
                            {p.message}
                        </div>
                        <div>
                        <span className={styles.likesSpan}>
                            <button onClick={() => addLike(p.id)} className={styles.likeButton}>☯🍣︎</button>
                            <b>{p.likesCount}</b>
                        </span>
                        </div>
                    </div>)
            })}
        </>
    )
}

export default Post