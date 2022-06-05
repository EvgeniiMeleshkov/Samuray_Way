import React from 'react';
import styles from './Dialogs.module.css'
import {DialogItem} from './DialogItem/DialogItem';
import {DialogMessage} from './DialogMessage/DialogMessage';
import {FriendsType, MessagesType} from '../../redux/state';


type DialogsPropsType = {
    friends: FriendsType
    messages: MessagesType
    newMessageText: string
    updateNewMessageText : (newText: string) => void
    addMessage : () => void
}


function Dialogs({friends, messages, newMessageText, updateNewMessageText, addMessage}: DialogsPropsType) {


//------------------------------------------------------------------------

    let messageTextRef: any = React.createRef()
//------------------------------------------------------------------------
    const onTextChanged = () => {
        let text = messageTextRef.current.value
        updateNewMessageText(text)
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
                        <DialogItem friends={friends}/>
                    </div>
                    <div>
                        <DialogMessage friends={friends} messages={messages}/>
                    </div>
                </div>
                <div className={styles.messageTextBody}>
                    <div>
                        <textarea ref={messageTextRef} className={styles.messageText} value={newMessageText} onChange={onTextChanged}></textarea>
                    </div>
                    <div className={styles.button}>
                        {newMessageText !== '' && newMessageText.match(/\w/)
                            ? <button onClick={onButtonHandler}>send</button>
                            : <button disabled={true}>write a message</button>}
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Dialogs