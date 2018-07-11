import React, {Component} from 'react';
import PropTypes from 'prop-types';
import "../../styles/CommentItemStyles.scss"
import MdFavorite from 'react-icons/lib/md/favorite';

const propTypes = {
    comment: PropTypes.shape({
        id: PropTypes.number.isRequired,
        username: PropTypes.string.isRequired,
        body: PropTypes.string.isRequired,
        likes: PropTypes.number.isRequired
    }),
    putLikeOnComment: PropTypes.func.isRequired
};

export default class CommentItem extends Component {
    putLike() {
        this.props.comment.likes += 1;
        this.props.putLikeOnComment(this.props.comment);
    }

    render() {
        const {username, body, likes} = this.props.comment;
        return (
            <div className="card text-white mb-3 comment">
                <div className="card-body">
                    <h5 className="card-title">{username}</h5>
                    <p className="card-text">{body}</p>
                </div>
                <div className="card-footer">
                    <div className="title-like">Likes {likes}</div>
                    <button type="button"
                            className="like-button"
                            onClick={this.putLike.bind(this)}>
                        <MdFavorite/>
                    </button>
                </div>
            </div>
        )
    }
}

CommentItem.propTypes = propTypes;