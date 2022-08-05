import React from 'react';
import {UsersAPIComponentPropsType} from './UsersContainer';
import axios from 'axios';
import {Users} from './Users';


class UsersAPIComponent extends React.Component<UsersAPIComponentPropsType> {

    componentDidMount() {
        if (this.props.items.length === 0)
        axios.get(`https://social-network.samuraijs.com/api/1.0/users?page=${this.props.currentPage}&count=${this.props.pageSize}`, {headers: {
                'API-KEY': '61673f24-31ed-4acb-baab-8f77d72b4514'
            }}
        ).then(res => {
            this.props.setUsers(res.data.items)
            this.props.setTotalUsersCount(res.data.totalCount)
        }).catch(err=>err)
    }

    onPageChanged = (number: number) => {
        this.props.setCurrentPage(number)
        axios.get(`https://social-network.samuraijs.com/api/1.0/users?page=${number}&count=${this.props.pageSize}`, {headers: {
                'API-KEY': '61673f24-31ed-4acb-baab-8f77d72b4514'
            }}
        ).then(res => this.props.setUsers(res.data.items)).catch(err=>err)
    }

    render = () => {

        return (
            <Users
                currentPage={this.props.currentPage}
                totalUsersCount={this.props.totalUsersCount}
                items={this.props.items}
                pageSize={this.props.pageSize}
                follow={this.props.follow}
                unFollow={this.props.unFollow}
                onPageChanged={this.onPageChanged}
            />
        )
}
}
export default UsersAPIComponent
