import React, { Component } from 'react'
import './App.css';
import HomePage from './Component/Menu/Homepage/Homepage'
import { Switch, Route, Redirect } from 'react-router-dom';
import ShopPage from './Component/Collection/ShopPage'
import Header from './Component/Header/header'
import SignInAndSignup from './Component/Login-register/sign-in-sign-up'
import { auth, createUserProfileDocument } from './Component/FireBase/firebase'
import { connect } from 'react-redux'
import { setCurrentUser } from './Component/Redux/user/user.actions'
import { selectCurrentUser } from './Component/Redux/user/user.selectors'
import { createStructuredSelector } from 'reselect' // extends us a little bit less code rewrite than we would normally have to do
import CheckoutPage from './Component/Checkout/Checkout'
class App extends Component {
  // constructor() {
  //   super()
  //   this.state = {
  //     currentUser: null
  //   }
  // }
  unsubscribeFromAuth = null

  componentDidMount() {

    const { setCurrentUser } = this.props

    this.unsubscribeFromAuth = auth.onAuthStateChanged(async userAuth => {
      // incase login if the userAuth exists
      if (userAuth) {
        const userRef = await createUserProfileDocument(userAuth)
        userRef.onSnapshot(snapShot => {
          setCurrentUser({
            id: snapShot.id,
            ...snapShot.data()
          })
        })
      }

      setCurrentUser(userAuth)
      // this is in case when you log out, it will set a new state for u
      // console.log(this.state)

    })
  }

  //it takes care of any memory leaks that otherwise may happen when you exit the app.
  // Confusing : https://egghead.io/lessons/react-stop-memory-leaks-with-componentwillunmount-lifecycle-method-in-react#:~:text=The%20problem%20is%2C%20if%20you%20unmount%20the%20component%2C,component%20is%20unmounted%20or%20removed%20from%20the%20DOM.
  componentWillUnmount() {
    this.unsubscribeFromAuth()
  }
  render() {
    return (
      <div >
        <Header />
        <Switch>
          <Route exact path='/' component={HomePage} />
          <Route path='/shop' component={ShopPage} />
          <Route exact path='/signin' render={() => (this.props.currentUser ? (<Redirect to='/' />) : (<SignInAndSignup />))} />
          <Route exact path='/checkout' component={CheckoutPage} />
        </Switch>
      </div>
    );
  }

}
// const mapStateToProps = (state) => ({
const mapStateToProps = createStructuredSelector(
  {
    // currentUser: user.currentUser
    currentUser: selectCurrentUser
  }
)


// dispatching actions to the store
// connect can accept an argument called mapDispatchToProps,
// which lets you create functions that dispatch when  called, 
//and pass those functions as props to your component.
const mapDispatchToProps = dispatch => ({
  setCurrentUser: user => dispatch(setCurrentUser(user))
})

export default connect(mapStateToProps, mapDispatchToProps)(App);
