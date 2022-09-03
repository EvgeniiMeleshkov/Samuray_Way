import React from 'react';
import {Field, InjectedFormProps, reduxForm} from 'redux-form';
import {requiredField} from '../../utilites/validators/validators';
import {Input} from '../common/formsControls/Textarea';
import {connect} from 'react-redux';
import {loginTC} from '../../redux/authReducer';
import {AppDispatch, RootState} from '../../redux/redux_store';
import {compose} from 'redux';
import {Redirect} from 'react-router-dom';


type LoginType = MapDispatchToPropsType & MapStateToPropsType
type MapDispatchToPropsType = ReturnType<typeof mapDispatchToProps>
type MapStateToPropsType = ReturnType<typeof mapStateToProps>
const mapStateToProps = (state: RootState) => ({
    isAuth: state.auth.isAuth
})
const mapDispatchToProps = (dispatch: AppDispatch) => ({
    login: (email: string, password: string, rememberMe: boolean) => {
        dispatch(loginTC(email, password, rememberMe))
    }
})

const Login = (props: LoginType) => {
    const onSubmit = (formData: FormDataType) => {
        props.login(formData.email, formData.password, formData.rememberMe)
    }

    return (
        <div style={{display: 'flex', flexDirection: 'column', alignItems: 'center'}}>
            {!props.isAuth
               ? <div>
                    <h1>Login</h1>
                    <LoginForm onSubmit={onSubmit}/>
                </div>
                : <Redirect to={'/profile'}/>
            }
        </div>
    );

};

export default compose(connect(mapStateToProps, mapDispatchToProps)(Login));


type FormDataType = {
    email: string
    password: string
    rememberMe: boolean
}
const LoginF: React.FC<InjectedFormProps<FormDataType>> = (props) => {
    return (
        <form style={{
            display: 'flex',
            flexDirection: 'column',
            justifyContent: 'space-between',
            height: '200px',
            alignItems: 'center'
        }} onSubmit={props.handleSubmit}>

            <div>
                <Field validate={[requiredField]} name={'email'} component={Input} placeholder={'email'}/>
            </div>
            <div>
                <Field type={'password'} validate={[requiredField]} name={'password'} component={Input}
                       placeholder={'password'}/>
            </div>


            <div>
                <Field name={'rememberMe'} component={'input'} type={'checkbox'}/> remember me
            </div>
            {props.error && <div style={{backgroundColor: 'crimson',
                borderRadius: '10px',
                color: 'snow',
                padding: '2px',
                fontFamily: 'monospace',
                border: '1px solid red',
                boxShadow: '1px 3px 2px darkred'
            }}>
                {props.error}
            </div>}
            <div>
                <button>Login</button>
            </div>

        </form>
    )
}
const LoginForm = reduxForm<FormDataType>({
    form: 'login'
})(LoginF)