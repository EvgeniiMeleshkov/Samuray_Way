
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
    messages: [
        {id: 1, text: 'Ohiyo, samurai!', name: 'Samurai', time: ''},
    ] as MessagesType
}

export const dialogsReducer = (state: DialogsPageType = initialState, action: DialogsReducerActionsType): DialogsPageType => {
    switch (action.type) {
        case 'ADD_MESSAGE':
            let newMessage = {
                id: 2,
                text: action.text,
                name: 'Samuray',
                time: new Date().toLocaleTimeString()
            }
            return {...state, messages: [...state.messages, newMessage]}
        default:
            return state
    }
}


export type DialogsReducerActionsType = AddMessageACType
type AddMessageACType = ReturnType<typeof addMessageAC>


export const addMessageAC = (text: string) => ({
    type: 'ADD_MESSAGE',
    text
} as const)
