import React from 'react'

import {SpinnerContainer, SpinnerOverlay} from './with-spinner.styles'
// WrappedComponent: HOC => return a new Compoenent/function
const withSpinner = WrappedComponent => ({isLoading, ...otherProps}) =>{
        return isLoading ? (
                <SpinnerOverlay>
                        <SpinnerContainer />
                </SpinnerOverlay>
        ) : <WrappedComponent {...otherProps} />
}
export default withSpinner