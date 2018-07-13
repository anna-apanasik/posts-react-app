import React, {Component} from 'react';
import PropTypes from 'prop-types';
import Modal from 'react-bootstrap4-modal';

const propTypes = {
    isOpen: PropTypes.bool.isRequired,
    postId: PropTypes.number.isRequired,
    users: PropTypes.arrayOf(PropTypes.shape({
        id: PropTypes.number.isRequired,
        username: PropTypes.string.isRequired
    })),
    closeModal: PropTypes.func.isRequired,
    createComment: PropTypes.func.isRequired
};

const defaultProps = {
    users: []
};

export default class CommentModal extends Component {
    constructor(props) {
        super(props);
        this.state = {
            user: {},
            text: '',
        };

        this.handleChangeField = this.handleChangeField.bind(this);
        this.handleChangeUser = this.handleChangeUser.bind(this);
        this.saveComment = this.saveComment.bind(this);
    }

    shouldComponentUpdate(nextProps) {
        if (nextProps.users.length > 0 && Object.keys(this.state.user).length === 0) {
            this.setState({user: nextProps.users[0]})
        }
        return true;
    }

    handleChangeField(e) {
        const name = e.target.name;
        const value = e.target.value;
        this.setState({[name]: value});
    }

    handleChangeUser(e) {
        this.setState({user: this.props.users[e.target.value]});
    }

    saveComment() {
        this.props.createComment({
            postId: this.props.postId,
            username: this.state.user.username,
            likes: 0,
            body: this.state.text
        });
        this.props.closeModal();
        this.clearForm();
    }

    clearForm() {
        this.setState({user: {}, text: ''})
    }

    render() {
        const {users} = this.props;
        return (
            <Modal visible={this.props.isOpen} onClickBackdrop={this.props.closeModal}>
                <div className="modal-header">
                    <h5 className="modal-title">Comment</h5>
                    <button
                        type="button"
                        className="close"
                        onClick={this.props.closeModal}>
                        <span aria-hidden="true">&times;</span>
                    </button>
                </div>
                <div className="modal-body">
                    <div className="form-group title-group">
                        <label>Select user</label>
                        <select
                            className="form-control"
                            onClick={this.handleChangeUser}>
                            {users.map((item, index) =>
                                <option
                                    key={index}
                                    value={index}> {item.username}
                                </option>)}
                        </select>
                    </div>
                    <div className="form-group text-group">
                        <label>Text</label>
                        <textarea
                            className="form-control"
                            rows="3"
                            value={this.state.text}
                            onChange={this.handleChangeField}
                            placeholder="Enter text"
                            name="text"/>
                    </div>
                </div>
                <div className="modal-footer">
                    <button
                        type="button"
                        className="btn btn-primary"
                        data-dismiss="modal"
                        onClick={this.saveComment}
                    > Save
                    </button>
                </div>
            </Modal>)
    }
}

CommentModal.propTypes = propTypes;
CommentModal.defaultProps = defaultProps;