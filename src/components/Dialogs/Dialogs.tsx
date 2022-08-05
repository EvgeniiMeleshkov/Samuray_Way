import React, {KeyboardEvent} from 'react';
import styles from './Dialogs.module.css'
import {DialogItem} from './DialogItem/DialogItem';
import {DialogMessage} from './DialogMessage/DialogMessage';
import {DialogsPropsType} from './DialogsContainer';



export const Dialogs: React.FC<DialogsPropsType> = ({dialogsPage, addMessage, onTextChanged}: DialogsPropsType) => {


//------------------------------------------------------------------------

    let messageTextRef = React.createRef<HTMLTextAreaElement>()

//------------------------------------------------------------------------
    const onTextChangedHandler = () => {
        if(messageTextRef.current) {
            let text = messageTextRef.current.value
            onTextChanged(text)
        }
    }
    const onEnterPressed = (e: KeyboardEvent<HTMLTextAreaElement>) => {
        if(messageTextRef.current)
        e.key === 'Enter' &&
        messageTextRef.current.value.match(/\w/) &&
        addMessage()
    }
    const onButtonHandler = () => {
        addMessage()
    }

//------------------------------------------------------------------------
    return (
        <div className={styles.dialogs}>
            <div className={styles.imgDiv}>
                <img className={styles.img}
                     src={'https://www.textillia.com/sites/default/files/styles/large/public/img/2022/01/14/1Samurai%20LogoV1pattern.jpg?itok=I2y422PV'}/>
            </div>
            <div className={styles.pageBody}>
                <div className={styles.dAndM}>
                    <div className={styles.dialog}>
                        <DialogItem friends={dialogsPage.friends}/>
                    </div>
                    <div>
                        <DialogMessage friends={dialogsPage.friends} messages={dialogsPage.messages}/>
                    </div>
                </div>
                <div className={styles.messageTextBody}>
                    <div>
                        <textarea onKeyDown={(e)=>onEnterPressed(e)}
                                  ref={messageTextRef} className={styles.messageText}
                                  value={dialogsPage.newMessageText} onChange={onTextChangedHandler}></textarea>
                    </div>
                    <div className={styles.button}>
                        {dialogsPage.newMessageText !== '' && dialogsPage.newMessageText.match(/\w/)
                            ? <button className={styles.sendButton} onClick={onButtonHandler}>send</button>
                            : <button className={styles.sendButton} disabled={true}>write a message</button>}
                    </div>
                </div>
            </div>
        </div>
    )
}