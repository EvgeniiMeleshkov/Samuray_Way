import React, {ClassAttributes, KeyboardEvent, LegacyRef, RefObject} from 'react';
import styles from './Dialogs.module.css'
import {DialogItem} from './DialogItem/DialogItem';
import {DialogMessage} from './DialogMessage/DialogMessage';
import {
    ActionsTypes,
    addMessageActionCreator,
    FriendsType,
    MessagesType,
    updateMessageActionCreator
} from '../../redux/store';


type DialogsPropsType = {
    friends: FriendsType
    messages: MessagesType
    newMessageText: string
    addMessage:()=>void
    onTextChanged: (text:string)=>void
}


function Dialogs({friends, messages, newMessageText, addMessage, onTextChanged}: DialogsPropsType) {


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
                        <DialogItem friends={friends}/>
                    </div>
                    <div>
                        <DialogMessage friends={friends} messages={messages}/>
                    </div>
                </div>
                <div className={styles.messageTextBody}>
                    <div>
                        <textarea onKeyDown={(e)=>onEnterPressed(e)}
                                  ref={messageTextRef} className={styles.messageText}
                                  value={newMessageText} onChange={onTextChangedHandler}></textarea>
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