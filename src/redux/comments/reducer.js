import types from './types';

const INITIAL_STATE = {
    postId: 0,
    comments: [],
    putLike: false
};

const commentReducer = (state = INITIAL_STATE, action) => {
    switch (action.type) {
        case types.GET_LIST_OF_COMMENTS_BY_POST_ID: {
            const {postId, comments} = action.value;
            return {
                ...state,
                postId: postId,
                comments: comments,
                putLike: false
            };
        }

        case types.PUT_LIKE_ON_COMMENT: {
            const {value} = action;
            return {
                ...state,
                putLike: true,
                postId: value
            };
        }

        default:
            return state;
    }
};

export default commentReducer;