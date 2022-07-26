import {ActionsTypes, PostsType, ProfilePageType} from './store';


const initialState: ProfilePageType = {
    newPostText: 'It-Kamasutra',
    posts: [
        {id: 1, message: 'Konitchiwa samurai san!', likesCount: 12, time: ''},
        {id: 2, message: 'Kore wa samurai netu-worku de gozaimas.', likesCount: 19, time: ''}
    ] as PostsType
}

export type ProfileReducerType = ReturnType<typeof profileReducer>

export const profileReducer = (state = initialState, action: ActionsTypes): ProfilePageType => {
    switch (action.type) {
        case 'ADD_POST':
            let newPost = {
                id: new Date().getTime() + new Date().getDate(),
                message: state.newPostText,
                likesCount: 0,
                time: new Date().toLocaleTimeString()
            }
            return {...state, posts: [...state.posts, newPost], newPostText: ''}
        case 'UPDATE_POST_TEXT':
            return {...state, newPostText: action.newText}
        case 'ADD_LIKE':
            return {...state, posts: state.posts.map(p => action.id === p.id ? {...p, likesCount: p.likesCount += 1} : p)}
        default:
            return state
    }
}