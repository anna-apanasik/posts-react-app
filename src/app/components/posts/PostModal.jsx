import React, {Component} from 'react';
import PropTypes from 'prop-types';

const propTypes = {};

class PostModal extends Component {
    constructor(props) {
        super(props);
        this.state = {
            title: '',
            text: '',
            titleValid: false,
            textValid: false,
            formValid: false,
            formErrors: {title: '', text: ''}
        };

        this.handleChangeField = this.handleChangeField.bind(this);
        this.savePost = this.savePost.bind(this);
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
        this.props.createPost({
            title: this.state.title,
            text: this.state.text
        });

        this.clearForm();
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
            <div className="modal-dialog">
                <div className="modal-content">
                    <div className="modal-header">
                        <h5 className="modal-title">Post</h5>
                        <button type="button" className="close" data-dismiss="modal" aria-label="Close">
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
                                disabled={!this.state.formValid}>Save
                        </button>
                    </div>
                </div>
            </div>
        )
    }
}

PostModal.REQUIRED_FIELD_VALIDATION_MESSAGE = 'This field is required';
PostModal.TOO_LONG_FIELD_VALIDATION_MESSAGE = 'This field is too long';
PostModal.propTypes = propTypes;

export default PostModal;