import React from 'react';
import Header from './Header';
import {connect} from 'react-redux';
import {authMeThunkCreator} from '../../redux/authReducer';
import {AppDispatch, RootState} from '../../redux/redux_store';

class HeaderContainer extends React.Component<PropsType> {
    componentDidMount() {
        this.props.authMeThunkCreator()
    }

    render () {
        return (
            <Header
                login={this.props.login}
                isAuth={this.props.isAuth}
            />
        )
    }
}
type PropsType = AuthMapStateToPropsType & AuthMapDispatchToPropsType
type AuthMapStateToPropsType = ReturnType<typeof mapStateToProps>
const mapStateToProps = (state: RootState) => ({
    isAuth: state.auth.isAuth,
    login: state.auth.login,
})
type AuthMapDispatchToPropsType = ReturnType<typeof mapDispatchToProps>
const mapDispatchToProps = (dispatch: AppDispatch) => ({
    authMeThunkCreator: () => {
        dispatch(authMeThunkCreator())
    }
})
export default connect(mapStateToProps, mapDispatchToProps)(HeaderContainer)