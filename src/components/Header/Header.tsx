import React from 'react';
import styles from './Header.module.css'
import {NavLink, Redirect} from 'react-router-dom';

type HeaderPropsType = {
    isAuth: boolean
    login: string
    logOutTC: () => void
}

const Header = ({login, isAuth, logOutTC}: HeaderPropsType) => {

    return (
        <header className={styles.header}>
            <div>
                <img className={styles.img}
                     alt={'Samurai'}
                     src={'https://images.fineartamerica.com/images/artworkimages/medium/3/programmer-coding-samurai-japan-debugging-funny-lisa-stronzi-transparent.png'}/>

            </div>
            <div className={styles.loginBlock}>
                {isAuth && <div onClick={logOutTC} className={styles.loginName}>Log Out</div>}
                <div >

                    {isAuth
                        ? <div className={styles.loginName}>
                            {login}
                            <Redirect to={'profile'}/>

                        </div>

                        : <NavLink to={'/login'}>Login</NavLink>
                    }
                </div>
            </div>
        </header>
    )
}

export default Header