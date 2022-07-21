import {followAC, unFollowAC, UserType} from '../../redux/usersReducer';
import {RootReducerType} from '../../redux/redux_store';
import {Dispatch} from 'redux';
import {connect} from 'react-redux';
import {Users} from './Users';

export type UsersPropsType = MapStatePropsType & MapDispatchPropsType

type MapStatePropsType = {
    users: UserType[]
}

type MapDispatchPropsType = {
    follow: (id:string)=>void
    unFollow: (id:string)=>void
}


const mapStateToProps = (state: RootReducerType) => {
    return {
        users: state.usersPage
    }
}
const mapDispatchToProps = (dispatch: Dispatch) => {
    return {
        follow: (id: string) => {
            dispatch(followAC(id))
        },
        unFollow: (id: string) => {
            dispatch(unFollowAC(id))
        }
    }
}

export const UsersContainer: any = connect(mapStateToProps, mapDispatchToProps)(Users)