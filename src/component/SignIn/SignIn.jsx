import React, { Component } from "react"

import FormInput from "../formInput/formInput"
import CustomButton from "../CustomButton/CustomButton"

import { signInWithGoogle } from "../../firebase/firebase.utils"

import "./SignIn.scss"

class SignIn extends Component {
  constructor(props) {
    super(props)

    this.state = {
      email: "",
      password: "",
    }
  }

  handleSubmit = (event) => {
    event.preventDefault()

    this.setState({
      email: "",
      password: "",
    })
  }

  handleChange = (event) => {
    const { value, name } = event.target

    this.setState({ [name]: value })
  }

  render() {
    return (
      <div className='sign-in'>
        <h2>I already have and Account</h2>
        <span>Sign In with your email and password</span>

        <form onSubmit={this.handleSubmit}>
          <FormInput
            name='email'
            type='email'
            handleChange={this.handleChange}
            value={this.state.email}
            label='email'
            required
          />
          <FormInput
            name='password'
            type='password'
            value={this.state.password}
            handleChange={this.handleChange}
            label='password'
            required
          />
          <div className='buttons'>
            <CustomButton type='submit'> Sign In</CustomButton>
            <CustomButton onClick={signInWithGoogle} isgooglesignin>
              Sign In with Google
            </CustomButton>
          </div>
        </form>
      </div>
    )
  }
}

export default SignIn
