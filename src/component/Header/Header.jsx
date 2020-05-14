import React from "react"
import { Link } from "react-router-dom"
import { connect } from "react-redux"
import { createStructuredSelectore, createStructuredSelector } from "reselect"

import { auth } from "../../firebase/firebase.utils"
import CartIcon from "../CartComponent/CartIcon"
import CartDropDown from "../CartDropDown/CartDropDown"
import {
  selectCartHiden,
  selectCartHidden,
} from "../../redux/cart/cart.selector"
import { selectCurrentUser } from "../../redux/user/user.selector"

import { ReactComponent as Logo } from "../../assets/crownLogo.svg"

import "./Header.scss"

const Header = ({ currentUser, hidden }) => {
  return (
    <div className='header'>
      <Link className='logo-container' to='/'>
        <Logo className='logo' />
      </Link>
      <div className='options'>
        <Link className='option' to='/shop'>
          SHOP
        </Link>
        <Link className='option' to='/shop'>
          CONTACT
        </Link>
        {currentUser ? (
          <div className='option' onClick={() => auth.signOut()}>
            SIGN OUT
          </div>
        ) : (
          <Link className='option' to='/signin'>
            SIGN IN
          </Link>
        )}
        <CartIcon />
      </div>
      {hidden ? null : <CartDropDown />}
    </div>
  )
}

const mapStateToProps = createStructuredSelector({
  currentUser: selectCurrentUser,
  hidden: selectCartHidden,
})

export default connect(mapStateToProps)(Header)
