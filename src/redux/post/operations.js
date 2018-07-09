import actions from './actions';
import * as request from 'superagent';
import appConstants from '../constants';

const getListOfPosts = () => (dispatch) => {
    request
        .get(appConstants.API_URL + '/posts')
        .accept('application/json')
        .then(res => {
            dispatch(actions.getListOfPostsAction(res.body));
        })
        .catch(error => {
            //TODO error alert
        })
};

const createPost = (post) => (dispatch) => {
    request
        .post(appConstants.API_URL + '/posts')
        .send({
            title: post.title,
            text: post.text
        })
        .accept('application/json')
        .then(() => {
            dispatch(actions.createPostAction())
        })
        .catch(error => {
            //TODO error alert
        })
};

const updatePost = (post) => (dispatch) => {
    request
        .put(appConstants.API_URL + `/posts/${post.id}`)
        .send(post)
        .then(() => {
            dispatch(actions.updatePostAction())
        })
        .catch(error => {
            //TODO error alert
        })
};

export default ({
    getListOfPosts,
    createPost,
    updatePost
})