function notImplemented() {
  throw new Error('Корзина ещё не реализована. Сначала прочитайте тесты.');
}

function addToCart(cart, product, quantity) {
  if (quantity < 1) {
    throw new RangeError('Количество должно быть больше нуля');
  }

  if (quantity > product.stock) {
    throw new RangeError('Недостаточно товара на складе');
  }

  const prod = cart.find(prod => prod.id === product.id);
  if (!prod) {
    cart.push({ ...product, quantity: quantity });
  } else {
    prod.quantity += quantity;
  }
  return cart;
}
function changeQuantity() { return notImplemented(); }
function removeFromCart() { return notImplemented(); }
function calculateCartSubtotal() { return notImplemented(); }
function calculateOrderTotal() { return notImplemented(); }

const cartApi = { addToCart, changeQuantity, removeFromCart, calculateCartSubtotal, calculateOrderTotal };

if (typeof module !== 'undefined') module.exports = cartApi;
if (typeof window !== 'undefined') window.cartApi = cartApi;
