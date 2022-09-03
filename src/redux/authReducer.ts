import {authApi} from '../components/DataAccessLayer/DAL';
import {AppDispatch, AppThunk} from './redux_store';
import {stopSubmit} from 'redux-form';

export type AuthDataType = {
    email: string
    id: string
    login: string
    isAuth: boolean
}
export type AuthReducerStateType = AuthDataType & {
    isFetching: boolean
}
const authInitialState: AuthReducerStateType = {
    email: '',
    id: '',
    login: '',
    isAuth: false,
    isFetching: false
}

export const authReducer = (state: AuthReducerStateType = authInitialState, action: AuthActionsType) => {
    switch (action.type) {
        case 'SET_AUTH_DATA':
            return {
                ...state,
                ...action.payload
            }
        case 'SET_AUTH_IS_FETCHING':
            return {...state, isFetching: action.payload.isFetching}
        default:
            return state
    }
}


export type AuthActionsType = SetAuthDataACType | SetAuthDataIsFetchingACType

type SetAuthDataACType = ReturnType<typeof setAuthDataAC>
type SetAuthDataIsFetchingACType = ReturnType<typeof setAuthDataIsFetchingAC>

export const setAuthDataAC = (id: string, email: string, login: string, isAuth: boolean) => {
    return {
        type: 'SET_AUTH_DATA',
        payload: {
            id,
            email,
            login,
            isAuth
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


export const authMeThunkCreator = (): AppThunk => {
    return (dispatch: AppDispatch) => {
        dispatch(setAuthDataIsFetchingAC(true))
        authApi.authMe().then(res => {
            dispatch(setAuthDataIsFetchingAC(false))
            if (res.data.resultCode === 0) {
                const {id, login, email} = res.data.data
                dispatch(setAuthDataAC(id, email, login, true ))
            }
        })
    }
}

export const loginTC = (email: string, password: string, rememberMe: boolean): AppThunk => (dispatch: AppDispatch) => {
    authApi.login(email, password, rememberMe)
        .then(res => {
            if (res.data.resultCode === 0) {
                setAuthDataAC(res.data.data.userId, res.data.data.email, res.data.data.login, true)
                dispatch(authMeThunkCreator())
            } else {
                //@ts-ignore
                dispatch(stopSubmit('login', {_error: res.data.messages[0]}))
            }
        })
}

export const logOutTC = (): AppThunk => (dispatch: AppDispatch) => {
    authApi.logOut()
        .then(res => {
            if (res.data.resultCode === 0) {
                dispatch(setAuthDataAC( '',  '',  '',  false))
                dispatch(authMeThunkCreator())
            }
        })
}