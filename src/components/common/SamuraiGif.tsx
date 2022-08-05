import React from 'react';
import styles from './Samurai.module.css';
import gif from '../../assets/gifs/samursi-samurai.gif'

const SamuraiGif = () => {
    return (
        <div className={styles.imgDiv}>
            <img className={styles.img} alt={'Loading...'}
                 src={gif}/>
        </div>
    );
};

export default SamuraiGif;