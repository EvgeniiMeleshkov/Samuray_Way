import React from 'react';
import {NavLink} from 'react-router-dom';
import styles from './Navbar.module.css'

function Navbar() {

    return (
        <nav className={styles.nav}>
            <div className={styles.navItem}>
                <NavLink to={'/profile'} className={styles.navItem} activeClassName={styles.active}>Profile</NavLink>
            </div>
            <div className={styles.navItem}>
                <NavLink to={'/dialogs'} className={styles.navItem} activeClassName={styles.active}>Messages</NavLink>
            </div>
            <div className={styles.navItem}>
                <NavLink to={'/users'} className={styles.navItem} activeClassName={styles.active}>Users</NavLink>
            </div>
            <div className={styles.navItem}>
                <NavLink to={'/music'} className={styles.navItem} activeClassName={styles.active}>Music</NavLink>
            </div>
            <div className={styles.navItem}>
                <NavLink to={'/settings'} className={styles.navItem} activeClassName={styles.active}>Settings</NavLink>
            </div>
        </nav>
    )
}

export default Navbar