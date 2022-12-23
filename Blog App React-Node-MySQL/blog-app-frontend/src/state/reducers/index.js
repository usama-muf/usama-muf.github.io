import { combineReducers } from 'redux'
import postReducer from './post';

const reducer = combineReducers({ postReducer: postReducer })
export default reducer;