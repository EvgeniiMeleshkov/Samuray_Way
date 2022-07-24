import {v1} from 'uuid';
//
// user = {
//     "name": "Arch",
//     "id": 25065,
//     "uniqueUrlName": null,
//     "photos": {
//     "small": null,
//         "large": null
// },
//     "status": null,
//     "followed": false
// }

export type UserType = {
    id: string
    name: string
    followed: boolean
    country: string
    status: string
}
export type InitialUsersStateType = { users: UserType[] }

const initialUsersState: InitialUsersStateType = {
    users: [
        {id: v1(), followed: true, name: 'John', country: 'USA', status: 'Im cool'},
        {id: v1(), followed: false, name: 'David', country: 'Australia', status: 'Im sailor'},
        {id: v1(), followed: true, name: 'Ulfrigh', country: 'Norway', status: 'Vikings!!!!'}
    ]
}

export const usersReducer = (state: InitialUsersStateType = initialUsersState, action: UsersActionsType): InitialUsersStateType => {
    switch (action.type) {
        case 'FOLLOW':
            return {...state, users: state.users.map(el => el.id === action.payload.id
                ? {...el, followed: action.payload.follow}
                : el)}
        case 'UNFOLLOW':
            return {...state, users: state.users.map(el => el.id === action.payload.id
                ? {...el, followed: action.payload.follow}
                : el)}
        case 'SET_USERS':
            return {...state, users: [...state.users, ...action.payload.users]}
        default:
            return state
    }
}

export type UsersActionsType = FollowACType | UnFollowACType | SetUsersACType

export type FollowACType = ReturnType<typeof followAC>
export type UnFollowACType = ReturnType<typeof unFollowAC>
export type SetUsersACType = ReturnType<typeof setUsersAC>

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
export const setUsersAC = (users: UserType[]) => {
    return {
        type: 'SET_USERS',
        payload: {
            users
        }
    } as const
}