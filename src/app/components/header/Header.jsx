import React, {Component} from 'react';
import PostModalContainer from "../../containers/posts/PostModalContainer";

class Header extends Component {
    constructor() {
        super();
        this.state = {
            modalIsOpen: false
        };

    }


    render() {
        return (
            <div>
                <nav className="navbar navbar-expand-lg navbar-light bg-light">
                    <a className="navbar-brand">React App</a>
                    <button className="btn btn-outline-success my-2 my-sm-0"
                            type="submit"
                            data-toggle="modal"
                            data-target=".openPostModal">Add Post
                    </button>
                </nav>

                <div className="modal fade openPostModal"
                     aria-labelledby="openPostModal"
                     tabIndex="-1"
                     aria-hidden="true"
                     role="dialog">
                    <PostModalContainer/>
                </div>
            </div>

        )
    }
}

export default Header;