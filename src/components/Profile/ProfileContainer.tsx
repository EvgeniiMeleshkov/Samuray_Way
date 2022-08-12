import React from 'react';
import styles from './Profile.module.css'
import Profile from './Profile';
import {connect} from 'react-redux';
import {AppDispatch, RootState} from '../../redux/redux_store';
import {
    setProfileDataThunkCreator,
    setUserProfileAC,
    UserProfileType
} from '../../redux/profileReducer';
import { RouteComponentProps, withRouter} from 'react-router-dom';

type ParamType = {
    userId: string
}
export type ProfileContainerPropsType = RouteComponentProps<ParamType> & OwnPropsType

type OwnPropsType = ProfileMapDispatchToPropsType & ProfileMapStateToPropsType

class ProfileContainer extends React.Component<ProfileContainerPropsType> {

    componentDidMount() {
        let userID = this.props.match.params.userId
        this.props.setProfileDataThunkCreator(Number(userID))
    }

    render() {
        return (
                <div className={styles.content}>
                    <Profile data={this.props.profileData} {...this.props}/>
                </div>
        )
    }

}

type ProfileMapDispatchToPropsType = ReturnType<typeof mapDispatchToProps>
type ProfileMapStateToPropsType = ReturnType<typeof mapStateToProps>

const mapDispatchToProps = (dispatch: AppDispatch) => ({
    setProfileDataThunkCreator: (userID: number) => {
        dispatch(setProfileDataThunkCreator(userID))
    },
    setUserProfileData: (data: UserProfileType) => {
        dispatch(setUserProfileAC(data))
    }
})
const mapStateToProps = (state: RootState) => ({
    profileData: state.profilePage.profileData,
    isFetching: state.profilePage.isFetching,
    isAuth: state.auth.isAuth
})


export default connect<ProfileMapStateToPropsType,
    ProfileMapDispatchToPropsType, {},
    RootState>(mapStateToProps, mapDispatchToProps)(withRouter(ProfileContainer))