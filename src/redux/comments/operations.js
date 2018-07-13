import actions from './actions';
import * as request from 'superagent';
import appConstants from '../constants';
import {commonActions} from '../common';

const getCommentsByPostId = (postId) => (dispatch) => {
    request
        .get(appConstants.API_URL + `/posts/${postId}/comments`)
        .accept('application/json')
        .then(res => {
            let value = {postId: postId, comments: res.body};
            dispatch(actions.getListOfCommentsByPostIdAction(value));
        })
        .catch(error => {
            dispatch(commonActions.showErrorAction(error));
        });
};

const putLikeOnComment = (comment) => (dispatch) => {
    request
        .put(appConstants.API_URL + `/comments/${comment.id}`)
        .accept('application/json')
        .send(comment)
        .then(() => {
            dispatch(actions.putLikeOnCommentAction(comment.postId));
        })
        .catch(error => {
            dispatch(commonActions.showErrorAction(error));
        });
};

const createComment = (comment) => (dispatch) => {
    request
        .post(appConstants.API_URL + '/comments')
        .accept('application/json')
        .send(comment)
        .then(() => {
            dispatch(actions.createCommentAction(comment.postId));
        })
        .catch(error => {
            dispatch(commonActions.showErrorAction(error));
        });
};

export default {
    getCommentsByPostId,
    putLikeOnComment,
    createComment
};