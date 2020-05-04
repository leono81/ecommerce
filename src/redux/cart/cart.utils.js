export const addItemToCart = (cartItems, cartItemToAdd) => {
  //validates that the product already exist on the store
  const existingCartItem = cartItems.find(
    (cartItem) => cartItem.id === cartItemToAdd.id
  )

  //if it does, will return a new array with the new Product added 1
  if (existingCartItem) {
    return cartItems.map((cartItem) =>
      cartItem.id === cartItemToAdd.id
        ? { ...cartItem, quantity: cartItem.quantity + 1 }
        : cartItem
    )
  }
  //if it doesn't, means that product is new ,so we will entry 1 to quantity product
  return [...cartItems, { ...cartItemToAdd, quantity: 1 }]
}
