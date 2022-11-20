import React from "react";
import classes from './MyPosts.module.css';
import Posts from "./Posts/Posts";
import {reduxForm} from "redux-form";
import AddNewPostForm from "./AddNewPostForm";

const MyPostReduxForm = reduxForm({form: 'addNewPost'})(AddNewPostForm)

const MyPosts = ({profilePage, setPost}) => {

    const drawMyPostsData = profilePage.myPostsData.map(post => <Posts message={post.message}
                                                                       LikesCount={post.LikesCount}
                                                                       id={post.id} img={post.img}
                                                                       key={post.id}/>)
    const addPost = (value) => {
        setPost(value.postMessage);
    }
    return (
        <div className={classes.myPosts}>
            <h3>My posts</h3>
            <MyPostReduxForm onSubmit={addPost}/>
            {drawMyPostsData}
        </div>
    )
};

export default MyPosts;