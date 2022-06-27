import {state, subscribe} from './redux/state';
import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import {StateType} from './redux/state';
import {BrowserRouter} from 'react-router-dom';

export const rerenderEntireTree = (state: StateType) => {
    ReactDOM.render(
        <BrowserRouter>
            <App
                updateNewMessageText={state.updateNewMessageText}
                addMessage={state.addMessage}
                newPostText={state.profilePage.newPostText}
                newMessageText={state.dialogsPage.newMessageText}
                friends={state.dialogsPage.friends}
                posts={state.profilePage.posts}
                messages={state.dialogsPage.messages}
                addPost={state.addPost}
                updateNewPostText={state.updateNewPostText}
            />
        </BrowserRouter>,
        document.getElementById('root')
    );
}


rerenderEntireTree(state)
subscribe(rerenderEntireTree)