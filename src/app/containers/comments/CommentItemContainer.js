import {connect} from 'react-redux';
import {commentOperations} from "../../../redux/comments";
import CommentItem from "../../components/comments/CommentItem";

const mapDispatchToProps = {
    putLikeOnComment: commentOperations.putLikeOnComment
};

const CommentItemContainer = connect(
    null,
    mapDispatchToProps
)(CommentItem);

export default CommentItemContainer;