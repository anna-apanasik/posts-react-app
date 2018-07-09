import React, {Component} from 'react';
import PostModalContainer from "../../containers/posts/PostModalContainer";

class Header extends Component {
    constructor() {
        super();
        this.state = {
            isOpen: false
        };

        this.openModal = this.openModal.bind(this);
        this.closeModal = this.closeModal.bind(this);
    }

    openModal() {
        this.setState({isOpen: true})
    }

    closeModal() {
        this.setState({isOpen: false});
    }

    render() {
        return (
            <div>
                <nav className="navbar navbar-expand-lg navbar-light bg-light">
                    <a className="navbar-brand">React App</a>
                    <button className="btn btn-outline-success my-2 my-sm-0"
                            type="submit"
                           onClick={this.openModal}>Add Post
                    </button>
                </nav>
                <div>
                    <PostModalContainer isOpen={this.state.isOpen}
                                        closeModal={this.closeModal}/>
                </div>
            </div>

        )
    }
}

export default Header;