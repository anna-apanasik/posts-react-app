import React, {Component} from 'react';
import PostModalContainer from "../../containers/posts/PostModalContainer";
import "../../styles/HeaderStyles.scss"

class Header extends Component {
    constructor() {
        super();
        this.state = {
            isOpen: false,
            sortingTypes: [
                {
                    type: 'title',
                    name: 'By title'
                },
                {
                    type: 'text',
                    name: 'By text'
                }]
        };

        this.openModal = this.openModal.bind(this);
        this.closeModal = this.closeModal.bind(this);
        this.sortByType = this.sortByType.bind(this);
    }

    openModal() {
        this.setState({isOpen: true})
    }

    closeModal() {
        this.setState({isOpen: false});
    }

    sortByType(sorting) {
        this.props.sortByType(sorting.type);
    }

    render() {
        return (
            <div>
                <nav className="navbar navbar-expand-lg navbar-light bg-light header-container">
                    <a className="navbar-brand">React App</a>
                    <div className="navbar-buttons">
                        <button className="btn btn-outline-success my-2 my-sm-0 add-post-button"
                                type="submit"
                                onClick={this.openModal}>Add Post
                        </button>
                        <div className="dropdown">
                            <button className="btn btn-outline-success dropdown-toggle sort-posts-button"
                                    type="button"
                                    data-toggle="dropdown"
                                    aria-haspopup="true"
                                    aria-expanded="false">
                                Sort
                            </button>
                            <div className="dropdown-menu" aria-labelledby="dropdownMenuButton">
                                {this.state.sortingTypes.map((item, index) =>
                                    <button key={index}
                                            className="dropdown-item"
                                            type="button"
                                            onClick={() => this.sortByType(item)}> {item.name}
                                    </button>)}
                            </div>
                        </div>
                    </div>
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