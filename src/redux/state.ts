import {rerenderEntireTree} from '../render';

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
    addPost: (newPostText: string) => void
    updateNewPostText : (newText: string) => void
    addMessage : (newMessageText: string) => void
    updateNewMessageText : (newText: string) => void
}
//-------------------------------------------------------------
export let state = {
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
    },
    addPost : (newPostText: string) => {
        let newPost = {
            id: 5,
            message: newPostText,
            likesCount: 0,
            time: new Date().toLocaleTimeString()
        }
        state.profilePage.posts.push(newPost)
        rerenderEntireTree(state)
    },

    updateNewPostText : (newText: string) => {
        state.profilePage.newPostText = newText
        rerenderEntireTree(state)
    },
    addMessage : (newMessageText: string) => {
        let newMessage = {
            id: 2,
            text: newMessageText,
            name: 'Samuray',
            time: new Date().toLocaleTimeString()
        }
        state.dialogsPage.messages.push(newMessage)
        rerenderEntireTree(state)
    },
    updateNewMessageText : (newText: string) => {
        state.dialogsPage.newMessageText = newText
        rerenderEntireTree(state)
    }
}
//--------------------------------------------------


