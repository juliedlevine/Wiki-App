import React from 'react';
import ReactDOM from 'react-dom';
import * as Redux from 'redux';
import * as ReactRedux from 'react-redux';
import ReduxThunk from 'redux-thunk';
import {Router, Route, hashHistory, IndexRoute } from 'react-router';
import './index.css';
import AppLayout from './AppLayout';
import Login from './login/Login';
import SignUp from './login/SignUp';
import loginReducer from './login/Login.reducer';
import Home from './Home.js';
import WikiPage from './wiki-page/WikiPage';
import wikiReducer from './wiki-page/WikiPage.reducer';


const reducer = Redux.combineReducers({
    wiki: wikiReducer,
    login: loginReducer
})

const store = Redux.createStore(
    reducer,
    window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__(),
    Redux.applyMiddleware(ReduxThunk)
);

ReactDOM.render(
    <ReactRedux.Provider store={store}>
        <Router history={hashHistory}>
            <Route path="/" component={AppLayout}>
                <IndexRoute component={Home} />
                <Route path="/login" component={Login} />
                <Route path="/signup" component={SignUp} />
                <Route path="/page/:title" component={WikiPage} />
            </Route>
        </Router>
    </ReactRedux.Provider>,
  document.getElementById('root')
);
