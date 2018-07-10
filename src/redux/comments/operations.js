import actions from './actions';
import * as request from 'superagent';
import appConstants from '../constants';

const getCommentsByPostId = (postId) => (dispatch) => {
    request
        .get(appConstants.API_URL + `/posts/${postId}/comments`)
        .accept('application/json')
        .then(res => {
            dispatch(actions.getListOfCommentsByPostIdAction({postId: postId, comments: res.body}))
        })
        .catch(error => {
            //TODO error alert
        })
};

export default {
    getCommentsByPostId
}