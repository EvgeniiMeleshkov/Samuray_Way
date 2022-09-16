import React from 'react';
import styles from './Samurai.module.css';

const Preloader = () => {
    return (
        <div style={{display: 'flex',
            flexDirection: 'column',
            alignItems: 'center'}}>
        <div className={styles.imgDiv}>
            <img className={styles.img} alt={'Loading...'}
                 src={'http://25.media.tumblr.com/8a8b10944d0d618873723f1ecba4b6e6/tumblr_mta5zdXMXG1stjws3o1_500.gif'}/>
        </div>
        </div>
    );
};

export default Preloader;