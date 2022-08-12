import React from 'react';
import styles from './Header.module.css'
import {NavLink} from 'react-router-dom';

type HeaderPropsType = {
    isAuth: boolean
    login: string
}

const Header = ({login, isAuth}: HeaderPropsType) => {
    return (
        <header className={styles.header}>
            <div>
                <img className={styles.img}
                     alt={'Samurai'}
                     src={'https://images.fineartamerica.com/images/artworkimages/medium/3/programmer-coding-samurai-japan-debugging-funny-lisa-stronzi-transparent.png'}/>

            </div>

            <div className={styles.loginBlock}>
                {isAuth
                    ? <div className={styles.loginName}>{login}</div>
                    :<NavLink to={'/login'}>Login</NavLink>
                }
            </div>
        </header>
    )
}

export default Header