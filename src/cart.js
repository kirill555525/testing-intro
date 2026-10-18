function notImplemented() {
  throw new Error('Корзина ещё не реализована. Сначала прочитайте тесты.');
}

function addToCart(cart, product, quantity) {
  if (quantity < 1) {
    throw new RangeError('Количество должно быть больше нуля');
  }

  const prod = cart.find(prod => prod.id === product.id);
  if (!prod) {

    if (quantity > product.stock) {
      throw new RangeError('Недостаточно товара на складе');
    }

    cart.push({ ...product, quantity: quantity });
  } else {
    if (prod.quantity + quantity > product.stock) {
      throw new RangeError('Недостаточно товара на складе');
    }
    prod.quantity += quantity;
  }
  return cart;
}

function changeQuantity(cart, productId, newQuantity) {
  if (newQuantity <= 0) {
    throw new RangeError('Количество должно быть больше нуля');
  }

  const productInCart = cart.find(item => item.id === productId);

  if (!productInCart) {
    return cart;
  }

  if (newQuantity > productInCart.stock) {
    throw new RangeError('Недостаточно товара на складе');
  }

  productInCart.quantity = newQuantity;

  return cart
}


function removeFromCart(cart, productId) {
  const index = cart.findIndex(item => item.id === productId);

  if (index === -1) {
    return cart;
  }
  cart.splice(index, 1);
  return cart;
}

function calculateCartSubtotal(cart) {
  return cart.reduce((total, item) => { return total + item.price * item.quantity; }, 0);
}
function calculateOrderTotal() { return notImplemented(); }

const cartApi = { addToCart, changeQuantity, removeFromCart, calculateCartSubtotal, calculateOrderTotal };

if (typeof module !== 'undefined') module.exports = cartApi;
if (typeof window !== 'undefined') window.cartApi = cartApi;
