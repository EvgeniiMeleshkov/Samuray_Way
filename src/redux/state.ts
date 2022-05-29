
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
        friends: FriendsType
        posts: PostsType
    }
   messagesPage: {
       messages: MessagesType
   }
}
export let state = {
    profilePage: {
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
        posts: [
            {id: 1, message: 'Konitchiwa samurai san!', likesCount: 12, time: ''},
            {id: 2, message: 'Kore wa samurai netu-worku de gozaimas.', likesCount: 19, time: ''}
        ]
    },
    dialogsPage: {
        messages: [
            {id: 1, text: 'Ohiyo, samurai!', name: 'Samurai', time: ''},
        ]
    }

}


