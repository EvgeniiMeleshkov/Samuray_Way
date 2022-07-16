import {store} from './redux/redux_store';
import ReactDOM from 'react-dom';
import {BrowserRouter} from 'react-router-dom';
import App from './App';
import React from 'react';

export const rerenderEntireTree = () => {
    const state = store.getState()
    const dispatch = store.dispatch.bind(store)
    ReactDOM.render(
        <BrowserRouter>
            <App
                newPostText={state.profilePage.newPostText}
                newMessageText={state.dialogsPage.newMessageText}
                friends={state.dialogsPage.friends}
                posts={state.profilePage.posts}
                messages={state.dialogsPage.messages}
                dispatch={dispatch}
            />
        </BrowserRouter>,
        document.getElementById('root')
    );
}