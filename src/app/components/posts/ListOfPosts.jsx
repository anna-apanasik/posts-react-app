import React, {Component} from 'react';
import PropTypes from 'prop-types';
import PostItem from "./PostItem";
import "../../styles/ListOfPostsStyles.scss"

const propTypes = {
    listOfPosts: PropTypes.array,
    postWasCreated: PropTypes.bool
};

class ListOfPosts extends Component {
    componentWillMount() {
        this.props.getListOfPosts();
    }

    shouldComponentUpdate(nextProps) {
        if(nextProps.postWasCreated) {
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
                            <PostItem post={item}/>
                        </li>)}
                    </ul>
                </div>
            </div>
        )
    }
}

ListOfPosts.propTypes = propTypes;

export default ListOfPosts;