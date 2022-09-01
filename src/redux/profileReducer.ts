import {AppDispatch, AppThunk} from './redux_store';
import {profileApi} from '../components/DataAccessLayer/DAL';

export type UserProfileType = {
    'aboutMe': string | null,
    'contacts': {
        'facebook': string | null,
        'website': string | null,
        'vk': string | null,
        'twitter': string | null,
        'instagram': string | null,
        'youtube': string | null,
        'github': string | null,
        'mainLink': string | null
    },
    'lookingForAJob': boolean,
    'lookingForAJobDescription': string | null,
    'fullName': string | null,
    'userId': number,
    'photos': {
        'small': string | null,
        'large': string | null
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
    isFetching: boolean
    posts: PostsType
    status: string
}


const initialState: ProfilePageStateType = {
    profileData: {} as UserProfileType,
    status: 'Test',
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
                message: action.newPost,
                likesCount: 0,
                time: new Date().toLocaleTimeString()
            }
            return {...state, posts: [...state.posts, newPost]}
        case 'ADD_LIKE':
            return {
                ...state,
                posts: state.posts.map(p => action.id === p.id ? {...p, likesCount: p.likesCount += 1} : p)
            }
        case 'SET_USER_PROFILE':
            return {...state, profileData: action.payload.data}
        case 'SET_IS_FETCHING':
            return {...state, isFetching: action.payload.isFetching}
        case 'SET_STATUS':
            return {...state, status: action.payload.status}
        default:
            return state
    }
}

export type ProfileActionsType =
    SetStatusACType
    | AddPostActionACType
    | AddLikeActionACType
    | SetIsFetchingACType
    | SetUserProfileACType

type AddPostActionACType = ReturnType<typeof addPostActionCreator>
type AddLikeActionACType = ReturnType<typeof addLikeActionCreator>
type SetUserProfileACType = ReturnType<typeof setUserProfileAC>
type SetIsFetchingACType = ReturnType<typeof setIsFetchingAC>
type SetStatusACType = ReturnType<typeof setStatusAC>

export const setStatusAC = (status: string) => {
    return {
        type: 'SET_STATUS',
        payload: {
            status
        }
    } as const
}
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

export const addPostActionCreator = (newPost: string) => ({
    type: 'ADD_POST',
    newPost
} as const)

export const addLikeActionCreator = (id: number) => ({
    type: 'ADD_LIKE',
    id: id
} as const)


export const setProfileDataThunkCreator = (userID: number): AppThunk => {
    return (dispatch: AppDispatch) => {
        dispatch(setIsFetchingAC(true))
        profileApi.getProfileData(userID).then(res => {
            dispatch(setIsFetchingAC(false))
            dispatch(setUserProfileAC(res.data))
            console.log(res.data)
        })
    }
}
export const getStatusThunkCreator = (userID: number): AppThunk => {
    return (dispatch: AppDispatch) => {
        profileApi.getStatus(userID)
            .then(res => {
                dispatch(setStatusAC(res.data))
            })
    }
}
export const updateStatusThunkCreator = (status: string): AppThunk => {
    return (dispatch: AppDispatch) => {
        profileApi.changeStatus(status)
            .then(res => {
                if (res.data.resultCode === 0) {
                    dispatch(setStatusAC(status))
                }
            })
    }
}