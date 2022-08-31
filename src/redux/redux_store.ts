import {applyMiddleware, combineReducers, createStore} from 'redux';
import {ProfileActionsType, profileReducer} from './profileReducer';
import {dialogsReducer, DialogsReducerActionsType} from './dialogsReducer';
import {UsersActionsType, usersReducer} from './usersReducer';
import {AuthActionsType, authReducer} from './authReducer';
import thunkMiddleware, { ThunkAction, ThunkDispatch } from 'redux-thunk';
import { reducer as formReducer } from 'redux-form'

export type ActionsType = UsersActionsType | AuthActionsType | DialogsReducerActionsType | ProfileActionsType
export type AppThunk<ReturnType = void> = ThunkAction<ReturnType, RootState, unknown, ActionsType>


export type RootReducerType = ReturnType<typeof rootReducer>

const rootReducer = combineReducers({
    dialogsPage: dialogsReducer,
    profilePage: profileReducer,
    usersPage: usersReducer,
    auth: authReducer,
    form: formReducer
})

export type RootState = ReturnType<typeof store.getState>
export type AppDispatch = ThunkDispatch<RootState, unknown, ActionsType>//typeof store.dispatch

export const store = createStore(rootReducer, applyMiddleware(thunkMiddleware))

//@ts-ignore
window.store = store