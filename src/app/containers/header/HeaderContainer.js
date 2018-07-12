import {connect} from 'react-redux';
import {postOperations} from '../../../redux/posts';
import Header from '../../components/header/Header';

const mapStateToProps = state => ({
    isOpenErrorModal: state.common.showError
});

const mapDispatchToProps = {
    sortByType: postOperations.sortByType
};

const HeaderContainer = connect(
    mapStateToProps,
    mapDispatchToProps
)(Header);

export default HeaderContainer;