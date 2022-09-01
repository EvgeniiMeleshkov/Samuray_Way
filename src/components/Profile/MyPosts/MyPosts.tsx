import React from 'react';
import styles from './MyPosts.module.css'
import Post from './Post/Post';
import {MyPostsPropsType} from './MyPostsContainer';
import {Field, InjectedFormProps, reduxForm} from 'redux-form';

export function MyPosts({
                            profilePage,
                            addPost,
                            addLike
                        }: MyPostsPropsType) {
//---------------------------------------------------------------------------
//---------------------------------------------------------------------------

    const onSubmit = (formData: NewPostFormDataType) => {
        addPost(formData.newPost)
        formData.newPost = ''
    }
    // const onTextChangeHandler = () => {
    //     if (postTextRef.current) {
    //         let text = postTextRef.current.value
    //         onTextChange(text)
    //     }
    // }
    // const onEnterPressed = (e: KeyboardEvent<HTMLTextAreaElement>) => {
    //     if (postTextRef.current)
    //         e.key === 'Enter' &&
    //         postTextRef.current.value.match(/\w/) &&
    //         addPost()
    // }
    const addLikeHandler = (id: number) => {
        addLike(id)
    }
    return (
        <div>
            <NewPostReduxForm onSubmit={onSubmit}/>
            <div className={styles.posts}>
                <Post userPhoto={profilePage.profileData?.photos?.small} addLike={addLikeHandler}
                      posts={profilePage.posts}/>
            </div>
        </div>
    )
}


type NewPostFormDataType = {
    newPost: string
}

const NewPostForm: React.FC<InjectedFormProps<NewPostFormDataType>> = (props) => {
    // const text = store.getState().dialogsPage.newMessageText
    return (
        <form onSubmit={props.handleSubmit} className={styles.addPostBody}>
            <div className={styles.tAreaBody}>
                <Field component='textarea' name='newPost'
                    className={styles.textArea}>
                </Field>
            </div>
            <div>
                {/*{profilePage.newPostText !== '' && profilePage.newPostText.match(/\w/)*/}
                 <button className={styles.addPostButton}>Add post</button>
                 {/*<button disabled={true}>write your post here...</button>*/}

            </div>
        </form>
    )
}

const NewPostReduxForm = reduxForm<NewPostFormDataType>({
    form: 'postForm'
})(NewPostForm)