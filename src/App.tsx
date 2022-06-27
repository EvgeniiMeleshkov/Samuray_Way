import React from 'react';
import './App.css';
import Header from './components/Header/Header';
import Profile from './components/Profile/Profile';
import Dialogs from './components/Dialogs/Dialogs';
import {FriendsType, MessagesType, PostsType} from './redux/state';
import {Sidebar} from './components/Sidebar/Sidebar';
import {Route, Routes} from 'react-router-dom';

type AppPropsType = {
    friends: FriendsType
    posts: PostsType
    messages: MessagesType
    addPost: () => void
    addMessage: () => void
    newPostText: string
    newMessageText: string
    updateNewPostText: (newText: string) => void
    updateNewMessageText: (newText: string) => void
}

function App({
                 friends, posts, messages, addPost,
                 newMessageText, newPostText, updateNewPostText,
                 updateNewMessageText, addMessage
             }: AppPropsType) {
    return (
            <div className="app-wrapper">
                <Header/>
                <Sidebar/>

                <div className={'app-wrapper-content'}>
                    <Routes>
                        <Route path={'/profile/'} element={<Profile updateNewPostText={updateNewPostText}
                                                                   newPostText={newPostText}
                                                                   addPost={addPost}
                                                                   posts={posts}/>}/>
                        <Route path={'/dialogs/*'} element={<Dialogs updateNewMessageText={updateNewMessageText}
                                                                   newMessageText={newMessageText}
                                                                   messages={messages}
                                                                   addMessage={addMessage}
                                                                   friends={friends}/>}/>
                    </Routes>
                </div>
            </div>
    );
}

export default App;
