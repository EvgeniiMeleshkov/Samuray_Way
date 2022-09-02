import React from 'react';
import styles from './MyPosts.module.css'
import Post from './Post/Post';
import {MyPostsPropsType} from './MyPostsContainer';
import {Field, InjectedFormProps, reduxForm} from 'redux-form';
import {maxLength, requiredField} from '../../../utilites/validators/validators';
import {Textarea} from '../../common/formsControls/Textarea';

export function MyPosts({
                            profilePage,
                            addPost,
                            addLike
                        }: MyPostsPropsType) {
//---------------------------------------------------------------------------
//---------------------------------------------------------------------------

    const onSubmit = (formData: NewPostFormDataType) => {
        formData.newPost &&
        addPost(formData.newPost)
        formData.newPost = null
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
    newPost: string | null
}
const max50 = maxLength(50)
const NewPostForm: React.FC<InjectedFormProps<NewPostFormDataType>> = (props) => {


    return (
        <form onSubmit={props.handleSubmit} className={styles.addPostBody}>
            <div className={styles.tAreaBody}>
                <Field validate={[requiredField, max50]}
                       component={Textarea}
                       placeholder={'My new post'}
                       name="newPost"
                       >
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