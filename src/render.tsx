import {store} from './redux/state';
import ReactDOM from 'react-dom';
import {BrowserRouter} from 'react-router-dom';
import App from './App';
import React from 'react';

export const rerenderEntireTree = () => {
    const state = store.getState()
    ReactDOM.render(
        <BrowserRouter>
            <App
                updateNewMessageText={store.updateNewMessageText.bind(store)}
                addMessage={store.addMessage.bind(store)}
                newPostText={state.profilePage.newPostText}
                newMessageText={state.dialogsPage.newMessageText}
                friends={state.dialogsPage.friends}
                posts={state.profilePage.posts}
                messages={state.dialogsPage.messages}
                addPost={store.addPost.bind(store)}
                updateNewPostText={store.updateNewPostText.bind(store)}
            />
        </BrowserRouter>,
        document.getElementById('root')
    );
}