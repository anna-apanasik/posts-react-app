import types from './types';

const getListOfPostsAction = (value) => ({
    type: types.GET_LIST_OF_POSTS,
    value: value
});

export default ({
    getListOfPostsAction
});
