import {combineReducers} from 'redux';
import postReducer from './posts';
import commentReducer from './comments';

export default combineReducers({
    post: postReducer,
    comment: commentReducer
});