import {
    addLikeActionCreator,
    addPostActionCreator,
    ProfilePageType,
    updatePostActionCreator
} from '../../../redux/store';
import {MyPosts} from './MyPosts';
import {connect} from 'react-redux';
import {Dispatch} from 'redux';
import {RootReducerType} from '../../../redux/redux_store';


export type MyPostsPropsType = MapStatePropsType & MapDispatchPropsType

type MapStatePropsType = {
    profilePage: ProfilePageType
}

type MapDispatchPropsType = {
    addPost: () => void
    onTextChange: (text: string) => void
    addLike: (id: number) => void
}

const mapStateToProps = (state: RootReducerType): MapStatePropsType => {
    return {
        profilePage: state.profilePage
    }
}

const mapDispatchToProps = (dispatch: Dispatch): MapDispatchPropsType => {
    return {
        addPost: () => {
            dispatch(addPostActionCreator())
        },
        onTextChange: (text: string) => {
            dispatch(updatePostActionCreator(text))
        },
        addLike: (id: number) => {
            dispatch(addLikeActionCreator(id))
        }
    }
}

                        //Fix 'any' !!!
export const MyPostsContainer: any = connect(mapStateToProps, mapDispatchToProps)(MyPosts)