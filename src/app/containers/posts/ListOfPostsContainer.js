import {connect} from 'react-redux';
import ListOfPosts from "../../components/posts/ListOfPosts";
import {postOperations} from "../../../redux/post";

const mapStateToProps = state => ({
    posts: state.post.listOfPosts,
    postWasCreated: state.post.postWasCreated
});

const mapDispatchToProps = {
    getListOfPosts: postOperations.getListOfPosts
};

const ListOfPostsContainer = connect(
    mapStateToProps,
    mapDispatchToProps
)(ListOfPosts);

export default ListOfPostsContainer;