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
}
function App({friends, posts, messages}: AppPropsType) {
    return (
        <BrowserRouter>
            <div className="app-wrapper">
                <Header/>
                <Sidebar/>

                <div className={'app-wrapper-content'}>
                    <Route path={'/profile'} render={()=><Profile posts={posts}/>}/>
                    <Route path={'/dialogs'} render={()=><Dialogs messages={messages} friends={friends}/>}/>
                </div>
            </div>
        </BrowserRouter>
    );
}
export default App;
