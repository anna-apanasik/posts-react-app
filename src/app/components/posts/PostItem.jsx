import React, {Component} from 'react';
import PropTypes from 'prop-types';
import PostModalContainer from "../../containers/modals/PostModalContainer";
import ListOfCommentsContainer from "../../containers/comments/ListOfCommentsContainer";
import "../../styles/PostItemStyles.scss";

const propTypes = {
    post: PropTypes.shape({
        id: PropTypes.number.isRequired,
        title: PropTypes.string.isRequired,
        text: PropTypes.string.isRequired
    }),
    deletePost: PropTypes.func.isRequired
};

class PostItem extends Component {
    constructor(props) {
        super(props);
        this.state = {
            isOpenEditModal: false,
            isOpenCollapse: false
        };

        this.deletePost = this.deletePost.bind(this);
        this.openEditModal = this.openEditModal.bind(this);
        this.closeModal = this.closeModal.bind(this);
    }

    deletePost() {
        this.props.deletePost(this.props.post.id);
    }

    openEditModal() {
        this.setState({isOpenEditModal: true});
    }

    closeModal() {
        this.setState({isOpenEditModal: false});
    }

    render() {
        const {post} = this.props;
        return (
            <div className="card post-item">
                <div className="card-body">
                    <div className="card-header">
                        <h5 className="card-title">{post.title}</h5>
                        <div className="buttons">
                            <button type="button"
                                    className="edit-button post-button"
                                    onClick={this.openEditModal}>
                                <p>Edit</p>
                            </button>
                            <button type="button"
                                    className="delete-button post-button"
                                    onClick={this.deletePost}>
                                <p aria-hidden="true">&times;</p>
                            </button>
                        </div>
                    </div>
                    <p className="card-text">{post.text}</p>
                    <button type="button"
                            className="comments-button"
                            onClick={() => this.setState({isOpenCollapse: !this.state.isOpenCollapse})}>
                        <p aria-hidden="true">Comments</p>
                    </button>
                </div>
                <div>
                    <PostModalContainer isOpen={this.state.isOpenEditModal}
                                        editPost
                                        closeModal={this.closeModal}
                                        post={post}/>
                    <ListOfCommentsContainer postId={post.id}
                                             isOpen={this.state.isOpenCollapse}/>
                </div>
            </div>
        )
    }
}

PostItem.propTypes = propTypes;

export default PostItem;