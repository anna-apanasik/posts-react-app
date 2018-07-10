import React, {Component} from 'react';
import PropTypes from 'prop-types';
import Modal from 'react-bootstrap4-modal';

const propTypes = {
    isOpen: PropTypes.bool.isRequired,
    editPost: PropTypes.bool,
    post: PropTypes.shape({
        id: PropTypes.number.isRequired,
        title: PropTypes.string.isRequired,
        text: PropTypes.string.isRequired
    }),
    closeModal: PropTypes.func.isRequired,
    createPost: PropTypes.func.isRequired,
    updatePost: PropTypes.func.isRequired
};

class PostModal extends Component {
    constructor(props) {
        super(props);
        this.state = {
            title: '',
            text: '',
            titleValid: false,
            textValid: false,
            formValid: false,
            formErrors: {title: '', text: ''},
            editPost: false
        };

        this.handleChangeField = this.handleChangeField.bind(this);
        this.savePost = this.savePost.bind(this);
    }

    static getDerivedStateFromProps(props, state) {
        if (props.editPost !== state.editPost && props.post) {
            return {
                title: props.post.title,
                text: props.post.text,
                titleValid: true,
                textValid: true,
                editPost: true
            };
        }
        return null;
    }

    handleChangeField(e) {
        const name = e.target.name;
        const value = e.target.value;
        this.setState({[name]: value},
            () => {
                this.validateField(name, value)
            });
    }

    savePost() {
        if (this.props.editPost) {
            this.props.updatePost({
                id: this.props.post.id,
                title: this.state.title,
                text: this.state.text
            });
        } else {
            let userId = Math.floor(Math.random() * 3); // 3 - amount of users
            this.props.createPost({
                title: this.state.title,
                text: this.state.text,
                userId: userId,
            });
        }

        this.clearForm();
        this.props.closeModal();
    }

    clearForm() {
        this.setState({title: '', text: ''})
    }

    validateField(fieldName, value) {
        let fieldValidationErrors = this.state.formErrors;
        let titleValid = this.state.titleValid;
        let textValid = this.state.textValid;

        switch (fieldName) {
            case 'title':
                titleValid = value.length !== 0;
                if (!titleValid) {
                    fieldValidationErrors.title = PostModal.REQUIRED_FIELD_VALIDATION_MESSAGE;
                    break;
                }

                titleValid = value.length <= 30;
                if (!titleValid) {
                    fieldValidationErrors.title = PostModal.TOO_LONG_FIELD_VALIDATION_MESSAGE;
                    break;
                }

                fieldValidationErrors.title = '';
                break;
            case 'text':
                textValid = value.length !== 0;
                fieldValidationErrors.text = textValid ? '' : PostModal.REQUIRED_FIELD_VALIDATION_MESSAGE;
                break;
            default:
                break;
        }

        this.setState({
            formErrors: fieldValidationErrors,
            titleValid: titleValid,
            textValid: textValid
        }, this.validateForm);
    }

    validateForm() {
        this.setState({formValid: this.state.titleValid && this.state.textValid});
    }

    render() {
        return (
            <Modal visible={this.props.isOpen} onClickBackdrop={this.props.closeModal}>
                <div className="modal-header">
                    <h5 className="modal-title">Post</h5>
                    <button type="button"
                            className="close"
                            onClick={this.props.closeModal}>
                        <span aria-hidden="true">&times;</span>
                    </button>
                </div>
                <div className="modal-body">
                    <div className="form-group title-group">
                        <label>Title</label>
                        <input type="text"
                               value={this.state.title}
                               onChange={this.handleChangeField}
                               className="form-control form-control-sm"
                               name="title"
                               placeholder="Enter title"
                               required/>
                        <span className="badge badge-danger">{this.state.formErrors.title}</span>
                    </div>
                    <div className="form-group text-group">
                        <label>Text</label>
                        <textarea className="form-control"
                                  rows="3"
                                  value={this.state.text}
                                  onChange={this.handleChangeField}
                                  placeholder="Enter text"
                                  name="text"
                                  required/>
                        <span className="badge badge-danger">{this.state.formErrors.text}</span>
                    </div>
                </div>
                <div className="modal-footer">
                    <button type="button"
                            className="btn btn-primary"
                            data-dismiss="modal"
                            onClick={this.savePost}
                            disabled={!this.state.formValid}> Save
                    </button>
                </div>
            </Modal>
        )
    }
}

PostModal.REQUIRED_FIELD_VALIDATION_MESSAGE = 'This field is required';
PostModal.TOO_LONG_FIELD_VALIDATION_MESSAGE = 'This field is too long';

PostModal.propTypes = propTypes;

export default PostModal;