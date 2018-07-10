import types from './types';

const INITIAL_STATE = {
    postId: undefined,
    comments: []
};

const commentReducer = (state = INITIAL_STATE, action) => {
    switch (action.type) {
        case types.GET_LIST_OF_COMMENTS_BY_POST_ID: {
            console.log(Object.assign({}, action))
            const {postId, comments} = action.value;
            return {
                ...state,
                postId: postId,
                comments: comments
            }
        }

        default:
            return state;
    }
};

export default commentReducer;