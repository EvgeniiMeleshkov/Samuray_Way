import React from 'react';
import './App.css';
import Header from './components/Header/Header';
import Profile from './components/Profile/Profile';
import Dialogs from './components/Dialogs/Dialogs';
import {ActionsTypes, FriendsType, MessagesType, PostsType} from './redux/store';
import {Sidebar} from './components/Sidebar/Sidebar';
import {Route, Routes} from 'react-router-dom';
import {DialogsContainer} from './components/Dialogs/DialogsContainer';

type AppPropsType = {
    friends: FriendsType
    posts: PostsType
    messages: MessagesType
    newPostText: string
    newMessageText: string
    dispatch: (action: ActionsTypes) => void
}

function App() {
    return (
        <div className="app-wrapper">
            <Header/>
            <Sidebar/>

            <div className={'app-wrapper-content'}>
                <Routes>
                    <Route path={'/profile/'} element={<Profile/>}/>
                    <Route path={'/dialogs/*'} element={<DialogsContainer/>}/>
                </Routes>
            </div>
        </div>
    );
}

export default App;
