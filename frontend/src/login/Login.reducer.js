const INITIAL_STATE = {
    email: '',
    password: '',
    loggedIn: false
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
    } else if (action.type === 'successfulLogin') {
        return Object.assign({}, state, {
            loggedIn: true
        });
    } else {
        return state;
    }
}

export default reducer;
