import types from './types';

const getUsersAction = (value) => ({
    type: types.GET_USERS,
    value: value
});

export default {
    getUsersAction
};