//__________CONSTANTS FOR ACTION CREATORS___________
//
// import {profileReducer} from './profileReducer';
// import {dialogsReducer} from './dialogsReducer';

// const ADD_POST = 'ADD_POST'
// const ADD_MESSAGE = 'ADD_MESSAGE'
// const UPDATE_POST_TEXT = 'UPDATE_POST_TEXT'
// const UPDATE_MESSAGE_TEXT = 'UPDATE_MESSAGE_TEXT'


//-----------types---------------
//
//  type MessageType = {
//     id: number
//     text: string
//     name: string
//     time: string
// }
//  type MessagesType = Array<MessageType>
//  type FriendType = {
//     name: string
//     id: number
// }
//  type FriendsType = Array<FriendType>
//  type PostType = {
//     id: number
//     message: string
//     likesCount: number
//     time: string
// }
//  type PostsType = Array<PostType>
//  type ProfilePageType = {
//     newPostText: string
//     posts: PostsType
// }
//  type DialogsPageType = {
//     newMessageText: string
//     friends: FriendsType
//     messages: MessagesType
// }

// //______________STATE TYPE_____________________
//
//  type StateType = {
//     profilePage: ProfilePageType
//     dialogsPage: DialogsPageType
// }
//
// //____________STORE TYPE_________________________
//
//  type StoreType = {
//     _state: StateType
//     onChange: () => void
//     subscriber: (callBack: () => void) => void
//     getState: () => StateType
//     dispatch: (action: ActionsTypes) => void
// }
//
// //____________ACTIONS TYPES__________________________
//
//  type AddPostActionType = ReturnType<typeof addPostActionCreator>
//  type AddLikeActionType = ReturnType<typeof addLikeActionCreator>
//  type AddMessageActionType = ReturnType<typeof addMessageActionCreator>
//  type UpdatePostText = ReturnType<typeof updatePostActionCreator>
//  type UpdateMessageText = ReturnType<typeof updateMessageActionCreator>
//  type ActionsTypes =
//     AddLikeActionType
//     | AddPostActionType
//     | AddMessageActionType
//     | UpdatePostText
//     | UpdateMessageText
//
//
// //-------------STORE-------------------------------
//
//  const store: StoreType = {
//     _state: {
//         profilePage: {
//             newPostText: 'It-Kamasutra',
//             posts: [
//                 {id: 1, message: 'Konitchiwa samurai san!', likesCount: 12, time: ''},
//                 {id: 2, message: 'Kore wa samurai netu-worku de gozaimas.', likesCount: 19, time: ''}
//             ]
//         },
//         dialogsPage: {
//             friends: [
//                 {name: 'Dimich', id: 1},
//                 {name: 'Viktor', id: 2},
//                 {name: 'Igor', id: 3},
//                 {name: 'Sveta', id: 4},
//                 {name: 'Masha', id: 5},
//                 {name: 'Zhenya', id: 6},
//                 {name: 'Viktor', id: 7},
//                 {name: 'Ignat', id: 8},
//                 {name: 'Oleg', id: 9},
//             ],
//             newMessageText: '',
//             messages: [
//                 {id: 1, text: 'Ohiyo, samurai!', name: 'Samurai', time: ''},
//             ]
//         }
//     },
//     getState() {
//         return this._state
//     },
//     onChange() {
//         console.log('State is changed')
//     },
//     subscriber(callBack: () => void) {
//         this.onChange = callBack
//     },
//     //---------DISPATCH--------------------------------------
//     dispatch(action: ActionsTypes) {
//         this._state.profilePage = profileReducer(this._state.profilePage, action)
//         this._state.dialogsPage = dialogsReducer(this._state.dialogsPage, action)
//         this.onChange()
//     }
// }
//
// //----------------ACTION CREATORS------------------------
//
// const addPostActionCreator = () => ({
//     type: 'ADD_POST',
// } as const)
//
// const addLikeActionCreator = (id: number) => ({
//     type: 'ADD_LIKE',
//     id: id
// } as const)
//
// const addMessageActionCreator = () => ({
//     type: 'ADD_MESSAGE'
// } as const)
// const updatePostActionCreator = (text: string) => ({
//     type: 'UPDATE_POST_TEXT',
//     newText: text
// } as const)
// const updateMessageActionCreator = (text: string) => ({
//     type: 'UPDATE_MESSAGE_TEXT',
//     newText: text
// } as const)