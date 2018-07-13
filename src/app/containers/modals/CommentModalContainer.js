import {connect} from 'react-redux';
import CommentModal from '../../components/modals/CommentModal';
import {commentOperations} from '../../../redux/comments';

const mapStateToProps = state => ({
    users: state.user.users
});

const mapDispatchToProps = {
    createComment: commentOperations.createComment
};

const CommentModalContainer = connect(
    mapStateToProps,
    mapDispatchToProps
)(CommentModal);

export default CommentModalContainer;