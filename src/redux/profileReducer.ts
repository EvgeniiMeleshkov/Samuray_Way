export type UserProfileType = {
    "aboutMe": string | null,
    "contacts": {
        "facebook": string | null,
        "website": string | null,
        "vk": string | null,
        "twitter": string | null,
        "instagram": string | null,
        "youtube": string | null,
        "github": string | null,
        "mainLink": string | null
    },
    "lookingForAJob": boolean,
    "lookingForAJobDescription": string | null,
    "fullName": string | null,
    "userId": number,
    "photos": {
        "small": string | null,
        "large": string | null
    }
} | null

export type PostType = {
    id: number
    message: string
    likesCount: number
    time: string
}
export type PostsType = Array<PostType>
export type ProfilePageStateType = {
    profileData: UserProfileType
    newPostText: string
    isFetching: boolean
    posts: PostsType
}



const initialState: ProfilePageStateType = {
    profileData: {} as UserProfileType,
    newPostText: 'It-Kamasutra',
    isFetching: false,
    posts: [
        {id: 1, message: 'Konitchiwa samurai san!', likesCount: 12, time: ''},
        {id: 2, message: 'Kore wa samurai netu-worku de gozaimas.', likesCount: 19, time: ''}
    ] as PostsType
}

export type ProfileReducerType = ReturnType<typeof profileReducer>

export const profileReducer = (state = initialState, action: ProfileActionsType): ProfilePageStateType => {
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
            return {
                ...state,
                posts: state.posts.map(p => action.id === p.id ? {...p, likesCount: p.likesCount += 1} : p)
            }
        case 'SET_USER_PROFILE':
            return {...state, profileData: action.payload.data}
        case 'SET_IS_FETCHING':
            return {...state, isFetching: action.payload.isFetching}
        default:
            return state
    }
}

export type ProfileActionsType = UpdatePostTextACType | AddPostActionACType | AddLikeActionACType | SetIsFetchingACType | SetUserProfileACType

type UpdatePostTextACType = ReturnType<typeof updatePostActionCreator>
type AddPostActionACType = ReturnType<typeof addPostActionCreator>
type AddLikeActionACType = ReturnType<typeof addLikeActionCreator>
type SetUserProfileACType = ReturnType<typeof setUserProfileAC>
type SetIsFetchingACType = ReturnType<typeof setIsFetchingAC>

export const setIsFetchingAC = (isFetching: boolean) => {
    return {
        type: 'SET_IS_FETCHING',
        payload: {
            isFetching
        }
    } as const
}
export const setUserProfileAC = (data: UserProfileType) => ({
    type: 'SET_USER_PROFILE',
    payload: {
        data
    }
} as const)

export const updatePostActionCreator = (text: string) => ({
    type: 'UPDATE_POST_TEXT',
    newText: text
} as const)

export const addPostActionCreator = () => ({
    type: 'ADD_POST',
} as const)

export const addLikeActionCreator = (id: number) => ({
    type: 'ADD_LIKE',
    id: id
} as const)
