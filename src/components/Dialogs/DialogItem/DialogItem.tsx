import {NavLink} from 'react-router-dom';
import styles from '../Dialogs.module.css';
import React from 'react';
//------------------------------------------
export type FriendType = {
    name: string
    id: number
}
export type Friends = {
    friends: FriendType[]
}

//------------------------------------------
export function DialogItem(props: Friends) {
    return (
        <div>
            {props.friends.map((f: FriendType, index: number) => {
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
