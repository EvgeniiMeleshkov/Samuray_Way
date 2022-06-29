
//-----------types---------------

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
export type PostType = {
    id: number
    message: string
    likesCount: number
    time: string
}
export type PostsType = Array<PostType>

//______________STATE TYPE_____________________

export type StateType = {
    profilePage: {
        newPostText: string
        posts: PostsType
    }
    dialogsPage: {
        newMessageText: string
        friends: FriendsType
        messages: MessagesType
    }
}

//____________STORE TYPE_________________________

export type StoreType = {
    _state: StateType
    onChange: () => void
    subscriber: (callBack: () => void) => void
    getState: () => StateType
    dispatch: (action: ActionsTypes) => void
}

//____________ACTIONS TYPES__________________________

export type AddPostActionType = {
    type: 'ADD_POST'
}
export type AddMessageActionType = {
    type: 'ADD_MESSAGE'
}
export type UpdatePostText = {
    type: 'UPDATE_POST_TEXT'
    newText: string
}
export type UpdateMessageText = {
    type: 'UPDATE_MESSAGE_TEXT'
    newText: string
}
export type ActionsTypes = AddPostActionType | AddMessageActionType | UpdatePostText | UpdateMessageText


//-------------STORE-------------------------------



export const store: StoreType = {
    _state: {
        profilePage: {
            newPostText: 'It-Kamasutra',
            posts: [
                {id: 1, message: 'Konitchiwa samurai san!', likesCount: 12, time: ''},
                {id: 2, message: 'Kore wa samurai netu-worku de gozaimas.', likesCount: 19, time: ''}
            ]
        },
        dialogsPage: {
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
    },
    getState() {
        return this._state
    },
    onChange() {
        console.log('State is changed')
    },
    subscriber(callBack: () => void) {
        this.onChange = callBack
    },
    //---------DISPATCH--------------------------------------
    dispatch(action: ActionsTypes) {
        if(action.type === 'ADD_POST') {
            let newPost = {
                id: 5,
                message: this._state.profilePage.newPostText,
                likesCount: 0,
                time: new Date().toLocaleTimeString()
            }
            this._state.profilePage.posts.push(newPost)
            this._state.profilePage.newPostText = ''
            this.onChange()
        } else if(action.type === 'ADD_MESSAGE') {
            let newMessage = {
                id: 2,
                text: this._state.dialogsPage.newMessageText,
                name: 'Samuray',
                time: new Date().toLocaleTimeString()
            }
            this._state.dialogsPage.messages.push(newMessage)
            this._state.dialogsPage.newMessageText = ''
            this.onChange()
        } else if(action.type === 'UPDATE_POST_TEXT') {
            this._state.profilePage.newPostText = action.newText
            this.onChange()
        } else if(action.type === 'UPDATE_MESSAGE_TEXT') {
            this._state.dialogsPage.newMessageText = action.newText
            this.onChange()
        }
    }
}

//--------------------------------------------------
