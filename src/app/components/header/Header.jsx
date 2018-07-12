import React, {Component} from 'react';
import PropTypes from 'prop-types';
import PostModalContainer from "../../containers/modals/PostModalContainer";
import FilterModalContainer from "../../containers/modals/FilterModalContainer";
import ErrorModalContainer from "../../containers/modals/ErrorModalContainer";
import "../../styles/HeaderStyles.scss"

const propTypes = {
    sortByType: PropTypes.func.isRequired,
    isOpenErrorModal: PropTypes.bool.isRequired
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

const modals = [
    {
        component: PostModalContainer,
        isButton: true,
        text: 'Add Post',
        isOpen: 'isOpenPostModal'
    },
    {
        component: FilterModalContainer,
        isButton: true,
        text: 'Filter',
        isOpen: 'isOpenFilterModal'
    },
    {
        component: ErrorModalContainer,
        isButton: false,
        isOpen: 'isOpenErrorModal'
    }
];

export default class Header extends Component {
    constructor(props) {
        super(props);
        this.state = {
            isOpenPostModal: false,
            isOpenFilterModal: false,
            isOpenErrorModal: this.props.isOpenErrorModal
        };

        this.openModal = this.openModal.bind(this);
        this.closeModal = this.closeModal.bind(this);
        this.sortByType = this.sortByType.bind(this);
    }

    static getDerivedStateFromProps(props, state) {
        if(props.isOpenErrorModal !== state.isOpenErrorModal) {
            return {
                isOpenErrorModal: props.isOpenErrorModal
            };
        }

        return null;
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
                        {modals.map((item, index) => {
                            if (item.isButton) {
                                return <button
                                    className="btn btn-outline-success my-2 my-sm-0 add-post-button"
                                    type="submit"
                                    key={index}
                                    onClick={() => this.openModal(item.isOpen)}>{item.text}
                                </button>
                            }
                        })}
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
                    {modals.map((item, index) =>
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