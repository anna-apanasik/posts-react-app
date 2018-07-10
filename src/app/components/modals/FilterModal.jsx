import React, {Component} from 'react';
import PropTypes from 'prop-types';
import Modal from 'react-bootstrap4-modal';

const propTypes = {
    isOpen: PropTypes.bool.isRequired,
    closeModal: PropTypes.func.isRequired,
    filterByTypeWithValue: PropTypes.func.isRequired
};

const filteringTypes = [
    {
        name: 'User ID',
        type: 'userId'
    }
];

class FilterModal extends Component {
    constructor(props) {
        super(props);
        this.state = {
            type: filteringTypes[0].type,
            value: ''
        };

        this.handleChangeValue = this.handleChangeValue.bind(this);
        this.handleChangeSelect = this.handleChangeSelect.bind(this);
        this.filter = this.filter.bind(this);
    }

    handleChangeValue(e) {
        this.setState({value: e.target.value});
    }

    handleChangeSelect(e) {
        this.setState({type: e.target.value});
    }

    filter() {
        this.props.filterByTypeWithValue(this.state.type, this.state.value);
        this.props.closeModal();
        this.resetState();
    }

    resetState() {
        this.setState({value: ''})
    }

    render() {
        return (
            <Modal visible={this.props.isOpen} onClickBackdrop={this.props.closeModal}>
                <div className="modal-header">
                    <h5 className="modal-title">Filter</h5>
                    <button type="button"
                            className="close"
                            onClick={this.props.closeModal}>
                        <span aria-hidden="true">&times;</span>
                    </button>
                </div>
                <div className="modal-body">
                    <div className="form-group">
                        <label>Select type of filter</label>
                        <select className="form-control"
                                onSelect={this.handleChangeSelect}>
                            {filteringTypes.map((item, index) =>
                                <option key={index}
                                        value={item.type}> {item.name}
                                </option>)}
                        </select>
                    </div>
                    <div className="form-group">
                        <label>Value</label>
                        <input type="text"
                               value={this.state.value}
                               onChange={this.handleChangeValue}
                               className="form-control form-control-sm"
                               placeholder="Enter value for filter"/>
                    </div>
                </div>
                <div className="modal-footer">
                    <button type="button"
                            className="btn btn-primary"
                            data-dismiss="modal"
                            onClick={this.filter}
                            disabled={!this.state.value}> Filter
                    </button>
                </div>
            </Modal>
        )
    }
}

FilterModal.propTypes = propTypes;

export default FilterModal;