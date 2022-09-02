import React from 'react';
import styles from './DialogMessage.module.css';
import avatar from '../../../assets/images/samurai_small_logo.png'
import {FriendsType, MessagesType, MessageType} from '../../../redux/dialogsReducer';
//-----------------------------------------------


type DialogMessagePropsType = {
    messages: MessagesType
    friends: FriendsType
}

//-----------------------------------------------
export function DialogMessage({messages, friends}: DialogMessagePropsType) {
    let currentFriend = friends[1]
    return (
        <div>
            {
                messages.map((m: MessageType, index: number) => {
                    return (
                        <div key={index} className={styles.name}>
                            <div className={styles.messageInstance}>
                                <div>
                                    <img alt={'avatar'} className={styles.img} src={avatar}/>
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
