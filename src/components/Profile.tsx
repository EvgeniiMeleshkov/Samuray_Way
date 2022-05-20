import React from "react";

const Profile = () => {
    return (
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
    )
}

export default Profile