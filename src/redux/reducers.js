import {combineReducers} from 'redux';
import postReducer from './posts';
import commentReducer from './comments';
import commonReducer from './common';

export default combineReducers({
    post: postReducer,
    comment: commentReducer,
    common: commonReducer
});