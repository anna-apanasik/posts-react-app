import {connect} from 'react-redux';
import {postOperations} from "../../../redux/post/index";
import FilterModal from "../../components/modals/FilterModal";

const mapDispatchToProps = {
    filterByTypeWithValue: postOperations.filterByTypeWithValue
};

const FilterModalContainer = connect(
    null,
    mapDispatchToProps
)(FilterModal);

export default FilterModalContainer;