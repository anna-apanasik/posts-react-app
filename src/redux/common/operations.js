import actions from './actions';

const clearStoreAfterShowError = () => (dispatch) => {
    dispatch(actions.clearStoreAfterShowingErrorAction());
};

export default {
    clearStoreAfterShowError
};