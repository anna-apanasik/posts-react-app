import types from './types';

const getListOfPostsAction = (value) => ({
    type: types.GET_LIST_OF_POSTS,
    value: value
});

const createPostAction = () => ({
    type: types.CREATE_POST
});

const updatePostAction = () => ({
    type: types.UPDATE_POST
});

const deletePostAction = () => ({
    type: types.DELETE_POST
});

const sortByTypeAction = (value) => ({
    type: types.SORT_POSTS_BY_TYPE,
    value: value
});

export default ({
    getListOfPostsAction,
    createPostAction,
    updatePostAction,
    deletePostAction,
    sortByTypeAction
});
