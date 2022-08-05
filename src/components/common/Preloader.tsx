import React from 'react';
import styles from '../Users/Users.module.css';

const Preloader = () => {
    return (
        <div className={styles.imgDiv}>
            <img className={styles.img} alt={'Loading...'}
                 src={'http://25.media.tumblr.com/8a8b10944d0d618873723f1ecba4b6e6/tumblr_mta5zdXMXG1stjws3o1_500.gif'}/>
        </div>
    );
};

export default Preloader;