import React from "react";
import {
    addPost,
    deletePosts
} from "../../../Redux/profileReducer";
import MyPosts from "./MyPosts";
import connect from "react-redux/lib/connect/connect";

let mapStateToProps = (state) => {
    return {
        posts: state.profilePage.posts
    }
}

const MyPostsContainer = connect(mapStateToProps, {addPost, deletePosts})(MyPosts);

export default MyPostsContainer;