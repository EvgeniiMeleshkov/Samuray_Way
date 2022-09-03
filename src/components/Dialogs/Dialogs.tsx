import React from 'react';
import styles from './Dialogs.module.css'
import {DialogItem} from './DialogItem/DialogItem';
import {DialogMessage} from './DialogMessage/DialogMessage';
import {DialogsPropsType} from './DialogsContainer';
import SamuraiGif from '../common/SamuraiGif';
import {Field, InjectedFormProps, reduxForm} from 'redux-form';
import {Textarea} from '../common/formsControls/Textarea';
import {maxLength, minLength, requiredField} from '../../utilites/validators/validators';
import {Redirect} from 'react-router-dom';


export const Dialogs: React.FC<DialogsPropsType> = ({dialogsPage, addMessage, isAuth}: DialogsPropsType) => {


//------------------------------------------------------------------------

//------------------------------------------------------------------------

    //
    // const onTextChangedHandler = () => {
    //     if (messageTextRef.current) {
    //         let text = messageTextRef.current.value
    //         onTextChanged(text)
    //     }
    // }
    // const onEnterPressed = (e: KeyboardEvent<HTMLTextAreaElement>) => {
    //     if (messageTextRef.current)
    //         e.key === 'Enter' &&
    //         messageTextRef.current.value.match(/\w/) &&
    //         addMessage(messageTextRef.current.value)
    // }

    const addNewMessage = (formData: NewMessageFormPropsType) => {
        addMessage(formData.newMessageText)
        formData.newMessageText = ''
    }

//------------------------------------------------------------------------

    return (
        <div>
            {isAuth
                ? <div className={styles.dialogs}>
                    <SamuraiGif/>
                    {/*<div className={styles.imgDiv}>*/}
                    {/*    <img className={styles.img}*/}
                    {/*         alt={'Samurai'}*/}
                    {/*         src={'https://www.textillia.com/sites/default/files/styles/large/public/img/2022/01/14/1Samurai%20LogoV1pattern.jpg?itok=I2y422PV'}/>*/}
                    {/*</div>*/}
                    <div className={styles.pageBody}>
                        <div className={styles.dAndM}>
                            <div className={styles.dialog}>
                                <DialogItem friends={dialogsPage.friends}/>
                            </div>
                            <div>
                                <DialogMessage friends={dialogsPage.friends} messages={dialogsPage.messages}/>
                            </div>
                        </div>
                        <NewMessageReduxForm onSubmit={addNewMessage}/>
                    </div>
                </div>
                : <Redirect to={'/login'}/>
            }
        </div>
    )
}

type NewMessageFormPropsType = {
    newMessageText: string
}
const max300 = maxLength(300)
const min1 = minLength(1)
const NewMessageForm: React.FC<InjectedFormProps<NewMessageFormPropsType>> = (props) => {
    // const text = store.getState().dialogsPage.newMessageText
    return (
        <form onSubmit={props.handleSubmit} className={styles.messageTextBody}>
            <div>
                <Field
                    component={Textarea}
                    validate={[requiredField, max300, min1]}
                    name="newMessageText"
                    placeholder="Enter your message"/>
            </div>
            <div className={styles.button}>
                {/*{text !== '' && text.match(/\w/)*/}
                <button className={styles.sendButton}>send</button>
                {/*: <button className={styles.sendButton} disabled={true}>write a message</button>}*/}
            </div>
        </form>
    )
}

const NewMessageReduxForm = reduxForm<NewMessageFormPropsType>({
    form: 'messageForm'
})(NewMessageForm)