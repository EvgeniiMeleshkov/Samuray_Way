import React from 'react';
import Header from './Header';
import axios from 'axios';
import {connect} from 'react-redux';
import {Dispatch} from 'redux';
import {AuthDataType, AuthReducerStateType, setAuthDataAC, setAuthDataIsFetchingAC} from '../../redux/authReducer';
import {RootReducerType} from '../../redux/redux_store';

class HeaderContainer extends React.Component<PropsType> {
    componentDidMount() {
        //this.props.setIsFetching(true)

        axios.get(`https://social-network.samuraijs.com/api/1.0/auth/me`, {
            withCredentials: true,
            headers: {
                'API-KEY': '61673f24-31ed-4acb-baab-8f77d72b4514'
            }
        }).then(res => {
            //this.props.setIsFetching(false)
            if(res.data.resultCode === 0) {
                this.props.setAuth(res.data.data)
            }
        })
    }

    render () {
        return (
            <Header login={this.props.login} isAuth={this.props.isAuth} isFetching={this.props.isFetching} />
        )
    }
}
type PropsType = AuthMapStateToPropsType & AuthMapDispatchToPropsType
type AuthMapStateToPropsType = ReturnType<typeof mapStateToProps>
const mapStateToProps = (state: RootReducerType) => ({
    isFetching: state.auth.isFetching,
    isAuth: state.auth.isAuth,
    login: state.auth.login,
})
type AuthMapDispatchToPropsType = ReturnType<typeof mapDispatchToProps>
const mapDispatchToProps = (dispatch: Dispatch) => ({
    setAuth: (data: AuthDataType) => {
        dispatch(setAuthDataAC(data))
    },
    setIsFetching: (isFetching: boolean) => {
        dispatch(setAuthDataIsFetchingAC(isFetching))
    }
})
export default connect(mapStateToProps, mapDispatchToProps)(HeaderContainer)