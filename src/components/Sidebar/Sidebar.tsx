import React from 'react';
import Navbar from './Navbar/Navbar';
import styles from './Sidebar.module.css'

export const Sidebar = () => {
    return (
        <div className={styles.mainSidebarDiv}>
            <Navbar/>
            <h3 className={styles.h3}>Friends</h3>
            <Friends/>
        </div>
    );
};
const Friends = () => {
    return (
        <div className={styles.friendsImgDiv}>
            <span>
                <img alt='' className={styles.friendImg} src={'https://i.pinimg.com/474x/87/9f/b0/879fb0d3a27384ff9d45c129e46db56e.jpg'}/>
                <img alt='' className={styles.friendImg} src={'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRfr3f0Vh_FQM4fdXpoNA1etk9zi7O0XQFzsw&usqp=CAU'}/>
                <img alt='' className={styles.friendImg} src={'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSqr1IB_u806C7WqN2FvtLixBCbeI_svhm3ow&usqp=CAU'}/>
                <img alt='' className={styles.friendImg} src={'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQBcjbOBx9ohbxtAm0sd68ovstuPG0aWARNmA&usqp=CAU'}/>
                <img alt='' className={styles.friendImg} src={'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQUtgQAjdZc-_KC8IfFxQrVmPXzvY4v7wVVDA&usqp=CAU'}/>
                <img alt='' className={styles.friendImg} src={'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTP0NB1DFxPT0lzpM1YdTdY9yD7b2Ywr3J6bQ&usqp=CAU}'}/>
                <img alt='' className={styles.friendImg} src={'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRz2dx0LDa50W732aRecM3hEW7JajK95X7zLQ&usqp=CAU'}/>
                <img alt='' className={styles.friendImg} src={'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSz1ew9TBmn0ln3d8Ueou6XwRshMDf9zbaqh9-util9YH7Rsmb3bwDsAtqbQAooRSPgNUo&usqp=CAU'}/>
            </span>
        </div>
    );
};

