import React from "react"
import { Link } from "react-router-dom"

import { auth } from "../../firebase/firebase.utils"

import { ReactComponent as Logo } from "../../assets/crownLogo.svg"

import "./Header.scss"

const Header = ({ currentUser }) => (
  <div className='header'>
    <Link className='logo-container' to='/'>
      <Logo className='Logo' />
    </Link>
    <div className='options'>
      <Link className='option' to='/shop'>
        Shop
      </Link>
      <Link className='option' to='/contact'>
        Contact
      </Link>
      {currentUser ? (
        <div className='userInfo-Wrapper'>
          <div className='userInfo-Container'>
            <div className='option'>{currentUser.displayName}</div>
            <img src={currentUser.photoURL} alt='' />
          </div>
          <div className='option userInfo-menu' onClick={() => auth.signOut()}>
            Sign Out
          </div>
        </div>
      ) : (
        <Link className='option' to='/signin'>
          Sign In
        </Link>
      )}
    </div>
  </div>
)

export default Header
