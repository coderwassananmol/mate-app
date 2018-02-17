/*
    WARNING! DO NOT TOUCH.
    This is a store file for the redux state. It stores the current state of the application.
    The content of this store file should not be changed unless necessary. 
*/

import { Platform } from 'react-native';
import {
    createStore,
    applyMiddleware,
    compose
} from 'redux';
import promise from 'redux-promise';
import thunk from 'redux-thunk';

import RootReducer from './reducers';

const middleware = applyMiddleware(thunk, promise);

const Store = createStore(
    RootReducer,
    compose(
        middleware
    )
);
export default Store;
