import profileReducer, {addPost, deletePost} from "./profile-reducer";

const state = {
    posts: [
        {id: 1, message: 'First message', likesCount: 10},
        {id: 2, message: 'Second message', likesCount: 11},
        {id: 3, message: 'Third message', likesCount: 12},
        {id: 4, message: 'Fourth message', likesCount: 13},
    ],
};

test('length of posts should be incremented', () => {
    // 1. test data
    const action = addPost('add post test');

    // 2. action
    const newState = profileReducer(state, action);

    // 3. expectation
    expect(newState.posts.length).toBe(5);
});

test('message of new post should be correct', () => {
    // 1. test data
    const action = addPost('add post test');

    // 2. action
    const newState = profileReducer(state, action);

    // 3. expectation
    expect(newState.posts[4].message).toBe('add post test');
});

test('after deleting length of messages should be decremented', () => {
    // 1. test data
    const action = deletePost(4);

    // 2. action
    const newState = profileReducer(state, action);

    // 3. expectation
    expect(newState.posts.length).toBe(3);
});

test("after deleting length of messages shouldn't be decremented if id is incorrect", () => {
    // 1. test data
    const action = deletePost(1000);

    // 2. action
    const newState = profileReducer(state, action);

    // 3. expectation
    expect(newState.posts.length).toBe(4);
});