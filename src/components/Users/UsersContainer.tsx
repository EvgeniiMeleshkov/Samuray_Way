import {followAC, setUsersAC, unFollowAC, UserType} from '../../redux/usersReducer';
import {RootReducerType} from '../../redux/redux_store';
import {Dispatch} from 'redux';
import {connect} from 'react-redux';
import {Users} from './Users';

export type UsersPropsType = MapStatePropsType & MapDispatchPropsType;

type MapStatePropsType = {
    users: UserType[]
}
type MapDispatchPropsType = {
    follow: (id:string)=>void
    unFollow: (id:string)=>void
    setUsers: (users:UserType[])=>void
}


const mapStateToProps = (state: RootReducerType): MapStatePropsType => {
    return {
        users: state.usersPage.users
    }
}
const mapDispatchToProps = (dispatch: Dispatch): MapDispatchPropsType => {
    return {
        follow: (id: string) => {
            dispatch(followAC(id))
        },
        unFollow: (id: string) => {
            dispatch(unFollowAC(id))
        },
        setUsers: (users: UserType[]) => {
            dispatch(setUsersAC(users))
        }
    }
}

export const UsersContainer: any = connect(mapStateToProps, mapDispatchToProps)(Users)