import $ from 'jquery';

function pageError(resp) {
    let error = (resp && resp.responseJSON && resp.responseJSON.message) || 'Something went wrong!';
    return { type: 'page-error', error: error };
}

export function fetchPage(title) {
    let asyncAction = function(dispatch) {
        $.ajax({
            type: 'GET',
            url: 'http://localhost:4000/api/page/' + title,
        })
        .then(data => dispatch({
            type: 'fetch-page',
            payload: data
        }))
        .catch(resp => dispatch(pageError(resp)))
    }
    return asyncAction;
}

export function toggleEdit() {
    return {
        type: 'toggle-edit'
    };
}

export function typing(event) {
    return {
        type: 'typing',
        content: event.target.value
    };
}

export function updatePage(title, content) {
    let asyncAction = function(dispatch) {
        $.ajax({
            type: 'PUT',
            url: 'http://localhost:4000/api/page/' + title,
            contentType: 'application/json',
            data: JSON.stringify({
                content: content
            })
        })
        .then(data => dispatch({
            type: 'update-page',
            payload: data
        }))
    }
    return asyncAction;
}
