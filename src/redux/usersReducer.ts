import {v1} from 'uuid';

export type UserType = {
    id: string
    name: string
    followed: boolean
    country: string
    status: string
}
export type InitialUsersStateType = Array<UserType>

const initialUsersState: InitialUsersStateType = [
    {id: v1(), followed: true, name: 'John', country: 'USA', status: 'Im cool'},
    {id: v1(), followed: false, name: 'David', country: 'Australia', status: 'Im sailor'},
    {id: v1(), followed: true, name: 'Ulfrigh', country: 'Norway', status: 'Vikings!!!!'}
]

export const usersReducer = (state: InitialUsersStateType = initialUsersState, action: UsersActionsType): InitialUsersStateType => {
    switch (action.type) {
        case 'FOLLOW':
            return state.map(el => el.id === action.payload.id
                ? {...el, followed: action.payload.follow}
                : el)
        case 'UNFOLLOW':
            return state.map(el => el.id === action.payload.id
                ? {...el, followed: action.payload.follow}
                : el)
        default:
            return state
    }
}

export type UsersActionsType = FollowACType | UnFollowACType

export type FollowACType = ReturnType<typeof followAC>
export type UnFollowACType = ReturnType<typeof unFollowAC>

export const followAC = (id: string) => {
    return {
        type: 'FOLLOW',
        payload: {
            id,
            follow: true
        }
    } as const
}
export const unFollowAC = (id: string) => {
    return {
        type: 'UNFOLLOW',
        payload: {
            id,
            follow: false
        }
    } as const
}