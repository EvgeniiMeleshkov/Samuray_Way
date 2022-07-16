import React from 'react';
import {
    ActionsTypes,
    addMessageActionCreator,
    FriendsType,
    MessagesType,
    updateMessageActionCreator
} from '../../redux/store';
import Dialogs from './Dialogs';


type DialogsContainerPropsType = {
    friends: FriendsType
    messages: MessagesType
    newMessageText: string
    dispatch: (action: ActionsTypes) => void
}


export const DialogsContainer = ({friends, messages, newMessageText, dispatch}: DialogsContainerPropsType) => {

//------------------------------------------------------------------------
    const onTextChanged = (text: string) => {
            dispatch(updateMessageActionCreator(text))
    }
    const addMessage = () => {
        dispatch(addMessageActionCreator())
    }

//------------------------------------------------------------------------
    return (
        <Dialogs friends={friends}
                 messages={messages}
                 newMessageText={newMessageText}
                 addMessage={addMessage}
                 onTextChanged={onTextChanged}
        />
    )
}
