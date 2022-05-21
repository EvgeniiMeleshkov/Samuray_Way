import React from "react";
import {NavLink} from "react-router-dom";
import styles from "./Dialogs.module.css"

const Dialogs = () => {
    return (
        <div className={styles.dialogs}>
            <div>
                <img className={styles.img}
                     src={'https://www.textillia.com/sites/default/files/styles/large/public/img/2022/01/14/1Samurai%20LogoV1pattern.jpg?itok=I2y422PV'}/>
            </div>
            <div className={styles.pageBody}>
                <div className={styles.dAndM}>
                    <div className={styles.dialog}>
                        <NavLink to={'/dialogs/dimich'} className={styles.dialogItem} activeClassName={styles.active}>
                            Dimich
                        </NavLink>
                        <NavLink to={'/dialogs/sveta'} className={styles.dialogItem} activeClassName={styles.active}>
                            Sveta
                        </NavLink>
                        <NavLink to={'/dialogs/Ignat'} className={styles.dialogItem} activeClassName={styles.active}>
                            Ignat
                        </NavLink>
                        <NavLink to={'/dialogs/viktor'} className={styles.dialogItem} activeClassName={styles.active}>
                            Viktor
                        </NavLink>
                        <NavLink to={'/dialogs/valera'} className={styles.dialogItem} activeClassName={styles.active}>
                            Valera
                        </NavLink>
                    </div>

                    <div className={styles.messages}>
                        <div className={styles.message}>
                            Hi!
                        </div>
                        <div className={styles.message}>
                            How are you?
                        </div>
                        <div className={styles.message}>
                            Yo!
                        </div>
                        <div className={styles.message}>
                            This is just a message
                        </div>
                        <div className={styles.message}>
                            Some kind of text
                        </div>
                    </div>
                </div>
                <div className={styles.messageTextBody}>
                    <textarea className={styles.messageText}></textarea>
                    <div>
                        <button>send</button>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Dialogs