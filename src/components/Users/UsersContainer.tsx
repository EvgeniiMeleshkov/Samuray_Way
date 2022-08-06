import React from 'react';
import {Users} from './Users';
import {
    followAC,
    setCurrentPageAC, setFetchingAC, setToggleFollowingProgressAC,
    setTotalUsersCountAC,
    setUsersAC,
    unFollowAC,
    UserType
} from '../../redux/usersReducer';
import {RootReducerType} from '../../redux/redux_store';
import {connect} from 'react-redux';
import {userApi} from '../DataAccessLayer/DAL';

export type UsersAPIComponentPropsType = MapStatePropsType & MapDispatchPropsType;

type MapStatePropsType = {
    items: UserType[]
    pageSize: number
    totalUsersCount: number
    currentPage: number
    isFetching: boolean
    followingProgress: number[]
}
type MapDispatchPropsType = {
    follow: (id: number) => void
    unFollow: (id: number) => void
    setUsers: (items: UserType[]) => void
    setCurrentPage: (page: number) => void
    setTotalUsersCount: (count: number) => void
    setFetching: (isFetching: boolean) => void
    setToggleFollowing: (isFollowingInProgress: boolean, id: number) => void
}


class UsersContainerComponent extends React.Component<UsersAPIComponentPropsType> {

    componentDidMount() {
        this.props.setFetching(true)
        userApi.getUsers(this.props.currentPage, this.props.pageSize).then(res => {
            this.props.setFetching(false)
            this.props.setUsers(res.items)
            this.props.setTotalUsersCount(res.totalCount)
        }).catch(err => err)
    }

    onPageChanged = (number: number) => {
        this.props.setFetching(true)
        this.props.setCurrentPage(number)
        userApi.getUsers(number, this.props.pageSize).then(res => {
            this.props.setFetching(false)
            this.props.setUsers(res.items)
        }).catch(err => err)
    }

    render = () => {

        return (
            <>
                <Users
                    setToggleFollowing={this.props.setToggleFollowing}
                    isFetching={this.props.isFetching}
                    currentPage={this.props.currentPage}
                    totalUsersCount={this.props.totalUsersCount}
                    items={this.props.items}
                    pageSize={this.props.pageSize}
                    follow={this.props.follow}
                    unFollow={this.props.unFollow}
                    followingProgress={this.props.followingProgress}
                    onPageChanged={this.onPageChanged}
                />
            </>
        )
    }
}


const mapStateToProps = (state: RootReducerType): MapStatePropsType => {
    return {
        items: state.usersPage.items,
        pageSize: state.usersPage.pageSize,
        totalUsersCount: state.usersPage.totalUsersCount,
        currentPage: state.usersPage.currentPage,
        isFetching: state.usersPage.isFetching,
        followingProgress: state.usersPage.followingProgress
    }
}

export const UsersContainer = connect<MapStatePropsType, MapDispatchPropsType, {}, RootReducerType>(mapStateToProps, {
    follow: followAC,
    unFollow: unFollowAC,
    setUsers: setUsersAC,
    setCurrentPage: setCurrentPageAC,
    setTotalUsersCount: setTotalUsersCountAC,
    setFetching: setFetchingAC,
    setToggleFollowing: setToggleFollowingProgressAC
})(UsersContainerComponent)