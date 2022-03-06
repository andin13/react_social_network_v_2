import React from "react";
import {
    addPostActionCreator,
    changeTextAreaActionCreator,
    deletePostsActionCreator
} from "../../../Redux/profileReducer";
import MyPosts from "./MyPosts";
import connect from "react-redux/lib/connect/connect";

let mapStateToProps = (state) => {
    return {
        textArea: state.profilePage.textArea,
        posts: state.profilePage.posts
    }
}

let mapDispatchToProps = (dispatch) => {
    return {
        addPost: () => {
            dispatch(addPostActionCreator());
        },
        changeTextArea: (text) => {
            dispatch(changeTextAreaActionCreator(text));
        },
        deletePosts: () => {
            dispatch(deletePostsActionCreator());
        }
    }
}

const MyPostsContainer = connect(mapStateToProps, mapDispatchToProps)(MyPosts);

export default MyPostsContainer;