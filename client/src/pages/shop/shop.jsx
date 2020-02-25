import React, { useEffect, lazy, Suspense } from 'react'
import { Route } from 'react-router-dom';

import { connect } from 'react-redux';
import { fetchCollectionsStart } from '../../redux/shop/shop.actions';

const CollectionOverviewContainer = lazy(() => import('../../components/collection-overview/collection-overview.container'));
const CollectionsContainer = lazy(() => import('../collection/collection-container'));

const ShopPage = ({ fetchCollectionsStart, match }) => {
    useEffect(() => {
        fetchCollectionsStart();
    }, [fetchCollectionsStart]);
    return (
        <div className='shop-page'>
            <Suspense fallback={<div> Loading ...</div>}>
            <Route exact path={`${match.path}`} component={CollectionOverviewContainer} />
            <Route path={`${match.path}/:collectionId`} component={CollectionsContainer} />
            </Suspense>
        </div>
    )
}
const mapDispatchToProps = dispatch => ({
    fetchCollectionsStart: () => dispatch(fetchCollectionsStart())
});

export default connect(null, mapDispatchToProps)(ShopPage);
