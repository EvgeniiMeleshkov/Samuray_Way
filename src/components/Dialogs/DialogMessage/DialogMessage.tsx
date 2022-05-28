import React from 'react';
import styles from './DialogMessage.module.css';
import avatar from '../../../assets/images/samurai_small_logo.png'
import {FriendType} from '../DialogItem/DialogItem';
//-----------------------------------------------
type MessageType = {
    id: number
    text: string
    name: string
    time: string
}
export type MessagesType = {
    messages: Array<MessageType>
}
type DialogMessagePropsType = {
    messages: Array<MessageType>
    friends: Array<FriendType>
}
//-----------------------------------------------
export function DialogMessage ({messages, friends}: DialogMessagePropsType) {
let currentFriend = friends[0]
    return (
        <div>
            {
                messages.map((m, index)=>{
                    return (
                        <div key={index} className={styles.name}>
                        <div className={styles.messageInstance}>
                            <div>
                                <img className={styles.img} src={avatar}/>
                            </div>
                            <div>
                                <div className={styles.messageText}>
                                    <div className={styles.userName}>{currentFriend.name}</div>
                                    <div className={styles.userMessage}>
                                        {m.text}
                                    </div>
                                    <div className={styles.userMessageTime}>
                                        {m.time}
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    )
                })
                }
        </div>

    )
}
