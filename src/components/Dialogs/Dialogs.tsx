import React, {useState} from 'react';
import styles from './Dialogs.module.css'
import {DialogItem} from './DialogItem/DialogItem';
import {DialogMessage} from './DialogMessage/DialogMessage';

function Dialogs() {

    let friends = [
        {name: 'Dimich', id: 1},
        {name: 'Viktor', id: 2},
        {name: 'Igor', id: 3},
        {name: 'Sveta', id: 4},
        {name: 'Masha', id: 5},
        {name: 'Zhenya', id: 6},
        {name: 'Viktor', id: 7},
        {name: 'Ignat', id: 8},
        {name: 'Oleg', id: 9},
    ]
//------------------------------------------------------------------------
    let [messages, setMessages] = useState([
        {id: 1, text: 'Ohiyo, samurai!', name: 'Samurai', time: ''},
    ])

    let [value, setValue] = useState('')
//------------------------------------------------------------------------
    const onTextChanged = (e: any) => {
        setValue(e.currentTarget.value)
    }
    const onButtonHandler = () => {
        setMessages([...messages, {
            id: messages[0].id,
            text: value,
            time: new Date().toLocaleTimeString(),
            name: messages[0].name
        }]);
        setValue('')
    }
//------------------------------------------------------------------------
    return (
        <div className={styles.dialogs}>
            <div>
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
                        <textarea className={styles.messageText} value={value} onChange={onTextChanged}></textarea>
                    </div>
                    <div className={styles.button}>
                        {value !== '' && value.match(/\w/)
                            ? <button onClick={onButtonHandler}>send</button>
                            : <button disabled={true}>write a message</button>}
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Dialogs