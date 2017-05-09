const INITIAL_STATE = {
    username: '',
    email: '',
    password: '',
    loggedIn: false,
    token: ''
};

function reducer(state=INITIAL_STATE, action) {
    if (action.type === 'emailTyping') {
        return Object.assign({}, state, {
            email: action.email
        });
    } else if (action.type === 'passwordTyping') {
        return Object.assign({}, state, {
            password: action.password
        });
    } else if (action.type === 'userTyping') {
        return Object.assign({}, state, {
            username: action.username
        });
    } else if (action.type === 'successfulLogin') {
        return Object.assign({}, state, {
            loggedIn: true,
            username: action.payload.username,
            token: action.payload.token
        });
    } else {
        return state;
    }
}

export default reducer;
