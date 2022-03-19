import {profileAPI} from "../api/api";

const ADD_POST = 'ADD_POST';
const DELETE_POSTS = 'DELETE_POSTS';
const SET_USER_PROFILE = 'SET_USER_PROFILE';
const SET_STATUS = 'SET_STATUS';

let initialState = {
    posts: [],
    profile: null,
    status: ''
};

const profileReducer = (state = initialState, action) => {
    switch (action.type) {
        case ADD_POST: {
            return {
                ...state,
                posts: [...state.posts,
                    {
                        id: 3,
                        message: action.post,
                        likeCount: 0
                    }]
            };
        }
        case DELETE_POSTS: {
            return {
                ...state,
                posts: []
            };
        }
        case SET_USER_PROFILE: {
            return {
                ...state,
                profile: action.profile
            }
        }
        case SET_STATUS: {
            return {
                ...state,
                status: action.status
            }
        }
        default:
            return state;
    }
}

export const addPost = (post) => ({type: ADD_POST, post})
export const deletePosts = () => ({type: DELETE_POSTS})
export const setUserProfile = (profile) => ({type: SET_USER_PROFILE, profile})
export const setStatus = (status) => ({type: SET_STATUS, status})

export const getProfile = (userId) => (dispatch) => {
        profileAPI.getProfile(userId).then(data => {
            dispatch(setUserProfile(data));
        });
}
export const getStatus = (userId) => (dispatch) => {
    profileAPI.getStatus(userId).then(data => {
        dispatch(setStatus(data));
    });
}
export const updateStatus = (status) => (dispatch) => {
    profileAPI.updateStatus(status)
        .then(response => {
            if(response.data.resultCode === 0) {
                dispatch(setStatus(status));
            }
    });
}

export default profileReducer;