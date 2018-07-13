import types from './types';

const INITIAL_STATE = {
    listOfPosts: [],
    postWasChanged: false,
    isOpenErrorModal: false,
    error: {}
};

const postReducer = (state = INITIAL_STATE, action) => {
    switch (action.type) {
        case types.GET_LIST_OF_POSTS: {
            const {value} = action;
            return {
                ...state,
                listOfPosts: value,
                postWasChanged: false,
                postsWereSortedByType: false
            };
        }

        case types.CREATE_POST: {
            return {
                ...state,
                postWasChanged: true
            };
        }

        case types.UPDATE_POST: {
            return {
                ...state,
                postWasChanged: true
            };
        }

        case types.DELETE_POST: {
            return {
                ...state,
                postWasChanged: true
            };
        }

        case types.SORT_POSTS_BY_TYPE: {
            const {value} = action;
            return {
                ...state,
                listOfPosts: value
            };
        }

        case types.FILTER_POSTS_BY_TYPE_WITH_VALUE: {
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
