import types from './types';

const INITIAL_STATE = {
    users: []
};

const userReducer = (state = INITIAL_STATE, action) => {
    switch (action.type) {
        case types.GET_USERS: {
            const {value} = action;
            return {
                ...state,
                users: value
            };
        }

        default:
            return state;
    }
};

export default userReducer;