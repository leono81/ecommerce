import React from "react"

import "./signInAndUp.scss"

import SignIn from "../../component/SignIn/SignIn"
import SignUp from "../../component/SignUp/SignUp"

const signInAndUp = () => (
  <div className='sign-in-and-sign-up'>
    <SignIn />
    <SignUp />
  </div>
)

export default signInAndUp
