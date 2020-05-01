import React from "react"

import CustomButton from "../CustomButton/CustomButton"

import "./CartDropDown.scss"

const CartDropDown = () => (
  <div className='cart-dropdown'>
    <div className='cart-items'></div>
    <CustomButton>Go to Checkout</CustomButton>
  </div>
)

export default CartDropDown
