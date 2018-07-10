import React, {Component} from 'react';
import PropTypes from 'prop-types';
import PostItemContainer from "../../containers/posts/PostItemContainer";
import "../../styles/ListOfPostsStyles.scss"

const propTypes = {
    listOfPosts: PropTypes.array,
    postWasCreated: PropTypes.bool,
    postWasUpdated: PropTypes.bool,
    postWasDeleted: PropTypes.bool
};

class ListOfPosts extends Component {
    componentDidMount() {
        this.props.getListOfPosts();
    }

    shouldComponentUpdate(nextProps) {
        if (nextProps.postWasCreated || nextProps.postWasUpdated || nextProps.postWasDeleted) {
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
                        {posts.map(item => <li key={item.id}>
                            <PostItemContainer post={item}/>
                        </li>)}
                    </ul>
                </div>
            </div>
        )
    }
}

ListOfPosts.propTypes = propTypes;

export default ListOfPosts;