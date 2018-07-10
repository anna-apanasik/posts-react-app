import types from './types';

const getListOfCommentsByPostIdAction = (value) => ({
    type: types.GET_LIST_OF_COMMENTS_BY_POST_ID,
    value: value
});

export default {
    getListOfCommentsByPostIdAction
}