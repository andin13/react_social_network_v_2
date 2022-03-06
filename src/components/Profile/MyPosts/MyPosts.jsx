import s from './MyPosts.module.css';
import Post from './Post/Post';
import React from "react";

const MyPosts = (props) => {

    let postElements = props.posts.map(p => <Post message={p.message} likeCount={p.likeCount}/>);

    let newPostElement = React.createRef();

    let addPost = () => {
        if (props.textArea) {
            props.addPost();
        }
    }

    let changeTextArea = () => {
        let text = newPostElement.current.value;
        props.changeTextArea(text);
    }

    let deletePosts = () => {
        props.deletePosts();
    }

    return <div className={s.postBlock}>
        <h3>My posts</h3>
        <div className={s.postCreationBlock}>
            <textarea className={s.postCreation}
                    ref={newPostElement}
                    onChange={changeTextArea} 
                    value={props.textArea}/>
            <div>
                <button onClick={addPost}>Add post</button>
                <button onClick={deletePosts}>Delete all posts</button>
            </div>
        </div>
        <div className={s.posts}>
            {postElements}
        </div>
        <div>{props.textArea}</div>
    </div>
}

export default MyPosts;