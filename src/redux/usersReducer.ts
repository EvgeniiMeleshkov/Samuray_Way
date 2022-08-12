import {userApi} from '../components/DataAccessLayer/DAL';
import {AppThunk} from './redux_store';

export type UserType = {
    name: string,
    id: number,
    uniqueUrlName: string | null,
    photos: {
        small: string | null,
        large: string | null
    },
    status: string | null,
    followed: boolean
}

export type InitialUsersStateType = {
    items: UserType[]
    pageSize: number
    totalUsersCount: number
    currentPage: number
    isFetching: boolean
    followingProgress: number[]
}

const initialUsersState: InitialUsersStateType = {
    items: [],
    pageSize: 5,
    totalUsersCount: 19,
    currentPage: 1,
    isFetching: false,
    followingProgress: []
}

export const usersReducer = (state: InitialUsersStateType = initialUsersState, action: UsersActionsType): InitialUsersStateType => {
    switch (action.type) {
        case 'FOLLOW':
            return {
                ...state, items: state.items.map(el => el.id === action.payload.id
                    ? {...el, followed: action.payload.follow}
                    : el)
            }
        case 'UNFOLLOW':
            return {
                ...state, items: state.items.map(el => el.id === action.payload.id
                    ? {...el, followed: action.payload.follow}
                    : el)
            }
        case 'SET_USERS':
            return {...state, items: [...action.payload.items]}
        case 'SET_CURRENT_PAGE':
            return {...state, currentPage: action.payload.page}
        case 'SET_TOTAL_USERS_COUNT':
            return {...state, totalUsersCount: action.payload.count}
        case 'SET_FETCHING':
            return {...state, isFetching: action.payload.isFetching}
        case 'SET_FOLLOWING_PROGRESS':
            return {
                ...state,
                followingProgress: action.payload.isFollowingInProgress
                ? [...state.followingProgress, action.payload.id]
                    : state.followingProgress.filter(el => el !== action.payload.id)
            }
        default:
            return state
    }
}

export type UsersActionsType = FollowACType | SetToggleFollowingProgressACType | UnFollowACType | SetUsersACType | SetCurrentPageACType | SetFetchingACType | SetTotalUsersCountACType

export type FollowACType = ReturnType<typeof followAC>
export type UnFollowACType = ReturnType<typeof unFollowAC>
export type SetUsersACType = ReturnType<typeof setUsersAC>
export type SetCurrentPageACType = ReturnType<typeof setCurrentPageAC>
export type SetTotalUsersCountACType = ReturnType<typeof setTotalUsersCountAC>
export type SetFetchingACType = ReturnType<typeof setFetchingAC>
export type SetToggleFollowingProgressACType = ReturnType<typeof setToggleFollowingProgressAC>

export const setFetchingAC = (isFetching: boolean) => {
    return {
        type: 'SET_FETCHING',
        payload: {
            isFetching
        }
    } as const
}
export const setToggleFollowingProgressAC = (isFollowingInProgress: boolean, id: number) => {
    return {
        type: 'SET_FOLLOWING_PROGRESS',
        payload: {
            isFollowingInProgress,
            id
        }
    } as const
}
export const setTotalUsersCountAC = (count: number) => {
    return {
        type: 'SET_TOTAL_USERS_COUNT',
        payload: {
            count
        }
    } as const
}
export const setCurrentPageAC = (page: number) => {
    return {
        type: 'SET_CURRENT_PAGE',
        payload: {
            page
        }
    } as const
}
export const followAC = (id: number) => {
    return {
        type: 'FOLLOW',
        payload: {
            id,
            follow: true
        }
    } as const
}
export const unFollowAC = (id: number) => {
    return {
        type: 'UNFOLLOW',
        payload: {
            id,
            follow: false
        }
    } as const
}
export const setUsersAC = (items: UserType[]) => {
    return {
        type: 'SET_USERS',
        payload: {
            items
        }
    } as const
}

//=============================THUNK`s===========================//

export const getUsersThunkCreator = (currentPage: number, pageSize: number): AppThunk => {
    return (dispatch) => {
        //this.props.setFetching(true)
        dispatch(setFetchingAC(true))
        userApi.getUsers(currentPage, pageSize).then(res => {
            //this.props.setFetching(false)
            dispatch(setFetchingAC(false))
            //this.props.setUsers(res.items)
            dispatch(setUsersAC(res.items))
            //this.props.setTotalUsersCount(res.totalCount)
            dispatch(setTotalUsersCountAC(res.totalCount))
            dispatch(setCurrentPageAC(currentPage))
        }).catch(err => err)
    }
}

export const followSuccessThunkCreator = (userID: number): AppThunk => {
    return (dispatch) => {
        dispatch(setToggleFollowingProgressAC(true, userID))
        userApi.follow(userID).then(res => {
            if (res.data.resultCode === 0) {
                dispatch(followAC(userID))
                dispatch(setToggleFollowingProgressAC(false, userID))
            }
        })
    }
}

export const unFollowSuccessThunkCreator = (userID: number): AppThunk => {
    return (dispatch) => {
        dispatch(setToggleFollowingProgressAC(true, userID))
        userApi.unFollow(userID).then(res => {
            if (res.data.resultCode === 0) {
                dispatch(unFollowAC(userID))
                dispatch(setToggleFollowingProgressAC(false, userID))
            }
        })
    }
}
