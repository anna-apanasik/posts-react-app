import {connect} from 'react-redux';
import ListOfPosts from "../../components/posts/ListOfPosts";
import {postOperations} from "../../../redux/posts";

const mapStateToProps = state => ({
    posts: state.post.listOfPosts,
    postWasCreated: state.post.postWasCreated,
    postWasUpdated: state.post.postWasUpdated,
    postWasDeleted: state.post.postWasDeleted
});

const mapDispatchToProps = {
    getListOfPosts: postOperations.getListOfPosts
};

const ListOfPostsContainer = connect(
    mapStateToProps,
    mapDispatchToProps
)(ListOfPosts);

export default ListOfPostsContainer;