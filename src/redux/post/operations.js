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

export default ({
    getListOfPosts
})