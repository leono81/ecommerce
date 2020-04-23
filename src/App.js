import React from "react"
import { Switch, Route } from "react-router-dom"

import "./App.css"

import HomePage from "./Pages/Home/Home"
import ShopPage from "./Pages/Shop/Shop"
import Header from "./component/Header/Header"
import signInAndUp from "./Pages/SignIn&SignUp/signInAndUp"

function App() {
  return (
    <div>
      <Header />
      <Switch>
        <Route exact path='/' component={HomePage} />
        <Route exact path='/shop' component={ShopPage} />
        <Route exact path='/signin' component={signInAndUp} />
      </Switch>
    </div>
  )
}

export default App
