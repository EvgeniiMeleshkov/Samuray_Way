import React from 'react';
import styles from './ProfileInfo.module.css';

export function ProfileInfo() {
    return (
        <div className={styles.content}>
            <div className={styles.imgDiv}>
                <img className={styles.img}
                     src={'https://www.textillia.com/sites/default/files/styles/large/public/img/2022/01/14/1Samurai%20LogoV1pattern.jpg?itok=I2y422PV'}/>
            </div>
            <div className={styles.profileBody}>
                <div>ava + description</div>
            </div>
        </div>
    )
}