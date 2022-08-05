import {
    followAC,
    setCurrentPageAC,
    setTotalUsersCountAC,
    setUsersAC,
    unFollowAC,
    UserType
} from '../../redux/usersReducer';
import {RootReducerType} from '../../redux/redux_store';
import {Dispatch} from 'redux';
import {connect} from 'react-redux';
import UsersAPIComponent from './UsersAPIComponent';

export type UsersAPIComponentPropsType = MapStatePropsType & MapDispatchPropsType;

type MapStatePropsType = {
    items: UserType[]
    pageSize: number
    totalUsersCount: number
    currentPage: number
}
type MapDispatchPropsType = {
    follow: (id:number)=>void
    unFollow: (id:number)=>void
    setUsers: (items:UserType[])=>void
    setCurrentPage: (page: number)=>void
    setTotalUsersCount: (count: number)=>void
}


const mapStateToProps = (state: RootReducerType): MapStatePropsType => {
    return {
        items: state.usersPage.items,
        pageSize: state.usersPage.pageSize,
        totalUsersCount: state.usersPage.totalUsersCount,
        currentPage: state.usersPage.currentPage
    }
}
const mapDispatchToProps = (dispatch: Dispatch): MapDispatchPropsType => {
    return {
        follow: (id: number) => {
            dispatch(followAC(id))
        },
        unFollow: (id: number) => {
            dispatch(unFollowAC(id))
        },
        setUsers: (items: UserType[]) => {
            dispatch(setUsersAC(items))
        },
        setCurrentPage: (page: number) => {
            dispatch(setCurrentPageAC(page))
        },
        setTotalUsersCount: (count: number) => {
            dispatch(setTotalUsersCountAC(count))
        }
    }
}

export const UsersContainer: any = connect(mapStateToProps, mapDispatchToProps)(UsersAPIComponent)