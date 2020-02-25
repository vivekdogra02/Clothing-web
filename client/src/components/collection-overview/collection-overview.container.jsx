import { createStructuredSelector } from 'reselect';
import { selectIsCollectionFetching } from '../../redux/shop/shop.selectors';
import { connect } from 'react-redux';
import collectionOverview from './collection-overview';
import WithSpinner from '../../hoc/with-spinner/with-spinner';
import { compose } from 'redux';

const mapStateToProps = createStructuredSelector({
    isLoading: selectIsCollectionFetching
});

const CollectionOverviewContainer = compose(
    connect(mapStateToProps),
    WithSpinner
)(collectionOverview);

export default CollectionOverviewContainer;