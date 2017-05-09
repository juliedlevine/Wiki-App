const INITIAL_STATE = {
    content: '',
    editing: false
};

function reducer(state=INITIAL_STATE, action) {

    if (action.type === 'fetch-page') {
        return Object.assign({}, state, {
          content: action.payload.content,
          editing: false
        });

    } else if (action.type === 'toggle-edit') {
        return Object.assign({}, state, {
            editing: !state.editing
        });

    } else if (action.type === 'typing') {
        return Object.assign({}, state, {
            content: action.content
        });

    } else if (action.type === 'update-page') {
        return Object.assign({}, state, {
            editing: !state.editing,
            content: action.payload.content
        });

    } else if (action.type === 'page-error') {
        return Object.assign({}, state, {
            content: 'You need to make this page!'
        });
    } else {
        return state;
    }
}

export default reducer;
