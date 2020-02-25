import React from 'react';
import './collection-overview.scss';
import { connect } from 'react-redux';
import PreviewCollection from '../preview-collection/preview.-collection';
import { createStructuredSelector } from 'reselect';
import { selectCollectionPreview } from '../../redux/shop/shop.selectors';

const CollectionOverview = ({collections}) => (
    <div className='collections-overview'>
         {collections.map(({ id, ...otherprops }) => (
                <PreviewCollection key={id} {...otherprops} />
            ))}
    </div>
)

const mapStateToProps = createStructuredSelector({
    collections: selectCollectionPreview
})
export default connect(mapStateToProps)(CollectionOverview);