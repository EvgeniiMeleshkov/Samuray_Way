import React from 'react';
import {NavLink} from 'react-router-dom';
import styles from './Navbar.module.css'

function Navbar() {
    const clName = (p: boolean)=>{return p ? styles.active : styles.navItem}
    return (
        <nav className={styles.nav}>
            <div className={styles.navItem}>
                <NavLink to={'/profile/'} className={(p)=>clName(p.isActive)}>Profile</NavLink>
            </div>
            <div className={styles.navItem}>
                <NavLink to={'/dialogs/'} className={(p)=>clName(p.isActive)}>Messages</NavLink>
            </div>
            <div className={styles.navItem}>
                <NavLink to={'/users'} className={(p)=>clName(p.isActive)}>Users</NavLink>
            </div>
            <div className={styles.navItem}>
                <NavLink to={'/music'} className={(p)=>clName(p.isActive)}>Music</NavLink>
            </div>
            <div className={styles.navItem}>
                <NavLink to={'/settings'} className={(p)=>clName(p.isActive)}>Settings</NavLink>
            </div>
        </nav>
    )
}

export default Navbar