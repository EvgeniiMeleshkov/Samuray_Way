import React from 'react';
import './App.css';
import Header from './components/Header/Header';
import Profile from './components/Profile/Profile';
import {Sidebar} from './components/Sidebar/Sidebar';
import {Route, Routes} from 'react-router-dom';
import {DialogsContainer} from './components/Dialogs/DialogsContainer';

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
