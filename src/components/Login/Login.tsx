import React from 'react';
import {Field, InjectedFormProps, reduxForm} from 'redux-form';

const Login = () => {
    const onSubmit = (formData: FormDataType) => {
        console.log(formData)
    }
    return (
        <div>
            <h1>Login</h1>
            <LoginForm onSubmit={onSubmit}/>
        </div>
    );
};

export default Login;


type FormDataType ={
    email: string
    password: string
    rememberMe: boolean
}
const LoginF: React.FC<InjectedFormProps<FormDataType>> = (props) => {
    return (
        <form onSubmit={props.handleSubmit}>
            <div>
                <Field name={'email'} component={'input'} placeholder={'email'}/>
            </div>
            <div>
                <Field name={'password'} component={'input'} placeholder={'password'}/>
            </div>
            <div>
                <Field name={'remember me'} component={'input'} type={'checkbox'}/> remember me
            </div>
            <div>
                <button>Login</button>
            </div>
        </form>
    )
}
const LoginForm = reduxForm<FormDataType>({
    form: 'login'
})(LoginF)