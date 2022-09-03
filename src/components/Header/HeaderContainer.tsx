import React from 'react';
import Header from './Header';
import {connect} from 'react-redux';
import {logOutTC} from '../../redux/authReducer';
import {AppDispatch, RootState} from '../../redux/redux_store';
import {compose} from 'redux';

class HeaderContainer extends React.Component<PropsType> {

    render () {
        return (
            <Header
                logOutTC={this.props.logOutTC}
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
    logOutTC: () => {
        dispatch(logOutTC())
    }
})
export default compose(connect(mapStateToProps, mapDispatchToProps)(HeaderContainer))