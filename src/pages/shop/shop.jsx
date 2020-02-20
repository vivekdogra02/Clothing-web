import React from 'react'
import CollectionOverview from '../../components/collection-overview/collection-overview'
import { Route } from 'react-router-dom';
import CollectionPage from '../collection/collection';

import { convertCollectionsSnapshotToMap, firestore } from '../../firebase/firebase.util';
import { connect } from 'react-redux';
import {updateCollections} from '../../redux/shop/shop.actions';
import WithSpinner from '../../hoc/with-spinner/with-spinner';

const CollectionOverviewWithSpinner = WithSpinner(CollectionOverview);
const CollectionPageWithSpinner = WithSpinner(CollectionPage);
class ShopPage extends React.Component {
    state = {
        loading: true
    }

    unsubscribeFromSnapshot = null;

    componentDidMount() {
        const {updateCollections} = this.props;
        const collectionRef = firestore.collection('collections');
        this.unsubscribeFromSnapshot = collectionRef.get().then( snapshot => {
                const collectionMap = convertCollectionsSnapshotToMap(snapshot);
                updateCollections(collectionMap);
                this.setState({loading: false});
        })

    }
    render() {
        const {match} = this.props;
        const {loading} = this.state;
        return (
            <div className='shop-page'>
                <Route exact path={`${match.path}`} render = {(props) =><CollectionOverviewWithSpinner isLoading={loading} {...props} /> } />
                <Route path={`${match.path}/:collectionId`}  render = {(props) =><CollectionPageWithSpinner isLoading={loading} {...props} /> }  />
            </div>
        )
    }
}

const mapDispatchToProps = dispatch => ({
    updateCollections: collectionMap => dispatch(updateCollections(collectionMap))
});
    
export default connect(null, mapDispatchToProps)(ShopPage);
