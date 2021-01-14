import React from 'react';
import './collection-overview.scss'
import {connect} from 'react-redux'
import {createStructuredSelector} from 'reselect'
import {selectCollectionsForPreview} from '../../Redux/shop/shop.selectors'
import PreviewCollection from '../PreviewCollection/PreviewCollection'


const collectionOverview = ({ collections }) =>{
        return (
                <div className='collections-overview'>
                         {
                                        collections.map(({id, ...otherCollectionProps}) => (
                                                <PreviewCollection key={id} {...otherCollectionProps} />
                                        ))
                                }
                </div>
        )
}

const mapStateToProps = createStructuredSelector(
        {
                // collections : selectCollections
                collections: selectCollectionsForPreview
        }
)

export default connect(mapStateToProps)(collectionOverview)

