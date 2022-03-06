let initialState = {

    NavbarItems: [
        {name: 'Profile', url: '/profile'},
        {name: 'Messages', url: '/dialogs'},
        {name: 'Users', url: '/users'},
        {name: 'News', url: '/news'},
        {name: 'Music', url: '/music'},
        {name: 'Settings', url: '/settings'},
    ],
    FriendsList: [
        {id: 1, name: 'Andrew'},
        {id: 2, name: 'Sasha'},
        {id: 3, name: 'Sveta'},
    ]
};

const sidebarReducer = (state = initialState, action) => {
    return state;
}

export default sidebarReducer;