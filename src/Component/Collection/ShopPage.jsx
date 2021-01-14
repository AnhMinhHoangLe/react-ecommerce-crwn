import React from 'react'
// import SHOP_DATA from './shop_data'
import collectionOverview from './CollectionsOverview/collections-overview'
import {Route} from 'react-router-dom'
import CollectionPage from './Collection/Collection'
// class ShopPage extends Component {
const ShopPage = ( {match} )  =>{
        // constructor(props) {
        //         super(props)
                
        //         this.state = {
        //                 collections: SHOP_DATA   
        //         } 
        // }
                        
        // render() {
                // const {collections} = this.state
                return(
                        <div className="shop-page">
                                < Route exact path={`${match.path}`} component={collectionOverview} />
                                < Route exact path={`${match.path}/:collectionId`} component={CollectionPage} />


                        </div>
                )
        }

export default ShopPage