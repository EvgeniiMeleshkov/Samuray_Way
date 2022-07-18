import React, {ReactNode} from 'react';
import {
    addLikeActionCreator,
    addPostActionCreator,
    ProfilePageType, StateType,
    updatePostActionCreator
} from '../../../redux/store';
import {MyPosts} from './MyPosts';
import {connect} from 'react-redux';
import {Dispatch} from 'redux';


export type MyPostsPropsType = MapStatePropsType & MapDispatchPropsType

type MapStatePropsType = {
    profilePage: ProfilePageType
}

type MapDispatchPropsType = {
    addPost: () => void
    onTextChange: (text: string) => void
    addLike: (id: number) => void
}

const mapStateToProps = (state: StateType): MapStatePropsType => {
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



export const MyPostsContainer: any = connect(mapStateToProps, mapDispatchToProps)(MyPosts)