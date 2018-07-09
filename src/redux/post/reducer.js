import types from './types';

const INITIAL_STATE = {
    listOfPosts: [],
    postWasCreated: false
};

const postReducer = (state = INITIAL_STATE, action) => {
    switch (action.type) {
        case types.GET_LIST_OF_POSTS: {
            const {value} = action;
            return {
                ...state,
                listOfPosts: value,
                postWasCreated: false
            };
        }

        case types.CREATE_POST: {
            return {
                ...state,
                postWasCreated: true
            };
        }

        default:
            return state;
    }
};

export default postReducer;
