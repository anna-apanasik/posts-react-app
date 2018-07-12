import React, {Component} from 'react';
import PropTypes from 'prop-types';
import PostModalContainer from "../../containers/modals/PostModalContainer";
import FilterModalContainer from "../../containers/modals/FilterModalContainer";
import "../../styles/HeaderStyles.scss"

const propTypes = {
    sortByType: PropTypes.func.isRequired
};

const sortingTypes = [
    {
        type: 'title',
        name: 'By title'
    },
    {
        type: 'text',
        name: 'By text'
    }];

const openModalButtons = [
    {
        component: PostModalContainer,
        text: 'Add Post',
        isOpen: 'isOpenPostModal'
    },
    {
        component: FilterModalContainer,
        text: 'Filter',
        isOpen: 'isOpenFilterModal'
    }
];

export default class Header extends Component {
    constructor() {
        super();
        this.state = {
            isOpenPostModal: false,
            isOpenFilterModal: false,
        };

        this.openModal = this.openModal.bind(this);
        this.closeModal = this.closeModal.bind(this);
        this.sortByType = this.sortByType.bind(this);
    }

    openModal(modalName) {
        this.setState({[modalName]: true});
    }

    closeModal(modalName) {
        this.setState({[modalName]: false});
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
                        {openModalButtons.map((item, index) =>
                            <button
                                className="btn btn-outline-success my-2 my-sm-0 add-post-button"
                                type="submit"
                                key={index}
                                onClick={() => this.openModal(item.isOpen)}>{item.text}
                            </button>)}
                        <div className="dropdown">
                            <button
                                className="btn btn-outline-success dropdown-toggle sort-posts-button"
                                type="button"
                                data-toggle="dropdown"
                                aria-haspopup="true"
                                aria-expanded="false">
                                Sort
                            </button>
                            <div className="dropdown-menu" aria-labelledby="dropdownMenuButton">
                                {sortingTypes.map((item, index) =>
                                    <button
                                        key={index}
                                        className="dropdown-item"
                                        type="button"
                                        onClick={() => this.sortByType(item)}> {item.name}
                                    </button>)}
                            </div>
                        </div>
                    </div>
                </nav>
                <div>
                    {openModalButtons.map((item, index) =>
                        <item.component
                            key={index}
                            isOpen={this.state[item.isOpen]}
                            closeModal={() => this.closeModal(item.isOpen)}/>)}
                </div>
            </div>
        )
    }
}

Header.propTypes = propTypes;