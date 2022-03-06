import profileReducer from "./profileReducer";
import dialogsReducer from "./dialogsReducer";
import sidebarReducer from "./sidebarReducer";

let store = {
    _state: {
        profilePage: {
            posts: [
                {id: 1, message: 'Hello world!', likeCount: 5},
                {id: 2, message: 'second post', likeCount: 8}
            ],
            textArea: 'Default'
        },
        dialogsPage: {
            dialogs: [
                {id: 1, name: 'Dimych'},
                {id: 2, name: 'Andrey'},
                {id: 3, name: 'Sveta'},
                {id: 4, name: 'Sasha'},
                {id: 5, name: 'Victor'},
                {id: 6, name: 'Valera'},
            ],
            messages: [
                {id: 1, message: 'Hi', incoming: false},
                {id: 2, message: 'How are you?', incoming: true},
                {id: 3, message: 'Hi2', incoming: false},
                {id: 4, message: 'Hi2', incoming: false},

            ],
            textArea: 'Default'
        },
        sidebar: {
            NavbarItems: [
                {name: 'Profile', url: '/profile'},
                {name: 'Messages', url: '/dialogs'},
                {name: 'News', url: '/news'},
                {name: 'Music', url: '/music'},
                {name: 'Settings', url: '/settings'},
            ],
            FriendsList: [
                {id: 1, name: 'Andrew'},
                {id: 2, name: 'Sasha'},
                {id: 3, name: 'Sveta'},
            ]
        },

    },
    _callSubscriber() {
        console.log('Rerender');
    },

    getState() {
        return this._state;
    },
    subscribe(observer) {
        this._callSubscriber = observer;
    },

    dispatch(action) {
        profileReducer(this._state.profilePage, action);
        dialogsReducer(this._state.dialogsPage, action);
        sidebarReducer(this._state.sidebar, action);
        this._callSubscriber(this._state);
    }
}

window.store = store;

