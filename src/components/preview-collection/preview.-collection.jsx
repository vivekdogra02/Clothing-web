import React from 'react';
import './preview-collection.scss';
import CollectionItem from '../collection-item/collection-item';


const PreviewCollection = ({title, items}) => (
    <div className='collection-preview'>
        <div className='title'>{title.toUpperCase()}</div>
        <div className='preview'>
            {items
            .filter((item, idx) => idx < 4)
            .map(({id, ...otherprops}) => (
                <CollectionItem key= {id} {...otherprops}></CollectionItem>
            )) }
        </div>
    </div>
)

export default PreviewCollection;