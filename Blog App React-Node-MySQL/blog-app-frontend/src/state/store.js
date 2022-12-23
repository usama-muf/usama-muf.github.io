import { configureStore, applyMiddleware } from '@reduxjs/toolkit'
// import reducer from './reducers'
import thunk from 'redux-thunk'
import rootReducer from './reducers';
// import rootReducer from './reducers/index';

// const store = configureStore({ reducer: reducer }, applyMiddleware(thunk));
// const store = configureStore({ reducer: rootReducer }, applyMiddleware(thunk));
const initalState = {};
const store = configureStore({ reducer: rootReducer }, initalState, applyMiddleware(thunk));

export default store;