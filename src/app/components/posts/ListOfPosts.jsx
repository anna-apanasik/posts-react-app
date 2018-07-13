import React, {Component} from 'react';
import PropTypes from 'prop-types';
import PostItemContainer from "../../containers/posts/PostItemContainer";
import '../../styles/ListOfPostsStyles.scss'

const propTypes = {
    listOfPosts: PropTypes.array,
    postWasChanged: PropTypes.bool,
    getListOfPosts: PropTypes.func.isRequired,
    getUsers: PropTypes.func.isRequired
};

const defaultProps = {
    listOfPosts: [],
    postWasChanged: false
};

export default class ListOfPosts extends Component {
    componentDidMount() {
        this.props.getListOfPosts();
        this.props.getUsers();
    }

    shouldComponentUpdate(nextProps) {
        if (nextProps.postWasChanged) {
            this.props.getListOfPosts();
        }
        return true;
    }

    render() {
        const posts = this.props.posts;
        return (
            <div className="row justify-content-center">
                <div className="col-6">
                    <h1 className="title">Posts</h1>
                    <ul className="list-of-posts">
                        {posts.length > 0 ? posts.map(item => <li key={item.id}>
                                <PostItemContainer post={item}/>
                            </li>) :
                            <p className="display-4">You don't have posts...</p>}
                    </ul>
                </div>
            </div>
        )
    }
}

ListOfPosts.propTypes = propTypes;
ListOfPosts.defaultProps = defaultProps;