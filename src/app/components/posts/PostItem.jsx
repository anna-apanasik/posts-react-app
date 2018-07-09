import React, {Component} from 'react';
import PropTypes from 'prop-types';

const propTypes = {
    post: PropTypes.shape({
        id: PropTypes.number.isRequired,
        userId: PropTypes.number.isRequired,
        title: PropTypes.string.isRequired,
        text: PropTypes.string
    })
};

class PostItem extends Component {
    render() {
        const post = this.props.post;
        return (
            <div className="card">
                <div className="card-body">
                    <h5 className="card-title">{post.title}</h5>
                    <p className="card-text">{post.text}</p>
                </div>
            </div>)
    }
}

PostItem.propTypes = propTypes;

export default PostItem;