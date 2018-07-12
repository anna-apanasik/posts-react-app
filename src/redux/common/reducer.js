import types from './types';

const INITIAL_STATE = {
    showError: false,
    error: {}
};

const commonReducer = (state = INITIAL_STATE, action) => {
    switch (action.type) {
        case types.SHOW_ERROR: {
            const {value} = action;
            return {
                ...state,
                showError: true,
                error: value
            };
        }

        case types.CLEAR_STORE_AFTER_SHOWING_ERROR: {
            return {
                ...state,
                showError: false,
                error: {}
            };
        }

        default:
            return state;
    }
};

export default commonReducer;

