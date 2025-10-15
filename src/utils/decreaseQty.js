/* decrease qty in cart (-1) */

function decreaseQtySmart(cartItems, itemTitle) {
  const newCart = [];

  for (let i = 0; i < cartItems.length; i++) {
    const item = cartItems[i]

    if (item.title === itemTitle) {
      const newQuantity = item.quantity > 1 ? item.quantity - 1 : 1 // min 1
      newCart.push({ ...item, quantity: newQuantity })
    } else {
      newCart.push(item) // unchanged
    }
  }

  return newCart;
}

export default decreaseQtySmart;