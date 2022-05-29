import React from 'react';
import styles from './Post.module.css'
import smallLogo from '../../../../assets/images/samurai_small_logo.png'
import {PostsType, PostType} from '../../../../redux/state';

type PostPropsType = {
    posts: PostsType
}

function Post({posts}: PostPropsType) {
    return (
        <>
            {posts.map((p: PostType, index: number) => {
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