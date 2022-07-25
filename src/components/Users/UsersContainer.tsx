import {followAC, setUsersAC, unFollowAC, UserType} from '../../redux/usersReducer';
import {RootReducerType} from '../../redux/redux_store';
import {Dispatch} from 'redux';
import {connect} from 'react-redux';
import Users from './Users';

export type UsersPropsType = MapStatePropsType & MapDispatchPropsType;

type MapStatePropsType = {
    items: UserType[]
}
type MapDispatchPropsType = {
    follow: (id:number)=>void
    unFollow: (id:number)=>void
    setUsers: (items:UserType[])=>void
}


const mapStateToProps = (state: RootReducerType): MapStatePropsType => {
    return {
        items: state.usersPage.items
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
        }
    }
}

export const UsersContainer: any = connect(mapStateToProps, mapDispatchToProps)(Users)