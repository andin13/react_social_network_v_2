import {usersAPI} from "../api/api";

const ADD_POST = 'ADD-POST';
const CHANGE_TEXT_AREA = 'CHANGE-TEXT-AREA';
const DELETE_POSTS = 'DELETE-POSTS';
const SET_USER_PROFILE = 'SET_USER_PROFILE';

let initialState = {
    posts: [
        {id: 1, message: 'Hello world!', likeCount: 5},
        {id: 2, message: 'second post', likeCount: 8}
    ],
    textArea: 'Default',
    profile: null
};

const profileReducer = (state = initialState, action) => {
    switch (action.type) {
        case ADD_POST: {
            return {
                ...state,
                posts: [...state.posts,
                    {
                        id: 3,
                        message: state.textArea,
                        likeCount: 0
                    }],
                textArea: ''
            };
        }
        case CHANGE_TEXT_AREA: {
            return {
                ...state,
                textArea: action.text,
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
        default:
            return state;
    }
}

export const addPostActionCreator = () => ({type: ADD_POST})
export const changeTextAreaActionCreator = (text) => ({type: CHANGE_TEXT_AREA, text})
export const deletePostsActionCreator = () => ({type: DELETE_POSTS})
export const setUserProfile = (profile) => ({type: SET_USER_PROFILE, profile})

export const getProfile = (userId) => (dispatch) => {
        usersAPI.getProfile(userId).then(data => {
            dispatch(setUserProfile(data));
        });
}

export default profileReducer;