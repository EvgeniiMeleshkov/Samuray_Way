
export type MessageType = {
    id: number
    text: string
    name: string
    time: string
}
export type MessagesType = Array<MessageType>
export type FriendType = {
    name: string
    id: number
}
export type FriendsType = Array<FriendType>

export type DialogsPageType = {
    newMessageText: string
    friends: FriendsType
    messages: MessagesType
}

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
    ] as FriendsType,
    newMessageText: '',
    messages: [
        {id: 1, text: 'Ohiyo, samurai!', name: 'Samurai', time: ''},
    ] as MessagesType
}

export const dialogsReducer = (state: DialogsPageType = initialState, action: DialogsReducerActionsType): DialogsPageType => {
    switch (action.type) {
        case 'ADD_MESSAGE':
            let newMessage = {
                id: 2,
                text: state.newMessageText,
                name: 'Samuray',
                time: new Date().toLocaleTimeString()
            }
            return {...state, messages: [...state.messages, newMessage], newMessageText: ''}
        case 'UPDATE_MESSAGE_TEXT':
            return {...state, newMessageText: action.newText}
        default:
            return state
    }
}


type DialogsReducerActionsType = AddMessageACType | UpdateMessageACType
type AddMessageACType = ReturnType<typeof addMessageAC>
type UpdateMessageACType = ReturnType<typeof updateMessageAC>

export const addMessageAC = () => ({
    type: 'ADD_MESSAGE'
} as const)

export const updateMessageAC = (text: string) => ({
    type: 'UPDATE_MESSAGE_TEXT',
    newText: text
} as const)