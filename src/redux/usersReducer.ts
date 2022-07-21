import {v1} from 'uuid';

type UserType = {
    id: string
    name: string
    followed: boolean
    country: string
    status: string
}
type InitialStateType = Array<UserType>

const initialUsersState: InitialStateType = [
    {id: v1(), name: 'John', followed: true, country: 'USA', status: 'Im cool'},
    {id: v1(), name: 'David', followed: false, country: 'Australia', status: 'Im sailor'},
    {id: v1(), name: 'Ulfrigh', followed: true, country: 'Norway', status: 'Vikings!!!!'}
]

export const UsersReducer = (state: InitialStateType, action: any) => {
    switch (action.type) {
        case 'XXX':
            return state
        default:
            return state
    }
}

