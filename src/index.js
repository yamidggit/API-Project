import React from 'react';
import ReactDOM from 'react-dom';
import { createStore, compose, applyMiddleware } from 'redux';
import { Provider } from 'react-redux';
import createSagaMiddleware from 'redux-saga';


import reducer from './reducers';
import watchActions from './sagas';
import { AppContainer } from './components/app';


// Add CSS files to bundle
require('../src/css/application.scss');

// create the saga middleware
const sagaMiddleware = createSagaMiddleware();

// mount it on the Store(arguments: reducer, initial state, the store enhancer. )
//to get the store in the redux tools extension we pass to compose the middleware 
// but also check if the tools extension are used for window object and if it is 
//initialize the tools extension and if not don't do anything

let store = createStore(reducer, undefined, compose(
    applyMiddleware(sagaMiddleware),
    window.devToolsExtension ?
        window.devToolsExtension() : f => f
));
// 2nd argument pass the state to the saga
sagaMiddleware.run(watchActions, store.getState);


// Render application to DOM
ReactDOM.render(
   <Provider store={store}>
    <AppContainer state={store.getState()}/>
    </Provider>,
    document.getElementById('app')
);