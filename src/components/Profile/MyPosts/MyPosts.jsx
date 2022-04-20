import s from './MyPosts.module.css';
import Post from './Post/Post';
import React from "react";
import { useDispatch, useSelector } from 'react-redux';
import { addPost, deletePosts } from '../../../Redux/profile-reducer';
import PostForm from "./PostForm/PostForm";

const MyPosts = () => {

    const posts = useSelector(state => state.profilePage.posts);
    const dispatch = useDispatch();
    const addPostFn = () => dispatch(addPost());
    const deletePostsFn = () => dispatch(deletePosts());

    const postElements = posts.map(p => <Post message={p.message} likeCount={p.likeCount}/>);

    return <div className={s.postBlock}>
        <h3>My posts</h3>
        <PostForm addPost={addPostFn} deletePosts={deletePostsFn}/>
        <button onClick={deletePostsFn}>Delete all posts</button>
        <div className={s.posts}>
            {postElements}
        </div>
    </div>
}

export default MyPosts;