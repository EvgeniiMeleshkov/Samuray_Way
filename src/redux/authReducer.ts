export type AuthDataType = {
    email: string ,
    id : string ,
    login: string,
}
export type AuthReducerStateType = AuthDataType & {
    isFetching: boolean
    isAuth: boolean
}
const authInitialState: AuthReducerStateType = {
    email: '',
    id : '',
    login: '',
    isAuth: false,
    isFetching: false
}

export const authReducer = (state: AuthReducerStateType = authInitialState, action: AuthActionsType) => {
    switch (action.type) {
        case 'SET_AUTH_DATA':
            return {
                ...state,
                ...action.payload.data,
                isAuth: true
            }
        case 'SET_AUTH_IS_FETCHING':
            return {...state, isFetching: action.payload.isFetching}
        default:
            return state
    }
}



type AuthActionsType = SetAuthDataACType | SetAuthDataIsFetchingACType

type SetAuthDataACType = ReturnType<typeof setAuthDataAC>
type SetAuthDataIsFetchingACType = ReturnType<typeof setAuthDataIsFetchingAC>

export const setAuthDataAC = (data: AuthDataType) => {
    return {
        type: 'SET_AUTH_DATA',
        payload: {
            data
        }
    } as const
}
export const setAuthDataIsFetchingAC = (isFetching: boolean) => {
    return {
        type: 'SET_AUTH_IS_FETCHING',
        payload: {
            isFetching
        }
    } as const
}
