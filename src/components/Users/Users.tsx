import React from 'react';
import styles from './Users.module.css';
import smallLogo from '../../assets/images/samurai_small_logo.png';
import {UsersPropsType} from './UsersContainer';


export const Users = (props: UsersPropsType) => {

    const mappedUsers = props.users.map(el => {
        return <div key={el.id} className={styles.userItem}>
            <div className={styles.logoFollowDiv}>
                <div>
                    <img alt={''} className={styles.smallLogo} src={smallLogo}/>
                </div>
                <div onClick={el.followed
                    ? ()=>props.unFollow(el.id)
                    : ()=>props.follow(el.id)}
                     className={styles.followUnfollow}>
                    {el.followed ? 'Unfollow' : 'Follow'}
                </div>
            </div>

            <div className={styles.userInfo}>
                <div style={{textAlign: 'start'}}>{el.name}</div>
                <div style={{textAlign: 'center'}}>{el.status}</div>
                <div style={{textAlign: 'end'}}>{el.country}</div>
            </div>
        </div>
    })
    return (
        <div className={styles.main}>
            <div className={styles.imgDiv}>
                <img alt={''} className={styles.img}
                     src={'https://www.textillia.com/sites/default/files/styles/large/public/img/2022/01/14/1Samurai%20LogoV1pattern.jpg?itok=I2y422PV'}/>
            </div>
            {mappedUsers}
        </div>
    );
};
