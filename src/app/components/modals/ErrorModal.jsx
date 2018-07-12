import React, {Component} from 'react';
import PropTypes from 'prop-types';
import Modal from 'react-bootstrap4-modal';
import MdErrorOutline from 'react-icons/lib/md/error-outline';
import {ShakeRotate} from 'reshake';
import '../../styles/ErrorModalStyles.scss';

const propTypes = {
    isOpen: PropTypes.bool.isRequired,
    error: PropTypes.shape({
        message: PropTypes.string
    }),
    clearStore: PropTypes.func.isRequired,
};

const defaultProps = {
    error: {
        message: 'Sorry...\n Something went wrong!'
    }
};

export default class ErrorModal extends Component {
    constructor(props) {
        super(props);
        this.closeModal = this.closeModal.bind(this);
    }

    closeModal() {
        this.props.clearStore();
    }

    render() {
        return (
            <Modal visible={this.props.isOpen} onClickBackdrop={this.closeModal}>
                <div className="modal-header">
                    <h5 className="modal-title">Ooops!</h5>
                    <button
                        type="button"
                        className="close"
                        onClick={this.closeModal}>
                        <span aria-hidden="true">&times;</span>
                    </button>
                </div>
                <div className="modal-body">
                    <ShakeRotate fixed fixedStop>
                        <div className="error-icon"><MdErrorOutline/></div>
                    </ShakeRotate>
                    <div className="error-message">{this.props.error.message}</div>
                </div>
            </Modal>)
    }
}

ErrorModal.propTypes = propTypes;
ErrorModal.defaultPrrops = defaultProps;