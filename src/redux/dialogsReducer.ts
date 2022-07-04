import {ActionsTypes, DialogsPageType} from './state';

export const dialogsReducer = (state: DialogsPageType, action: ActionsTypes) => {
    switch (action.type) {
        case 'ADD_MESSAGE':
            let newMessage = {
                id: 2,
                text: state.newMessageText,
                name: 'Samuray',
                time: new Date().toLocaleTimeString()
            }
            state.messages.push(newMessage)
            state.newMessageText = ''
            return state
        case 'UPDATE_MESSAGE_TEXT':
            state.newMessageText = action.newText
            return state
        default:
            return state
    }
}