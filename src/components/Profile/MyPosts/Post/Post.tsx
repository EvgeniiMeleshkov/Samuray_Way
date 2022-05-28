import React from 'react';
import styles from './Post.module.css'
import smallLogo from '../../../../assets/images/samurai_small_logo.png'


export type PostType = {
    message: string,
    likesCount: number
}

export type PostsType = {
    posts: Array<PostType>
}

function Post({posts}: PostsType) {
    return (
        <>
            {posts.map((p, index) => {
                return (
                    <div key={index} className={styles.post}>
                    <img alt={''} className={styles.smallLogo} src={smallLogo}/>
                    {p.message}
                    <div>
                        <span>
                            <button className={styles.likeButton}>☯🍣︎</button>
                            <b>{p.likesCount}</b>
                        </span>
                    </div>
                </div>)
            })}
        </>
    )
}

export default Post