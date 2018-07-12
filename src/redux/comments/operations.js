import actions from './actions';
import * as request from 'superagent';
import appConstants from '../constants';

const getCommentsByPostId = (postId) => (dispatch) => {
    request
        .get(appConstants.API_URL + `/posts/${postId}/comments`)
        .accept('application/json')
        .then(res => {
            let value = {postId: postId, comments: res.body};
            dispatch(actions.getListOfCommentsByPostIdAction(value));
        })
        .catch(() => {
            //  TODO error alert
        });
};

const putLikeOnComment = (comment) =>(dispatch) => {
    request
        .put(appConstants.API_URL + `/comments/${comment.id}`)
        .accept('application/json')
        .send(comment)
        .then(() => {
            dispatch(actions.putLikeOnCommentAction(comment.postId));
        })
        .catch(() => {
            //  TODO error alert
        });
};

export default {
    getCommentsByPostId,
    putLikeOnComment
};