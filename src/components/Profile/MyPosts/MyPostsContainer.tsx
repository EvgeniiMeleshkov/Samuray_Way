import React from 'react';
import {
    ActionsTypes, addLikeActionCreator,
    addPostActionCreator,
    PostsType,
    updatePostActionCreator
} from '../../../redux/store';
import {MyPosts} from './MyPosts';

type MyPostsContainerPropsType = {
    posts: PostsType
    newPostText: string
    dispatch: (action: ActionsTypes) => void
}

export function MyPostsContainer({posts, newPostText, dispatch}: MyPostsContainerPropsType) {

    const addPost = () => {
        dispatch(addPostActionCreator())
    }
    const onTextChange = (text: string) => {
            dispatch(updatePostActionCreator(text))
    }
    const addLike = (id: number) => {
        dispatch(addLikeActionCreator(id))
    }
    return (
       <MyPosts
           posts={posts}
           newPostText={newPostText}
           addPost={addPost}
           updateNewPostText={onTextChange}
           addLike={addLike}/>
    )
}
