import { createStructuredSelector } from 'reselect';
import { selectIsCollectionsLoaded } from '../../redux/shop/shop.selectors';
import { connect } from 'react-redux';
import WithSpinner from '../../hoc/with-spinner/with-spinner';
import { compose } from 'redux';
import CollectionPage from './collection';

const mapStateToProps = createStructuredSelector({
    isLoading: state =>  !selectIsCollectionsLoaded(state)
});

const CollectionsContainer = compose(
    connect(mapStateToProps),
    WithSpinner
)(CollectionPage);

export default CollectionsContainer;