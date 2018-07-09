import types from './types';

const getListOfPostsAction = (value) => ({
    type: types.GET_LIST_OF_POSTS,
    value: value
});

const createPostAction = () => ({
    type: types.CREATE_POST
});

export default ({
    getListOfPostsAction,
    createPostAction
});
