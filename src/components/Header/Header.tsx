import React from 'react';
import styles from './Header.module.css'

function Header() {
    return (
        <header className={styles.header}>
            <img className={styles.img}
                 alt={'Samurai'}
                 src={'https://images.fineartamerica.com/images/artworkimages/medium/3/programmer-coding-samurai-japan-debugging-funny-lisa-stronzi-transparent.png'}/>
        </header>
    )
}

export default Header