import React, {Component} from 'react';
import PropTypes from 'prop-types';
import "../../styles/CommentItemStyles.scss"

const propTypes = {
    comment: PropTypes.shape({
        id: PropTypes.number.isRequired,
        username: PropTypes.string.isRequired,
        body: PropTypes.string.isRequired
    })
};

class CommentItem extends Component {
    render() {
        const {username, body} = this.props.comment;
        return (
            <div className="card text-white mb-3 comment">
                <div className="card-body">
                    <h5 className="card-title">{username}</h5>
                    <p className="card-text">{body}</p>
                </div>
                <div className="card-footer">Likes</div>
            </div>
        )
    }
}

CommentItem.propTypes = propTypes;

export default CommentItem;
