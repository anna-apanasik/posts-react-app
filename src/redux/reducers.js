import {combineReducers} from 'redux';
import postReducer from './posts';
import commentReducer from './comments';
import commonReducer from './common';
import userReducer from './users';

export default combineReducers({
    post: postReducer,
    comment: commentReducer,
    common: commonReducer,
    user: userReducer
});