import {MyPosts} from './MyPosts';
import {connect} from 'react-redux';
import {Dispatch} from 'redux';
import {RootReducerType} from '../../../redux/redux_store';
import {
    addLikeActionCreator,
    addPostActionCreator,
    ProfilePageStateType
} from '../../../redux/profileReducer';


export type MyPostsPropsType = MapStatePropsType & MapDispatchPropsType

type MapStatePropsType = {
    profilePage: ProfilePageStateType
}

type MapDispatchPropsType = {
    addPost: (newPost: string) => void
    addLike: (id: number) => void
}

const mapStateToProps = (state: RootReducerType): MapStatePropsType => {
    return {
        profilePage: state.profilePage
    }
}

const mapDispatchToProps = (dispatch: Dispatch): MapDispatchPropsType => {
    return {
        addPost: (newPost: string) => {
            dispatch(addPostActionCreator(newPost))
        },
        addLike: (id: number) => {
            dispatch(addLikeActionCreator(id))
        }
    }
}

export const MyPostsContainer = connect(mapStateToProps, mapDispatchToProps)(MyPosts)