import {NavLink} from 'react-router-dom';
import styles from '../Dialogs.module.css';
import React from 'react';
import {FriendsType, FriendType} from '../../../redux/state';
//------------------------------------------
type DialogItemPropsType = {
    friends: FriendsType
}
//------------------------------------------
export function DialogItem({friends}: DialogItemPropsType) {
    return (
        <div>
            {friends.map((f: FriendType, index: number) => {
                return <div key={index}>
                    <NavLink className={styles.dialogItem} activeClassName={styles.active}
                             to={`/dialogs/${f.id}${f.name}`}>
                        {f.name}
                    </NavLink>
                </div>
            })
            }
        </div>
    )
}
