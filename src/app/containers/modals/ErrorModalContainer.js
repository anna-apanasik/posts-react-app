import {connect} from 'react-redux';
import {commonOperations} from '../../../redux/common/index';
import ErrorModal from '../../components/modals/ErrorModal';

const mapStateToProps = state => ({
    error: state.common.error
});

const mapDispatchToProps = {
    clearStore: commonOperations.clearStoreAfterShowError
};

const ErrorModalContainer = connect(
    mapStateToProps,
    mapDispatchToProps
)(ErrorModal);

export default ErrorModalContainer;