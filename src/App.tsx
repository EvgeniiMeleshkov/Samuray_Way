import React from 'react';
import './App.css';
import Header from './components/Header/Header';
import Profile from './components/Profile/Profile';
import {BrowserRouter, Route} from 'react-router-dom';
import Dialogs from './components/Dialogs/Dialogs';
import {FriendsType, MessagesType, PostsType} from './redux/state';
import {Sidebar} from './components/Sidebar/Sidebar';

type AppPropsType = {
    friends: FriendsType
    posts: PostsType
    messages: MessagesType
    addPost: (postMessage: string)=>void
    addMessage : (newMessageText: string) => void
    newPostText: string
    newMessageText: string
    updateNewPostText: (newText: string) => void
    updateNewMessageText : (newText: string) => void
}
function App({friends, posts, messages, addPost,
                 newMessageText, newPostText, updateNewPostText,
                 updateNewMessageText, addMessage}: AppPropsType) {
    return (
        <BrowserRouter>
            <div className="app-wrapper">
                <Header/>
                <Sidebar/>

                <div className={'app-wrapper-content'}>
                    <Route path={'/profile'} render={()=><Profile updateNewPostText={updateNewPostText}
                                                                  newPostText={newPostText}
                                                                  addPost={addPost}
                                                                  posts={posts}/>}/>
                    <Route path={'/dialogs'} render={()=><Dialogs updateNewMessageText={updateNewMessageText}
                                                                  newMessageText={newMessageText}
                                                                  messages={messages}
                                                                  addMessage={addMessage}
                                                                  friends={friends}/>}/>
                </div>
            </div>
        </BrowserRouter>
    );
}
export default App;
