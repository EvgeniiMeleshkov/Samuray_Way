import React from 'react';
import {reduxForm} from 'redux-form';

const Login = () => {
    return (
        <div>
            <h1>Login</h1>
            <LoginForm/>
        </div>
    );
};

export default Login;

const LoginF = () => {
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
const LoginForm = reduxForm({
    form: 'login'
})(LoginF)