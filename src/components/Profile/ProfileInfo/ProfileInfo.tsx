import React from 'react';
import styles from './ProfileInfo.module.css';
import SamuraiGif from '../../common/SamuraiGif';

export function ProfileInfo() {
    return (
        <div className={styles.content}>
            <SamuraiGif/>
            <div className={styles.profileBody}>
                <div>ava + description</div>
            </div>
        </div>
    )
}