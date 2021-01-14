import React, {Component} from 'react';
import MenuItem from '../MenuItem/MenuItem'
import './Directory.scss'
import {connect} from 'react-redux'
import {selectDirectorySections} from '../../Redux/directory/directory.selectors'
import {createStructuredSelector} from 'reselect'

// class Directory extends Component {
const Directory = ({sections}) =>
    {
        // constructor() {
        //         super()

        //         this.state = {
        //                 sections: [
        //                                 {
        //                                 title: 'hats',
        //                                 imageUrl: 'https://i.ibb.co/cvpntL1/hats.png',
        //                                 id: 1,
        //                                 linkUrl: 'shop/hats', 
        //                                 size: 'large'
        //                                 },
        //                                 {
        //                                 title: 'jackets',
        //                                 imageUrl: 'https://i.ibb.co/px2tCc3/jackets.png',
        //                                 id: 2,
        //                                 linkUrl: 'shop/jackets',
        //                                 size: 'large'
                                
        //                                 },
        //                                 {
        //                                 title: 'sneakers',
        //                                 imageUrl: 'https://i.ibb.co/0jqHpnp/sneakers.png',
        //                                 id: 3,
        //                                 linkUrl: 'shop/sneakers',
        //                                 size: 'large'
        //                                 },
        //                                 {
        //                                 title: 'womens',
        //                                 imageUrl: 'https://i.ibb.co/GCCdy8t/womens.png',
        //                                 size: 'large',
        //                                 id: 4,
        //                                 linkUrl: 'shop/womens',
        //                                 size: 'large'
        //                                 },
        //                                 {
        //                                 title: 'mens',
        //                                 imageUrl: 'https://i.ibb.co/R70vBrQ/men.png',
        //                                 size: 'large',
        //                                 id: 5,
        //                                 linkUrl: 'shop/mens',
        //                                 size: 'large'
        //                                 }
        //                         ]
        //         }
        // }
        // render(){
                return(
                        <div className='directory-menu'>
                                        {
                                                // this.state.sections.map(( {title,imageUrl,id,size, linkUrl})  => (<MenuItem key={id} title={title} imageUrl={imageUrl} size={size} linkUrl={linkUrl} />))
                                               sections.map(( {id, ...otherSectionProps })  => (<MenuItem key={id} {...otherSectionProps} />))
                                        }

                        </div>
                )
        }
// }
const mapStateToProps = createStructuredSelector(
        {
                sections: selectDirectorySections
        }
)
export default connect(mapStateToProps)(Directory)