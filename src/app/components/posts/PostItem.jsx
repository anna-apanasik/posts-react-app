import React, {Component} from 'react';
import PropTypes from 'prop-types';
import "../../styles/PostItemStyles.scss";
import PostModalContainer from "../../containers/posts/PostModalContainer";

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
            isOpen: false
        };
        this.deletePost = this.deletePost.bind(this);
        this.openModal = this.openModal.bind(this);
        this.closeModal = this.closeModal.bind(this);
    }

    deletePost() {
        this.props.deletePost(this.props.post.id);
    }

    openModal() {
        this.setState({isOpen: true})
    }

    closeModal() {
        this.setState({isOpen: false});
    }

    render() {
        const post = this.props.post;
        return (
            <div className="card post-item">
                <div className="card-body">
                    <div className="card-header">
                        <h5 className="card-title">{post.title}</h5>
                        <div className="buttons">
                            <button type="button"
                                    className="edit-button post-button"
                                    onClick={this.openModal}>
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
                </div>
                <div>
                    <PostModalContainer isOpen={this.state.isOpen}
                                        editPost
                                        closeModal={this.closeModal}
                                        post={post}/>
                </div>
            </div>)
    }
}

PostItem.propTypes = propTypes;

export default PostItem;