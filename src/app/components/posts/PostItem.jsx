import React, {Component} from 'react';
import PropTypes from 'prop-types';
import PostModalContainer from "../../containers/modals/PostModalContainer";
import ListOfCommentsContainer from "../../containers/comments/ListOfCommentsContainer";
import MdAdd from 'react-icons/lib/md/add';
import "../../styles/PostItemStyles.scss";
import CommentModalContainer from "../../containers/modals/CommentModalContainer";

const propTypes = {
    post: PropTypes.shape({
        id: PropTypes.number.isRequired,
        title: PropTypes.string.isRequired,
        text: PropTypes.string.isRequired
    }).isRequired,
    deletePost: PropTypes.func.isRequired
};

const POST_MODAL = 'isOpenPostModal',
    COMMENT_MODAL = 'isOpenCommentModal';

export default class PostItem extends Component {
    constructor(props) {
        super(props);
        this.state = {
            isOpenPostModal: false,
            isOpenCollapse: false,
            isOpenCommentModal: false
        };

        this.deletePost = this.deletePost.bind(this);
        this.openModal = this.openModal.bind(this);
        this.closeModal = this.closeModal.bind(this);
    }

    deletePost() {
        this.props.deletePost(this.props.post.id);
    }

    openModal(modalName) {
        this.setState({[modalName]: true});
    }


    closeModal(modalName) {
        this.setState({[modalName]: false});
    }

    render() {
        const {post} = this.props;
        return (
            <div className="card post-item">
                <div className="card-body">
                    <div className="card-header">
                        <h5 className="card-title">{post.title}</h5>
                        <div className="buttons">
                            <button
                                type="button"
                                className="edit-button post-button"
                                onClick={() => this.openModal(POST_MODAL)}>
                                <p>Edit</p>
                            </button>
                            <button
                                type="button"
                                className="delete-button post-button"
                                onClick={this.deletePost}>
                                <p aria-hidden="true">&times;</p>
                            </button>
                        </div>
                    </div>
                    <p className="card-text">{post.text}</p>
                    <div className="card-footer post-footer">
                        <button
                            type="button"
                            className="comments-buttons show-comments-button"
                            onClick={() => this.setState({isOpenCollapse: !this.state.isOpenCollapse})}>
                            <p aria-hidden="true">Comments</p>
                        </button>
                        <button
                            type="button"
                            className="comments-buttons add-comment-button"
                            onClick={() => this.openModal(COMMENT_MODAL)}>
                            <MdAdd/>
                        </button>
                    </div>
                </div>
                <div>
                    <PostModalContainer
                        isOpen={this.state.isOpenPostModal}
                        editPost
                        closeModal={() => this.closeModal(POST_MODAL)}
                        post={post}/>
                    <CommentModalContainer
                        isOpen={this.state.isOpenCommentModal}
                        postId={post.id}
                        closeModal={() => this.closeModal(COMMENT_MODAL)}/>
                    <ListOfCommentsContainer
                        postId={post.id}
                        isOpen={this.state.isOpenCollapse}/>
                </div>
            </div>
        )
    }
}

PostItem.propTypes = propTypes;