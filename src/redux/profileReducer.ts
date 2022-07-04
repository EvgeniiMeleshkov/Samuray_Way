import {ActionsTypes, ProfilePageType} from './state';

export const profileReducer = (state: ProfilePageType, action: ActionsTypes) => {
    switch (action.type) {
        case 'ADD_POST':
            let newPost = {
                id: 5,
                message: state.newPostText,
                likesCount: 0,
                time: new Date().toLocaleTimeString()
            }
            state.posts.push(newPost)
            state.newPostText = ''
            return state

        case 'UPDATE_POST_TEXT':
            state.newPostText = action.newText
            return state

        case 'ADD_LIKE':
            state.posts.map(p => action.id === p.id ? p.likesCount++ : p)
            return state
        default:
            return state
    }
}