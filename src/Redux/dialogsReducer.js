const ADD_MESSAGE = 'ADD_MESSAGE';

let initialState = {
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
        {id: 4, message: 'Hi', incoming: true},

    ]
}

const dialogsReducer = (state = initialState, action) => {
    switch (action.type) {
        case ADD_MESSAGE: {
            return {
                ...state,
                messages: [...state.messages, {
                    id: 5,
                    message: action.message,
                    incoming: false
                }]
            };
        }
        default:
            return state;
    }
}

export const addMessage = (message) => ({type: ADD_MESSAGE, message});

export default dialogsReducer;