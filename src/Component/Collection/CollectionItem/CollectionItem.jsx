import React from 'react';
import './CollectionItem.scss';
import CustomButton from '../../custom-button/custom-button'
import { connect } from 'react-redux'
import { AddItem } from '../../Redux/cart/cart.actions'
const CollectionItem = ({ item, AddItem}) =>{
        const { name, price, imageUrl } = item
        return(
                <div className="collection-item">
                        <div className='image' 
                        style={{ 
                                backgroundImage: `url(${imageUrl})`
                                }} 
                        />
                        <div className='collection-footer'>
                                <span className='name'>{name}</span>
                                <span className='name'>{price}</span>
                        </div>
                        <CustomButton onClick={() => AddItem(item)} inverted> Add to cart </CustomButton>
                </div>
        )
}
// we actually dispatch or call this function this function will receive
//the item as the property pass it into our ad item.
//Action creator which gives us back that object where the type 
//is equal to AD item and the payload is equal to the item they got passed
// in and then we will dispatch that new object into our store and it will go through our
//  redux flow
const mapDispatchToProps = dispatch => ({
               AddItem: item =>  dispatch(AddItem(item))
})
export default connect(null, mapDispatchToProps)(CollectionItem )


