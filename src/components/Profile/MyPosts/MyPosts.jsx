import s from './MyPosts.module.css';
import Post from './Post/Post';
import React from "react";
import PostForm from "./PostForm/PostForm";

const MyPosts = (props) => {

    const postElements = props.posts.map(p => <Post message={p.message} likeCount={p.likeCount}/>);

    return <div className={s.postBlock}>
        <h3>My posts</h3>
        <PostForm addPost={props.addPost} deletePosts={props.deletePosts}/>
        <button onClick={props.deletePosts}>Delete all posts</button>
        <div className={s.posts}>
            {postElements}
        </div>
    </div>
}

export default MyPosts;