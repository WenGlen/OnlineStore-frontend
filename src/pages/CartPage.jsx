import React, { useState } from 'react';
import Header from '../components/Header';
import Button from '../components/Button';

const CartPage = () => {
  const [cartItems, setCartItems] = useState([
    {
      id: 1,
      name: 'P. Bifurcatum',
      variant: 'MOUNT READY',
      price: 45.00,
      quantity: 1,
      image: null
    },
    {
      id: 2,
      name: 'P. Ridleyi',
      variant: 'Rare',
      subvariant: 'SPECIMEN',
      price: 85.00,
      quantity: 1,
      image: null
    }
  ]);

  // 推薦商品
  const recommendedItems = [
    { id: 1, name: 'Premium Sphagnum Moss', price: 12.00, image: null },
    { id: 2, name: 'Cedar Mounting Board', price: 24.00, image: null },
    { id: 3, name: 'Mounting Line (50m)', price: 8.50, image: null },
    { id: 4, name: 'Fern Bloom Fertilizer', price: 18.00, image: null }
  ];

  const updateQuantity = (id, delta) => {
    setCartItems(items =>
      items.map(item =>
        item.id === id
          ? { ...item, quantity: Math.max(1, item.quantity + delta) }
          : item
      )
    );
  };

  const subtotal = cartItems.reduce((sum, item) => sum + (item.price * item.quantity), 0);
  const shipping = 15.00;
  const tax = subtotal * 0.08;
  const total = subtotal + shipping + tax;

  return (
    <div className="cart-page">
      <Header />

      {/* Cart Header */}
      <section className="cart-header">
        <div className="cart-header__container">
          <h1 className="cart-header__title">Your Shopping Cart</h1>
          <p className="cart-header__subtitle">Review your selected ferns and accessories</p>
        </div>
      </section>

      {/* Cart Content */}
      <section className="cart-content">
        <div className="cart-content__container">
          {/* Left: Cart Items */}
          <div className="cart-items">
            {/* Table Header */}
            <div className="cart-items__header">
              <span className="cart-items__col cart-items__col--product">Product</span>
              <span className="cart-items__col cart-items__col--quantity">Quantity</span>
              <span className="cart-items__col cart-items__col--price">Price</span>
              <span className="cart-items__col cart-items__col--total">Total</span>
            </div>

            {/* Items */}
            {cartItems.map(item => (
              <div key={item.id} className="cart-item">
                <div className="cart-item__product">
                  <div className="cart-item__image">
                    <div className="cart-item__image-placeholder">
                      <span>🌿</span>
                    </div>
                  </div>
                  <div className="cart-item__info">
                    <h3 className="cart-item__name">{item.name}</h3>
                    <p className="cart-item__variant">
                      <span className="cart-item__variant-tag">{item.variant}</span>
                      {item.subvariant && (
                        <span className="cart-item__subvariant">{item.subvariant}</span>
                      )}
                    </p>
                  </div>
                </div>

                <div className="cart-item__quantity">
                  <button
                    className="cart-item__qty-btn"
                    onClick={() => updateQuantity(item.id, -1)}
                  >
                    −
                  </button>
                  <span className="cart-item__qty-value">{item.quantity}</span>
                  <button
                    className="cart-item__qty-btn"
                    onClick={() => updateQuantity(item.id, 1)}
                  >
                    +
                  </button>
                </div>

                <div className="cart-item__price">
                  ${item.price.toFixed(2)}
                </div>

                <div className="cart-item__total">
                  ${(item.price * item.quantity).toFixed(2)}
                </div>
              </div>
            ))}
          </div>

          {/* Right: Order Summary */}
          <div className="cart-summary">
            <div className="cart-summary__card">
              <h2 className="cart-summary__title">Order Summary</h2>

              <div className="cart-summary__rows">
                <div className="cart-summary__row">
                  <span>Subtotal</span>
                  <span>${subtotal.toFixed(2)}</span>
                </div>
                <div className="cart-summary__row">
                  <span>Shipping estimate</span>
                  <span>${shipping.toFixed(2)}</span>
                </div>
                <div className="cart-summary__row">
                  <span>Estimated Tax</span>
                  <span>${tax.toFixed(2)}</span>
                </div>
              </div>

              <div className="cart-summary__total">
                <span>Total</span>
                <span className="cart-summary__total-value">${total.toFixed(2)}</span>
              </div>

              <Button variant="primary" size="lg" fullWidth className="cart-summary__checkout">
                Proceed to Checkout
              </Button>

              <p className="cart-summary__secure">
                🔒 Secure SSL Encrypted Payment
              </p>
            </div>

            {/* Promo Image */}
            <div className="cart-summary__promo">
              <div className="cart-summary__promo-placeholder">
                <span>🌿</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Complete your setup */}
      <section className="cart-recommend">
        <div className="cart-recommend__container">
          <h2 className="cart-recommend__title">Complete your setup</h2>

          <div className="cart-recommend__grid">
            {recommendedItems.map(item => (
              <div key={item.id} className="cart-recommend__item">
                <div className="cart-recommend__image">
                  <div className="cart-recommend__image-placeholder">
                    <span>🪴</span>
                  </div>
                </div>
                <h3 className="cart-recommend__item-name">{item.name}</h3>
                <p className="cart-recommend__item-price">${item.price.toFixed(2)}</p>
                <button className="cart-recommend__add-btn">
                  + Add to Cart
                </button>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Simple Footer */}
      <footer className="cart-footer">
        <p>© 2024 Platycerium Haven. Minimalist botanical design for your home.</p>
      </footer>
    </div>
  );
};

export default CartPage;
