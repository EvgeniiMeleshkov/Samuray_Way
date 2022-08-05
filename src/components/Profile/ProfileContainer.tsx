import React from 'react';
import styles from './Profile.module.css'
import Profile from './Profile';
import axios from 'axios';
import {connect} from 'react-redux';
import {RootReducerType} from '../../redux/redux_store';
import {Dispatch} from 'redux';
import {setIsFetchingAC, setUserProfileAC, UserProfileType} from '../../redux/profileReducer';
import {RouteComponentProps, withRouter} from 'react-router-dom';

type ParamType = {
    userId: string
}
export type ProfileContainerPropsType = RouteComponentProps<ParamType> & OwnPropsType

type OwnPropsType = ProfileMapDispatchToPropsType & ProfileMapStateToPropsType

class ProfileContainer extends React.Component<ProfileContainerPropsType> {

    componentDidMount() {
        let userID = this.props.match.params.userId
        this.props.setIsFetching(true)
        if(!this.props.match.params.userId) {
            userID = '7402'
        }
        axios.get(`https://social-network.samuraijs.com/api/1.0/profile/${userID}`, {
            headers: {
                'API-KEY': '61673f24-31ed-4acb-baab-8f77d72b4514'
            }
        }).then(res => {
            this.props.setIsFetching(false)
            this.props.setUserProfileData(res.data)
            console.log(res.data)
        })
    }

    render () {
        return (
            <div className={styles.content}>
                <Profile data={this.props.profileData} {...this.props}/>
            </div>
        )
    }

}

type ProfileMapDispatchToPropsType = ReturnType<typeof mapDispatchToProps>
type ProfileMapStateToPropsType = ReturnType<typeof mapStateToProps>

const mapDispatchToProps = (dispatch: Dispatch) => ({
    setIsFetching: (isFetching: boolean) => {
        dispatch(setIsFetchingAC(isFetching))
    },
    setUserProfileData: (data: UserProfileType) => {
        dispatch(setUserProfileAC(data))
    }
})
const mapStateToProps = (state: RootReducerType) => ({
    profileData: state.profilePage.profileData,
    isFetching: state.profilePage.isFetching
})

export default connect<ProfileMapStateToPropsType,
    ProfileMapDispatchToPropsType, {},
    RootReducerType>(mapStateToProps, mapDispatchToProps)(withRouter(ProfileContainer))