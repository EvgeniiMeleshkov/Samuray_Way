import React from "react";
import { NavLink } from "react-router-dom";
import styles from "./Navbar.module.css"

const Navbar = () => {



    return (
        <nav className={styles.nav}>
            <div className={styles.navItem}>
                <NavLink to={'/profile'} activeClassName={styles.active}>Profile</NavLink>
            </div>
            <div className={styles.navItem}>
                <NavLink to={'/dialogs'} activeClassName={styles.active}>Messages</NavLink>
            </div>
            <div className={styles.navItem}>
                <NavLink to={'/users'} activeClassName={styles.active}>Users</NavLink>
            </div>
            <div className={styles.navItem}>
                <NavLink to={'/music'} activeClassName={styles.active}>Music</NavLink>
            </div>
            <div className={styles.navItem}>
                <NavLink to={'/settings'} activeClassName={styles.active}>Settings</NavLink>
            </div>
        </nav>
    )
}

export default Navbar