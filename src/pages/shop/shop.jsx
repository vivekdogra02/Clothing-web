import React from 'react'
import { Route } from 'react-router-dom';

import { connect } from 'react-redux';
import {fetchCollectionsStart } from '../../redux/shop/shop.actions';

import CollectionOverviewContainer from '../../components/collection-overview/collection-overview.container';
import CollectionsContainer from '../collection/collection-container';

class ShopPage extends React.Component {
    
    componentDidMount() {        
        const { fetchCollectionsStart} = this.props;
        fetchCollectionsStart()
    }
    render() {
        const {match} = this.props;
        return (
            <div className='shop-page'>
                <Route exact path={`${match.path}`} component = {CollectionOverviewContainer} />
                <Route path={`${match.path}/:collectionId`}  component = {CollectionsContainer}  />
            </div>
        )
    }
}
const mapDispatchToProps = dispatch => ({
    fetchCollectionsStart: () =>  dispatch(fetchCollectionsStart())
});
    
export default connect(null, mapDispatchToProps)(ShopPage);
