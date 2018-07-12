import React, {Component} from 'react';
import PropTypes from 'prop-types';
import Collapse from 'react-css-collapse';
import CommentItemContainer from "../../containers/comments/CommentItemContainer";
import '../../styles/ListOfCommentsStyles.scss';

const propTypes = {
    postId: PropTypes.number.isRequired,
    postIdFromRequest: PropTypes.number,
    putLike: PropTypes.bool,
    comments: PropTypes.array,
    isOpen: PropTypes.bool.isRequired,
    getCommentsByPostId: PropTypes.func.isRequired
};

const defaultProps = {
    postIdFromRequest: 0,
    putLike: false,
    comments: []
};

export default class ListOfComments extends Component {
    constructor(props) {
        super(props);
        this.state = {
            comments: []
        };

        this.props.getCommentsByPostId(this.props.postId);
    }

    static getDerivedStateFromProps(props) {
        if (props.postIdFromRequest === props.postId) {
            return {
                comments: props.comments
            };
        }

        if (props.putLike) {
            props.getCommentsByPostId(props.postIdFromRequest);
        }

        return null;
    }

    render() {
        return (
            <Collapse isOpen={this.props.isOpen}>
                <div className="container comments-container">
                    {this.state.comments ?
                        this.state.comments.map((item, index) =>
                            <CommentItemContainer key={index} comment={item}/>) :
                        null}
                </div>
            </Collapse>
        )
    }
}

ListOfComments.propTypes = propTypes;
ListOfComments.defaultProps = defaultProps;