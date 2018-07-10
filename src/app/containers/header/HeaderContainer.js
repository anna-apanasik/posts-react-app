import {connect} from 'react-redux';
import {postOperations} from "../../../redux/post";
import Header from "../../components/header/Header";

const mapDispatchToProps = {
    sortByType: postOperations.sortByType,
};

const HeaderContainer = connect(
    null,
    mapDispatchToProps
)(Header);

export default HeaderContainer;