import actions from './actions';
import * as request from 'superagent';
import appConstants from '../constants';
import {commonActions} from '../common';

const getUsers = () => (dispatch) => {
    request
        .get(appConstants.API_URL + '/users')
        .accept('application/json')
        .then(res => {
            dispatch(actions.getUsersAction(res.body));
        })
        .catch(e => {
            dispatch(commonActions.showErrorAction(e));
        });
};

export default {
    getUsers
};