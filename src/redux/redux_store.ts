import {combineReducers, createStore} from 'redux';
import {profileReducer} from './profileReducer';
import {dialogsReducer} from './dialogsReducer';




const reducers = combineReducers({
    dialogsPage: dialogsReducer,
    profilePage: profileReducer
})


export const store = createStore(reducers)