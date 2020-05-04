import React from "react"
import { connect } from "react-redux"

import CartItem from "../CartItem/CartItem"

import CustomButton from "../CustomButton/CustomButton"

import "./CartDropDown.scss"

const CartDropDown = ({ cartItems }) => (
  <div className='cart-dropdown'>
    <div className='cart-items'>
      {cartItems.map((cartItem) => (
        <CartItem key={cartItem.id} item={cartItem} />
      ))}
    </div>
    <CustomButton>Go to Checkout</CustomButton>
  </div>
)

const mapStateToProp = ({ cart: { cartItems } }) => ({
  cartItems,
})

export default connect(mapStateToProp)(CartDropDown)
