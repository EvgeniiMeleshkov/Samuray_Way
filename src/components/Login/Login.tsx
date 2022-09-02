import React from 'react';
import {Field, InjectedFormProps, reduxForm} from 'redux-form';
import {requiredField} from '../../utilites/validators/validators';
import {Input} from '../common/formsControls/Textarea';

const Login = () => {
    const onSubmit = (formData: FormDataType) => {
        console.log(formData)
    }
    return (
        <div style={{display: 'flex', flexDirection: 'column', alignItems: 'center'}}>
            <h1>Login</h1>
            <LoginForm onSubmit={onSubmit}/>
        </div>
    );
};

export default Login;


type FormDataType = {
    email: string
    password: string
    rememberMe: boolean
}
const LoginF: React.FC<InjectedFormProps<FormDataType>> = (props) => {
    return (
        <form style={{display: 'flex',
            flexDirection: 'column',
            justifyContent: 'space-between',
            height: '200px',
            alignItems: 'center'
        }} onSubmit={props.handleSubmit}>

            <div>
                <Field validate={[requiredField]} name={'email'} component={Input} placeholder={'email'}/>
            </div>
            <div>
                <Field validate={[requiredField]} name={'password'} component={Input} placeholder={'password'}/>
            </div>


            <div>
                <Field name={'remember me'} component={'Input'} type={'checkbox'}/> remember me
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