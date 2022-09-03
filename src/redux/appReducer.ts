import {AppDispatch} from './redux_store';
import {authMeThunkCreator} from './authReducer';

type AppInitType = {
    initialized: boolean
}
const initState: AppInitType = {
    initialized: false
}
export const appReducer = (state = initState, action: SetInitAppACType) => {
    switch (action.type) {
        case 'INIT_APP':
            return {...state, initialized: true}
        default:
            return state
    }
}
type SetInitAppACType = ReturnType<typeof setInitAppAC>
export const setInitAppAC = () => {
    return {
        type: 'INIT_APP'
    } as const
}
export type ResType = {
    data: {id: number, login: string, email: string}
    fieldsErrors: Array<string>
    messages: Array<string>
    resultCode: number
}
export const initializeTC = () => (dispatch: AppDispatch) => {
    //@ts-ignore
   dispatch(authMeThunkCreator()).then(() => dispatch(setInitAppAC())).catch(err => console.log(err))
}