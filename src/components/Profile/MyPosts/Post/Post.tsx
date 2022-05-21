import React from "react";
import styles from "./Post.module.css"
import smallLogo from "../../../../assets/images/samurai_small_logo.png"


type PostPropType = {
    message: string,
    likesCount: number
}
const Post = (props: PostPropType) => {
    return (
        <div className={styles.post}>
            <img className={styles.smallLogo} src={smallLogo}/>
            {props.message}
            <div>
                <span>
                    <button className={styles.likeButton}>☯🍣︎</button>
                    <b>{props.likesCount}</b>
                </span>
            </div>
        </div>
    )
}

export default Post