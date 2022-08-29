import React from 'react';

const Login = () => {
    return (
        <div>
            <h1>Login</h1>
            <LoginForm/>
        </div>
    );
};

export default Login;

const LoginForm = () => {
    return (
        <form>
            <div>
                <input placeholder={'email'}/>
            </div>
            <div>
                <input placeholder={'password'}/>
            </div>
            <div>
                <input type={'checkbox'}/> remember me
            </div>
            <div>
                <button>Login</button>
            </div>
        </form>
    )
}