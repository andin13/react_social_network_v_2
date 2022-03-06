const ADD_POST = 'ADD-POST';
const CHANGE_TEXT_AREA = 'CHANGE-TEXT-AREA';
const DELETE_POSTS = 'DELETE-POSTS';

let initialState = {
    posts: [
        {id: 1, message: 'Hello world!', likeCount: 5},
        {id: 2, message: 'second post', likeCount: 8}
    ],
    textArea: 'Default'
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
        default:
            return state;
    }
}

export const addPostActionCreator = () => ({type: ADD_POST})
export const changeTextAreaActionCreator = (text) => ({type: CHANGE_TEXT_AREA, text: text})
export const deletePostsActionCreator = () => ({type: DELETE_POSTS})

export default profileReducer;