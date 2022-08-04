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
}

const initialUsersState: InitialUsersStateType = {
    items: [],
    pageSize: 5,
    totalUsersCount: 19,
    currentPage: 1
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
        default:
            return state
    }
}

export type UsersActionsType = FollowACType | UnFollowACType | SetUsersACType | SetCurrentPageACType | SetTotalUsersCountACType

export type FollowACType = ReturnType<typeof followAC>
export type UnFollowACType = ReturnType<typeof unFollowAC>
export type SetUsersACType = ReturnType<typeof setUsersAC>
export type SetCurrentPageACType = ReturnType<typeof setCurrentPageAC>
export type SetTotalUsersCountACType = ReturnType<typeof setTotalUsersCountAC>

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