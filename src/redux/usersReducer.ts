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

export type InitialUsersStateType = { items: UserType[] }

const initialUsersState: InitialUsersStateType = {
    items: [
        {
            "name": "Arch",
            "id": 25065,
            "uniqueUrlName": null,
            "photos": {
                "small": null,
                "large": null
            },
            "status": null,
            "followed": false
        },
        {
            "name": "ArchersKing",
            "id": 25064,
            "uniqueUrlName": null,
            "photos": {
                "small": null,
                "large": null
            },
            "status": null,
            "followed": false
        },
        {
            "name": "Norair",
            "id": 25063,
            "uniqueUrlName": null,
            "photos": {
                "small": null,
                "large": null
            },
            "status": null,
            "followed": false
        }]
}

export const usersReducer = (state: InitialUsersStateType = { items: [] }, action: UsersActionsType): InitialUsersStateType => {
    switch (action.type) {
        case 'FOLLOW':
            return {...state, items: state.items.map(el => el.id === action.payload.id
                ? {...el, followed: action.payload.follow}
                : el)}
        case 'UNFOLLOW':
            return {...state, items: state.items.map(el => el.id === action.payload.id
                ? {...el, followed: action.payload.follow}
                : el)}
        case 'SET_USERS':
            return {...state, items: [...state.items, ...action.payload.items]}
        default:
            return state
    }
}

export type UsersActionsType = FollowACType | UnFollowACType | SetUsersACType

export type FollowACType = ReturnType<typeof followAC>
export type UnFollowACType = ReturnType<typeof unFollowAC>
export type SetUsersACType = ReturnType<typeof setUsersAC>

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