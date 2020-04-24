import React from "react"
import { Switch, Route } from "react-router-dom"

import "./App.css"

import HomePage from "./Pages/Home/Home"
import ShopPage from "./Pages/Shop/Shop"
import Header from "./component/Header/Header"
import signInAndUp from "./Pages/SignIn&SignUp/signInAndUp"
import { auth } from "./firebase/firebase.utils"

class App extends React.Component {
  constructor() {
    super()

    this.state = {
      currentUser: null,
    }
  }

  unsubscribeFromAuth = null

  componentDidMount() {
    this.unsubscribeFromAuth = auth.onAuthStateChanged((user) => {
      this.setState({ currentUser: user })

      console.log(user)
    })
  }

  componentWillUnmount() {
    this.unsubscribeFromAuth()
  }

  render() {
    return (
      <div>
        <Header currentUser={this.state.currentUser} />
        <Switch>
          <Route exact path='/' component={HomePage} />
          <Route exact path='/shop' component={ShopPage} />
          <Route exact path='/signin' component={signInAndUp} />
        </Switch>
      </div>
    )
  }
}

export default App
