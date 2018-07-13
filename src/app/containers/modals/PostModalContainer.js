import {connect} from 'react-redux';
import {postOperations} from '../../../redux/posts';
import PostModal from '../../components/modals/PostModal';

const mapDispatchToProps = {
    createPost: postOperations.createPost,
    updatePost: postOperations.updatePost
};

const PostModalContainer = connect(
    null,
    mapDispatchToProps
)(PostModal);

export default PostModalContainer;