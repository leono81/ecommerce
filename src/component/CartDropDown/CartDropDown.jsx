import React from "react"
import { connect } from "react-redux"
import { createStructuredSelector } from "reselect"
import { withRouter } from "react-router-dom"

import CartItem from "../CartItem/CartItem"

import CustomButton from "../CustomButton/CustomButton"
import { selectCartItems } from "../../redux/cart/cart.selector"
import { toggleCartHidden } from "../../redux/cart/cart.action"

import "./CartDropDown.scss"

const CartDropDown = ({ cartItems, history, dispatch }) => (
  <div className='cart-dropdown'>
    <div className='cart-items'>
      {cartItems.length ? (
        cartItems.map((cartItem) => (
          <CartItem key={cartItem.id} item={cartItem} />
        ))
      ) : (
        <span className='empty-message'>Your cart is empty</span>
      )}
    </div>
    <CustomButton
      onClick={() => {
        history.push("/checkout")
        dispatch(toggleCartHidden())
      }}
    >
      Go to Checkout
    </CustomButton>
  </div>
)

const mapStateToProp = createStructuredSelector({
  cartItems: selectCartItems,
})

export default withRouter(connect(mapStateToProp)(CartDropDown))
