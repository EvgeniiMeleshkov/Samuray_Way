import {ActionsTypes, DialogsPageType} from './store';


const initialState: DialogsPageType = {
    friends: [
        {name: 'Dimich', id: 1},
        {name: 'Viktor', id: 2},
        {name: 'Igor', id: 3},
        {name: 'Sveta', id: 4},
        {name: 'Masha', id: 5},
        {name: 'Zhenya', id: 6},
        {name: 'Viktor', id: 7},
        {name: 'Ignat', id: 8},
        {name: 'Oleg', id: 9},
    ],
    newMessageText: '',
    messages: [
        {id: 1, text: 'Ohiyo, samurai!', name: 'Samurai', time: ''},
    ]
}


export const dialogsReducer = (state = initialState, action: ActionsTypes) => {
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