import React from 'react';
import styles from './Users.module.css';
import smallLogo from '../../assets/images/samurai_small_logo.png';

type UsersPropsType = {

}

export const Users: React.FC<UsersPropsType> = () => {
    return (
        <div className={styles.main}>
            <div className={styles.imgDiv}>
                <img className={styles.img}
                     src={'https://www.textillia.com/sites/default/files/styles/large/public/img/2022/01/14/1Samurai%20LogoV1pattern.jpg?itok=I2y422PV'}/>
            </div>
            <div className={styles.userItem}>
                <div>
                    <div>
                        <img alt={''} className={styles.smallLogo} src={smallLogo}/>
                    </div>
                    <div className={styles.followUnfollow}>Follow</div>
                </div>

                <div className={styles.userInfo}>
                    <div>Info</div>
                </div>
            </div>
        </div>
    );
};
