import types from './types';

const showErrorAction = (value) => ({
    type: types.SHOW_ERROR,
    value: value
});

const clearStoreAfterShowingErrorAction = () => ({
    type: types.CLEAR_STORE_AFTER_SHOWING_ERROR
});

export default {
    showErrorAction,
    clearStoreAfterShowingErrorAction
};