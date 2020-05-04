import React from "react"
import { connect } from "react-redux"

import { toggleCartHidden } from "../../redux/cart/cart.action"
import { ReactComponent as ShoppingIcon } from "../../assets/bag.svg"

import "./CartIcon.scss"

const CartIcon = ({ toggleCartHidden }) => (
  <div className='cart-icon'>
    <ShoppingIcon className='shopping-icon' onClick={toggleCartHidden} />
    <span className='item-count'>0</span>
  </div>
)

const mapDispatchToProps = (dispatch) => ({
  toggleCartHidden: () => dispatch(toggleCartHidden()),
})

export default connect(null, mapDispatchToProps)(CartIcon)