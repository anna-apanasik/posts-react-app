import {connect} from 'react-redux';
import {commentOperations} from "../../../redux/comments";
import ListOfComments from "../../components/comments/ListOfComments";

const mapStateToProps = state => ({
    comments: state.comment.comments,
    postIdFromRequest: state.comment.postId
});

const mapDispatchToProps = {
    getCommentsByPostId: commentOperations.getCommentsByPostId
};

const ListOfCommentsContainer = connect(
    mapStateToProps,
    mapDispatchToProps
)(ListOfComments);

export default ListOfCommentsContainer;