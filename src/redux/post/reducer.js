import types from './types';

const INITIAL_STATE = {
    listOfPosts: []
};

const postReducer = (state = INITIAL_STATE, action) => {
    switch (action.type) {
        case types.GET_LIST_OF_POSTS: {
            const {value} = action;
            return {
                ...state,
                listOfPosts: value
            };
        }

        default:
            return state;
    }
};

export default postReducer;
