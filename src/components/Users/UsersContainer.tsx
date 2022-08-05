import React from 'react';
import axios from 'axios';
import {Users} from './Users';
import {
    followAC,
    setCurrentPageAC, setFetchingAC,
    setTotalUsersCountAC,
    setUsersAC,
    unFollowAC,
    UserType
} from '../../redux/usersReducer';
import {RootReducerType} from '../../redux/redux_store';
import {Dispatch} from 'redux';
import {connect} from 'react-redux';

export type UsersAPIComponentPropsType = MapStatePropsType & MapDispatchPropsType;

type MapStatePropsType = {
    items: UserType[]
    pageSize: number
    totalUsersCount: number
    currentPage: number
    isFetching: boolean
}
type MapDispatchPropsType = {
    follow: (id: number) => void
    unFollow: (id: number) => void
    setUsers: (items: UserType[]) => void
    setCurrentPage: (page: number) => void
    setTotalUsersCount: (count: number) => void
    setFetching: (isFetching: boolean) => void
}


class UsersContainerComponent extends React.Component<UsersAPIComponentPropsType> {

    componentDidMount() {
        this.props.setFetching(true)
        axios.get(`https://social-network.samuraijs.com/api/1.0/users?page=${this.props.currentPage}&count=${this.props.pageSize}`, {
                headers: {
                    'API-KEY': '61673f24-31ed-4acb-baab-8f77d72b4514'
                }
            }
        ).then(res => {
            this.props.setFetching(false)
            this.props.setUsers(res.data.items)
            this.props.setTotalUsersCount(res.data.totalCount)
        }).catch(err => err)
    }

    onPageChanged = (number: number) => {
        this.props.setFetching(true)
        this.props.setCurrentPage(number)
        axios.get(`https://social-network.samuraijs.com/api/1.0/users?page=${number}&count=${this.props.pageSize}`, {
                headers: {
                    'API-KEY': '61673f24-31ed-4acb-baab-8f77d72b4514'
                }
            }
        ).then(res => {
            this.props.setFetching(false)
            this.props.setUsers(res.data.items)
        }).catch(err => err)
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
                    follow={this.props.follow}
                    unFollow={this.props.unFollow}
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
        isFetching: state.usersPage.isFetching
    }
}

export const UsersContainer: any = connect(mapStateToProps, {
    follow: followAC,
    unFollow: unFollowAC,
    setUsers: setUsersAC,
    setCurrentPage: setCurrentPageAC,
    setTotalUsersCount: setTotalUsersCountAC,
    setFetching: setFetchingAC
})(UsersContainerComponent)