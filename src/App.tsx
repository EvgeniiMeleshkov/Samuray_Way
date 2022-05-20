import React from 'react';
import './App.css';

function App() {
    return (
        <div className="app-wrapper">
            <header className={'header'}>
                <img className={'img'}
                     src={'https://images.fineartamerica.com/images/artworkimages/medium/3/programmer-coding-samurai-japan-debugging-funny-lisa-stronzi-transparent.png'}/>
            </header>
            <nav className={'nav'}>
                <div>Profile</div>
                <div>Messages</div>
                <div>Users</div>
                <div>Music</div>
                <div>Settings</div>
            </nav>
            <div className={'content'}>
                <div>
                    <img className={'content-img'}
                         src={'https://www.textillia.com/sites/default/files/styles/large/public/img/2022/01/14/1Samurai%20LogoV1pattern.jpg?itok=I2y422PV'}/>
                </div>
                <div>ava + description</div>
                <div>
                    My Posts
                    <div>
                        New Post
                    </div>
                    <div>
                        Post 1: Hey, Samurai!
                    </div>
                    <div>
                        Post 2: It-incubator
                    </div>

                </div>
            </div>

        </div>
    );
}

export default App;
