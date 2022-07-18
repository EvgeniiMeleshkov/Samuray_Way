import React from 'react';
import {
    ActionsTypes, addLikeActionCreator,
    addPostActionCreator,
    PostsType,
    updatePostActionCreator
} from '../../../redux/store';
import {StoreContext} from '../../../StoreContext';
import {MyPosts} from './MyPosts';
import {store} from '../../../redux/redux_store';

type MyPostsContainerPropsType = {
    posts: PostsType
    newPostText: string
    dispatch: (action: ActionsTypes) => void
}

export function MyPostsContainer() {
    return (
        <>
            <StoreContext.Consumer>
                {(store) => {
                    const state = store.getState()

                    const addPost = () => {
                        store.dispatch(addPostActionCreator())
                    }
                    const onTextChange = (text: string) => {
                        store.dispatch(updatePostActionCreator(text))
                    }
                    const addLike = (id: number) => {
                        store.dispatch(addLikeActionCreator(id))
                    }

                    return (<MyPosts
                        posts={state.profilePage.posts}
                        newPostText={state.profilePage.newPostText}
                        addPost={addPost}
                        updateNewPostText={onTextChange}
                        addLike={addLike}/>)
                }
                }
            </StoreContext.Consumer>
        </>
    )
}
