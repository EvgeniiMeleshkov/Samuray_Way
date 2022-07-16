import React from 'react';
import './App.css';
import Header from './components/Header/Header';
import Profile from './components/Profile/Profile';
import Dialogs from './components/Dialogs/Dialogs';
import {ActionsTypes, FriendsType, MessagesType, PostsType} from './redux/store';
import {Sidebar} from './components/Sidebar/Sidebar';
import {Route, Routes} from 'react-router-dom';

type AppPropsType = {
    friends: FriendsType
    posts: PostsType
    messages: MessagesType
    newPostText: string
    newMessageText: string
    dispatch: (action: ActionsTypes) => void
}

function App({
                 friends, posts, messages,
                 newMessageText, newPostText,
                 dispatch
             }: AppPropsType) {
    return (
        <div className="app-wrapper">
            <Header/>
            <Sidebar/>

            <div className={'app-wrapper-content'}>
                <Routes>
                    <Route path={'/profile/'} element={<Profile newPostText={newPostText}
                                                                posts={posts}
                                                                dispatch={dispatch}/>}/>
                    <Route path={'/dialogs/*'} element={<Dialogs dispatch={dispatch}
                                                                 newMessageText={newMessageText}
                                                                 messages={messages}
                                                                 friends={friends}/>}/>
                </Routes>
            </div>
        </div>
    );
}

export default App;
