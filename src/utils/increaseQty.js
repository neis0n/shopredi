/* increase qty (in cart) */
function increaseQty(cartItems, itemTitle) {
  const newCart = [];

  for (let i = 0; i < cartItems.length; i++) {
    const item = cartItems[i];
    if (item.title === itemTitle) {
      newCart.push({ ...item, quantity: item.quantity + 1 });
    } else {
      newCart.push(item);
    }
  }

  return newCart;
}

export default increaseQty;