import { createSelector } from 'reselect'
import memoize from 'lodash.memoize';



const selectShop = state => state.shop

export const selectCollections = createSelector(
        [selectShop],
        shop => shop.collections
)

//to get the category item
export const selectCollectionsForPreview = createSelector(
        [selectCollections],
        collections => Object.keys(collections).map(key => collections[key])
)
// does the same idea of memoization as reselect does for our selectors, and this function if dor route and each  category page
export const selectCollection = collectionUrlParam => createSelector(
        [selectCollections],
        collections => collections.find(collection => {
                return collection.routeName === collectionUrlParam
        }
        )
)


// Has a bug but it is the example of data normalization
// export const selectCollection = memoize((collectionUrlParam) =>
//         createSelector(
//                 [selectCollections],
//                 (collections) => collections[collectionUrlParam]
//         )
// );