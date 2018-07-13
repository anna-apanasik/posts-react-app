import {connect} from 'react-redux';
import ListOfPosts from '../../components/posts/ListOfPosts';
import {postOperations} from '../../../redux/posts';
import {userOperations} from '../../../redux/users';

const mapStateToProps = state => ({
    posts: state.post.listOfPosts,
    postWasChanged: state.post.postWasChanged
});

const mapDispatchToProps = {
    getListOfPosts: postOperations.getListOfPosts,
    getUsers: userOperations.getUsers
};

const ListOfPostsContainer = connect(
    mapStateToProps,
    mapDispatchToProps
)(ListOfPosts);

export default ListOfPostsContainer;