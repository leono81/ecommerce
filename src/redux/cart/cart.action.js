import cartActionType from "./cart.type"

export const addItem = (item) => ({
  type: cartActionType.ADD_ITEM,
  payload: item,
})

export const toggleCartHidden = () => ({
  type: cartActionType.TOGGLE_CART_HIDDEN,
})
