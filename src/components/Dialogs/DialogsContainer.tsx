import React from 'react';
import {
    ActionsTypes,
    addMessageActionCreator,
    FriendsType,
    MessagesType,
    updateMessageActionCreator
} from '../../redux/store';
import {StoreContext} from '../../StoreContext';
import Dialogs from './Dialogs';
import {store} from '../../redux/redux_store';


type DialogsContainerPropsType = {
    friends: FriendsType
    messages: MessagesType
    newMessageText: string
    dispatch: (action: ActionsTypes) => void
}


export const DialogsContainer = () => {

//------------------------------------------------------------------------


//------------------------------------------------------------------------
    return (
        <StoreContext.Consumer>
            {(store) => {
                const onTextChanged = (text: string) => {
                    store.dispatch(updateMessageActionCreator(text))
                }
                const addMessage = () => {
                    store.dispatch(addMessageActionCreator())
                }
                return (
                    <Dialogs friends={store.getState().dialogsPage.friends}
                             messages={store.getState().dialogsPage.messages}
                             newMessageText={store.getState().dialogsPage.newMessageText}
                             addMessage={addMessage}
                             onTextChanged={onTextChanged}
                    />
                )
            }
            }
        </StoreContext.Consumer>
    )
}
