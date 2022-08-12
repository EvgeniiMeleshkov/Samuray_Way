import React from 'react';
import {Users} from './Users';
import {
    followSuccessThunkCreator, getUsersThunkCreator,
    setCurrentPageAC,
    setTotalUsersCountAC,
    unFollowSuccessThunkCreator,
    UserType
} from '../../redux/usersReducer';
import {RootReducerType, RootState} from '../../redux/redux_store';
import {connect} from 'react-redux';

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

    setCurrentPage: (page: number) => void
    setTotalUsersCount: (count: number) => void

    getUsersThunkCreator: (currentPage: number, pageSize: number) => void
    followSuccessThunkCreator: (userID: number) => void
    unFollowSuccessThunkCreator: (userID: number) => void
}


class UsersContainerComponent extends React.Component<UsersAPIComponentPropsType> {

    componentDidMount() {
       this.props.getUsersThunkCreator(this.props.currentPage, this.props.pageSize)
    }

    onPageChanged = (number: number) => {
        this.props.getUsersThunkCreator(number, this.props.pageSize)

    }

    render = () => {

        return (
            <>
                <Users

                    isFetching={this.props.isFetching}
                    currentPage={this.props.currentPage}
                    totalUsersCount={this.props.totalUsersCount}
                    items={this.props.items}
                    pageSize={this.props.pageSize}
                    followingProgress={this.props.followingProgress}
                    onPageChanged={this.onPageChanged}
                    followSuccessThunkCreator={this.props.followSuccessThunkCreator}
                    unFollowSuccessThunkCreator={this.props.unFollowSuccessThunkCreator}
                />
            </>
        )
    }
}


const mapStateToProps = (state: RootState): MapStatePropsType => {
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
    setCurrentPage: setCurrentPageAC,
    setTotalUsersCount: setTotalUsersCountAC,
    getUsersThunkCreator,
    followSuccessThunkCreator,
    unFollowSuccessThunkCreator
})(UsersContainerComponent)