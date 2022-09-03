import React from 'react';
import styles from './Profile.module.css'
import Profile from './Profile';
import {connect} from 'react-redux';
import {AppDispatch, RootState} from '../../redux/redux_store';
import {
    getStatusThunkCreator,
    setProfileDataThunkCreator,
    setUserProfileAC, updateStatusThunkCreator,
    UserProfileType
} from '../../redux/profileReducer';
import {Redirect, RouteComponentProps, withRouter} from 'react-router-dom';
import {compose} from 'redux';
import customHoc from '../common/CustomHOC';

type ParamType = {
    userId: string
}
export type ProfileContainerPropsType = RouteComponentProps<ParamType> & OwnPropsType

type OwnPropsType = ProfileMapDispatchToPropsType & ProfileMapStateToPropsType

class ProfileContainer extends React.Component<ProfileContainerPropsType> {

    componentDidMount() {
        let userID = this.props.match.params.userId
        if (!userID) {
            userID = this.props.authorisedUserId
            if(!userID) {
                this.props.history.push('/dialogs')
            }
        }
        this.props.setProfileDataThunkCreator(Number(userID))
        this.props.getStatusThunkCreator(Number(userID))
    }

    render() {

        return (
                <div className={styles.content}>
                    {
                        this.props.isAuth
                        ? <Profile status={this.props.status} updateStatus={this.props.updateStatusThunkCreator} data={this.props.profileData} isFetching={this.props.isFetching}/>
                        : <Redirect to={'/login'}/>
                    }
                     </div>
        )
    }

}

type ProfileMapDispatchToPropsType = ReturnType<typeof mapDispatchToProps>
type ProfileMapStateToPropsType = ReturnType<typeof mapStateToProps>

const mapDispatchToProps = (dispatch: AppDispatch) => ({
    updateStatusThunkCreator: (status: string) => {
      dispatch((updateStatusThunkCreator(status)))
    },
    getStatusThunkCreator: (userID: number) => {
        dispatch((getStatusThunkCreator(userID)))
    },
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
    isAuth: state.auth.isAuth,
    status: state.profilePage.status,
    authorisedUserId: state.auth.id
})


export default compose(customHoc(connect<ProfileMapStateToPropsType,
    ProfileMapDispatchToPropsType, {},
    RootState>(mapStateToProps, mapDispatchToProps)(withRouter(ProfileContainer))))