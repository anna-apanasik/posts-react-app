import React, {Component} from 'react';
import PropTypes from 'prop-types';
import Collapse from 'react-css-collapse';
import CommentItem from "./CommentItem";

const propTypes = {
    postId: PropTypes.number.isRequired,
    postIdFromRequest: PropTypes.number,
    isOpen: PropTypes.bool.isRequired,
    getCommentsByPostId: PropTypes.func.isRequired,
    comments: PropTypes.array
};

class ListOfComments extends Component {
    constructor(props) {
        super(props);
        this.state = {
            comments: []
        };
        this.props.getCommentsByPostId(this.props.postId);

    }

    // componentWillMount() {
    //     this.props.getCommentsByPostId(this.props.postId);
    // }

    static getDerivedStateFromProps(props) {
        if (props.postIdFromRequest === props.postId) {
            return {
                comments: props.comments
            };
        }

        return null;
    }

    render() {

        return (
            <Collapse isOpen={this.props.isOpen}>
                    <div className="container">
                    {this.state.comments ? this.state.comments.map((item, index) =>
                        {console.log('comment', Object.assign({}, item))
                            return (<CommentItem key={index}
                                         comment={item}/>)})
                        : null}
                    </div>

            </Collapse>
        )

    }
}

ListOfComments.propTypes = propTypes;

export default ListOfComments;