import types from './types';

const getListOfCommentsByPostIdAction = (value) => ({
    type: types.GET_LIST_OF_COMMENTS_BY_POST_ID,
    value: value
});

const putLikeOnCommentAction = (value) => ({
    type: types.PUT_LIKE_ON_COMMENT,
    value: value
});

export default {
    getListOfCommentsByPostIdAction,
    putLikeOnCommentAction
}